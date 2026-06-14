import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import process from 'node:process';

const root = process.cwd();
const failures = [];
const passes = [];

function pass(message) {
  passes.push(message);
}

function fail(message) {
  failures.push(message);
}

function read(relativePath) {
  const absolutePath = join(root, relativePath);
  if (!existsSync(absolutePath)) {
    fail(`Missing required file: ${relativePath}`);
    return '';
  }
  return readFileSync(absolutePath, 'utf8');
}

function walk(directory) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') {
      continue;
    }

    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(absolutePath));
    } else if (entry.isFile()) {
      files.push(absolutePath);
    }
  }
  return files;
}

function assert(condition, successMessage, failureMessage) {
  if (condition) {
    pass(successMessage);
  } else {
    fail(failureMessage);
  }
}

const requiredFiles = [
  'SKILL.md',
  'README.md',
  'README.zh-TW.md',
  'CHANGELOG.md',
  'CONTRIBUTING.md',
  'agents/openai.yaml',
  'prompts/test-prompts.md',
  'references/modes.md',
  'references/roadmap-strategy-audit.md',
  'examples/README.md',
  'validation/test-results-v0.5.0.md'
];

for (const file of requiredFiles) {
  assert(existsSync(join(root, file)), `Required file exists: ${file}`, `Missing required file: ${file}`);
}

const skill = read('SKILL.md');
const readme = read('README.md');
const readmeZh = read('README.zh-TW.md');
const changelog = read('CHANGELOG.md');
const metadata = read('agents/openai.yaml');
const prompts = read('prompts/test-prompts.md');
const validationResults = read('validation/test-results-v0.5.0.md');

const skillLines = skill.split(/\r?\n/);
const closingFrontmatter = skillLines.indexOf('---', 1);
assert(
  skillLines[0] === '---' && closingFrontmatter > 1,
  'SKILL.md has YAML frontmatter',
  'SKILL.md must start with valid YAML frontmatter delimiters'
);

if (closingFrontmatter > 1) {
  const frontmatter = skillLines.slice(1, closingFrontmatter).join('\n');
  const frontmatterKeys = [...frontmatter.matchAll(/^([a-zA-Z0-9_-]+):/gm)].map((match) => match[1]);
  assert(
    frontmatterKeys.length === 2 && frontmatterKeys.includes('name') && frontmatterKeys.includes('description'),
    'SKILL.md frontmatter contains only name and description',
    `SKILL.md frontmatter keys must be only name and description; found: ${frontmatterKeys.join(', ')}`
  );
  assert(
    /^name:\s*game-dev-studio\s*$/m.test(frontmatter),
    'SKILL.md name is game-dev-studio',
    'SKILL.md frontmatter name must be game-dev-studio'
  );
  assert(
    /^description:\s*>[\s\S]+/m.test(frontmatter) && frontmatter.split(/\r?\n/).length >= 4,
    'SKILL.md description is multiline',
    'SKILL.md description must use a real multiline block'
  );
}

const referenceMatches = [...skill.matchAll(/`(references\/[^`]+\.md)`/g)].map((match) => match[1]);
const linkedReferences = new Set(referenceMatches);
const referenceFiles = readdirSync(join(root, 'references'))
  .filter((file) => file.endsWith('.md'))
  .map((file) => `references/${file}`);

for (const reference of linkedReferences) {
  assert(existsSync(join(root, reference)), `Linked reference exists: ${reference}`, `SKILL.md links missing reference: ${reference}`);
}

for (const reference of referenceFiles) {
  assert(
    linkedReferences.has(reference),
    `Reference is directly routed from SKILL.md: ${reference}`,
    `Reference is not directly routed from SKILL.md: ${reference}`
  );
}

assert(
  skill.includes('Roadmap Strategy Audit') && skill.includes('references/roadmap-strategy-audit.md'),
  'Roadmap Strategy Audit is routed by SKILL.md',
  'SKILL.md must route Roadmap Strategy Audit to its lazy-loaded reference'
);

assert(
  readme.includes('[繁體中文](README.zh-TW.md)'),
  'English README links to Traditional Chinese',
  'README.md language switch link is missing or incorrect'
);
assert(
  readmeZh.includes('[English](README.md)'),
  'Traditional Chinese README links to English',
  'README.zh-TW.md language switch link is missing or incorrect'
);

const metadataVersion = metadata.match(/^version:\s*"([^"]+)"\s*$/m)?.[1];
const readmeVersion = readme.match(/\*\*Current version:\*\*\s*`v([^`]+)`/)?.[1];
const readmeZhVersion = readmeZh.match(/\*\*目前版本：\*\*\s*`v([^`]+)`/)?.[1];
const changelogVersion = changelog.match(/^## v([0-9]+\.[0-9]+\.[0-9]+)/m)?.[1];
const versions = [metadataVersion, readmeVersion, readmeZhVersion, changelogVersion];

assert(
  versions.every(Boolean) && new Set(versions).size === 1,
  `Public version fields agree on ${metadataVersion}`,
  `Version mismatch: metadata=${metadataVersion}, README=${readmeVersion}, README.zh-TW=${readmeZhVersion}, CHANGELOG=${changelogVersion}`
);

assert(
  /^name:\s*"game-dev-studio"\s*$/m.test(metadata) &&
    /^display_name:\s*"Game Dev Studio"\s*$/m.test(metadata) &&
    /^interface:\s*$/m.test(metadata) &&
    /^  default_prompt:\s*\|\s*$/m.test(metadata) &&
    /^policy:\s*$/m.test(metadata) &&
    /^  allow_implicit_invocation:\s*(true|false)\s*$/m.test(metadata),
  'agents/openai.yaml has expected multiline metadata structure',
  'agents/openai.yaml is missing required multiline metadata structure'
);

const promptHeadings = [...prompts.matchAll(/^## ([0-9]+)\./gm)].map((match) => Number(match[1]));
assert(
  promptHeadings.length >= 10 && promptHeadings.every((number, index) => number === index + 1),
  `Test prompts are sequential (${promptHeadings.length} found)`,
  `Expected at least 10 sequential test prompts; found: ${promptHeadings.join(', ')}`
);

const exampleDirectory = join(root, 'examples');
const caseFiles = existsSync(exampleDirectory)
  ? readdirSync(exampleDirectory).filter((file) => file.endsWith('.md') && file !== 'README.md')
  : [];
assert(
  caseFiles.length >= 3,
  `At least three cross-stack case studies are present (${caseFiles.length} found)`,
  `Expected at least three case study Markdown files; found ${caseFiles.length}`
);

const resultHeadings = [...validationResults.matchAll(/^## Test ([0-9]+):/gm)].map((match) => Number(match[1]));
assert(
  resultHeadings.length >= 10 && resultHeadings.every((number, index) => number === index + 1),
  `Recorded validation results cover ${resultHeadings.length} prompts`,
  `Expected recorded results for at least 10 sequential prompts; found: ${resultHeadings.join(', ')}`
);

const deprecatedName = ['game', 'dev', 'assistant'].join('-');
const textExtensions = new Set(['.md', '.yaml', '.yml', '.json', '.js', '.mjs', '.txt']);
const textFiles = walk(root).filter((file) => textExtensions.has(extname(file).toLowerCase()));

for (const file of textFiles) {
  const relativePath = relative(root, file).replaceAll('\\', '/');
  const content = readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);

  if (content.toLowerCase().includes(deprecatedName)) {
    fail(`Deprecated skill name found in ${relativePath}`);
  }

  if ((relativePath.endsWith('.md') || relativePath.endsWith('.yaml') || relativePath.endsWith('.yml')) &&
      lines.filter((line) => line.trim().length > 0).length < 2) {
    fail(`File is not real multiline content: ${relativePath}`);
  }

  lines.forEach((line, index) => {
    if (/[ \t]+$/.test(line)) {
      fail(`Trailing whitespace: ${relativePath}:${index + 1}`);
    }
  });
}

if (!failures.some((message) => message.startsWith('Deprecated skill name'))) {
  pass('No deprecated skill name found');
}
if (!failures.some((message) => message.startsWith('File is not real multiline'))) {
  pass('Markdown and YAML files are real multiline content');
}
if (!failures.some((message) => message.startsWith('Trailing whitespace'))) {
  pass('No trailing whitespace found');
}

assert(
  readme.includes('$game-dev-studio') &&
    readmeZh.includes('$game-dev-studio') &&
    prompts.includes('$game-dev-studio') &&
    !readme.includes(`$${' game-dev-studio'}`) &&
    !readmeZh.includes(`$${' game-dev-studio'}`),
  '$game-dev-studio invocation is consistent',
  'Skill invocation is missing or malformed'
);

let trackedSkillPackages = '';
try {
  trackedSkillPackages = execFileSync('git', ['ls-files', '*.skill'], {
    cwd: root,
    encoding: 'utf8'
  }).trim();
} catch (error) {
  fail(`Unable to inspect tracked .skill packages: ${error.message}`);
}
assert(
  trackedSkillPackages === '',
  'No generated .skill package is committed',
  `Generated .skill packages must not be committed: ${trackedSkillPackages}`
);

console.log(`Game Dev Studio validation: ${passes.length} passed, ${failures.length} failed`);
for (const message of passes) {
  console.log(`[PASS] ${message}`);
}
for (const message of failures) {
  console.error(`[FAIL] ${message}`);
}

if (failures.length > 0) {
  process.exit(1);
}
