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
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name.startsWith('browser-profile-')) {
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
  'references/client-studio-production-workflow.md',
  'references/studio-art-direction-pipeline.md',
  'references/production-milestone-gates.md',
  'references/studio-implementation-delivery-workflow.md',
  'references/roadmap-strategy-audit.md',
  'examples/README.md',
  'examples/client-studio-end-to-end-trace.md',
  'scripts/validate-proof-package.mjs',
  'validation/runtime-fixtures/web-first-playable-slice/README.md',
  'validation/runtime-fixtures/web-first-playable-slice/index.html',
  'validation/runtime-fixtures/web-first-playable-slice/delivery-report.md',
  'validation/runtime-fixtures/web-first-playable-slice/tests/smoke.mjs',
  'validation/runtime-fixtures/web-first-playable-slice/tests/visual-qa.mjs',
  'validation/test-results-v0.5.0.md',
  'validation/test-results-v0.6.0.md',
  'validation/test-results-v0.7.0.md',
  'validation/test-results-v0.8.0.md',
  'validation/final-goal-coverage-v0.8.0.md',
  'validation/v0.9-real-project-proof-plan.md',
  'validation/v1.0-acceptance-proof-protocol.md'
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
const validationResultsV050 = read('validation/test-results-v0.5.0.md');
const validationResultsV060 = read('validation/test-results-v0.6.0.md');
const validationResultsV070 = read('validation/test-results-v0.7.0.md');
const validationResultsV080 = read('validation/test-results-v0.8.0.md');
const finalGoalCoverage = read('validation/final-goal-coverage-v0.8.0.md');
const v090ProofPlan = read('validation/v0.9-real-project-proof-plan.md');
const v100ProofProtocol = read('validation/v1.0-acceptance-proof-protocol.md');
const endToEndTrace = read('examples/client-studio-end-to-end-trace.md');

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
  skill.includes('Client Studio Production Workflow') && skill.includes('references/client-studio-production-workflow.md'),
  'Client Studio Production Workflow is routed by SKILL.md',
  'SKILL.md must route Client Studio Production Workflow to its lazy-loaded reference'
);
assert(
  skill.includes('references/studio-art-direction-pipeline.md') &&
    skill.includes('visual target') &&
    skill.includes('Product Design'),
  'Studio Art Direction Pipeline is routed by SKILL.md',
  'SKILL.md must route studio art direction, visual targets, and Product Design coordination to the lazy-loaded reference'
);
assert(
  skill.includes('references/production-milestone-gates.md') &&
    skill.includes('vertical slice') &&
    skill.includes('client acceptance'),
  'Production Milestone Gates are routed by SKILL.md',
  'SKILL.md must route production milestone and client acceptance work to the lazy-loaded reference'
);
assert(
  skill.includes('references/studio-implementation-delivery-workflow.md') &&
    skill.includes('implementation') &&
    skill.includes('QA') &&
    skill.includes('acceptance'),
  'Studio Implementation Delivery Workflow is routed by SKILL.md',
  'SKILL.md must route implementation, QA, acceptance, and delivery reporting to the lazy-loaded reference'
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
assert(
  readme.includes('Client Studio Production Workflow') &&
    readme.includes('client briefs') &&
    readme.includes('commissioned work') &&
    readme.includes('formal art direction') &&
    readme.includes('production architecture'),
  'English README documents the client/studio workflow',
  'README.md must describe the Client Studio Production Workflow, client briefs, commissioned work, formal art direction, and production architecture'
);
assert(
  readme.includes('Studio Art Direction Pipeline') &&
    readme.includes('Product Design plugin') &&
    readme.includes('visual target') &&
    readme.includes('Production Milestone Gates'),
  'English README documents the studio art direction and milestone gates',
  'README.md must describe the Studio Art Direction Pipeline, Product Design plugin coordination, visual targets, and Production Milestone Gates'
);
assert(
  readme.includes('Studio Implementation Delivery Workflow') &&
    readme.includes('QA evidence') &&
    readme.includes('playtest') &&
    readme.includes('client-facing delivery reports'),
  'English README documents implementation delivery',
  'README.md must describe the Studio Implementation Delivery Workflow, QA evidence, playtest notes, and client-facing delivery reports'
);
assert(
  readme.includes('client-studio workflow trace') &&
    readme.includes('final-goal coverage'),
  'English README points to workflow trace and final-goal coverage',
  'README.md must point readers to the client-studio workflow trace and final-goal coverage notes'
);
assert(
  readmeZh.includes('Client Studio Production Workflow') &&
    readmeZh.includes('甲方') &&
    readmeZh.includes('委託製作') &&
    readmeZh.includes('正式美術方向') &&
    readmeZh.includes('技術架構'),
  'Traditional Chinese README documents the client/studio workflow',
  'README.zh-TW.md must describe the Client Studio Production Workflow, 甲方, 委託製作, 正式美術方向, and 技術架構'
);
assert(
  readmeZh.includes('Studio Art Direction Pipeline') &&
    readmeZh.includes('Product Design plugin') &&
    readmeZh.includes('visual target') &&
    readmeZh.includes('Production Milestone Gates'),
  'Traditional Chinese README documents the studio art direction and milestone gates',
  'README.zh-TW.md must describe the Studio Art Direction Pipeline, Product Design plugin coordination, visual targets, and Production Milestone Gates'
);
assert(
  readmeZh.includes('Studio Implementation Delivery Workflow') &&
    readmeZh.includes('QA 證據') &&
    readmeZh.includes('playtest') &&
    readmeZh.includes('client-facing delivery report'),
  'Traditional Chinese README documents implementation delivery',
  'README.zh-TW.md must describe the Studio Implementation Delivery Workflow, QA evidence, playtest notes, and client-facing delivery reports'
);
assert(
  readmeZh.includes('client-studio workflow trace') &&
    readmeZh.includes('final-goal coverage'),
  'Traditional Chinese README points to workflow trace and final-goal coverage',
  'README.zh-TW.md must point readers to the client-studio workflow trace and final-goal coverage notes'
);
assert(
  skill.includes('Default to **Quick Check**') &&
    skill.includes('Do not read references by default') &&
    skill.includes('Client Studio Production Workflow'),
  'Quick Check remains the default while client/studio workflow is separately routed',
  'SKILL.md must keep Quick Check lightweight and route Client Studio Production Workflow separately'
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
  promptHeadings.length >= 15 && promptHeadings.every((number, index) => number === index + 1),
  `Test prompts are sequential (${promptHeadings.length} found)`,
  `Expected at least 15 sequential test prompts; found: ${promptHeadings.join(', ')}`
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

const resultHeadings = [...validationResultsV050.matchAll(/^## Test ([0-9]+):/gm)].map((match) => Number(match[1]));
assert(
  resultHeadings.length >= 10 && resultHeadings.every((number, index) => number === index + 1),
  `Recorded validation results cover ${resultHeadings.length} prompts`,
  `Expected recorded results for at least 10 sequential prompts; found: ${resultHeadings.join(', ')}`
);
assert(
  validationResultsV060.includes('## Test 11: Client Studio Production Workflow') &&
    validationResultsV060.includes('Status: `Passed`') &&
    validationResultsV060.includes('references/client-studio-production-workflow.md'),
  'v0.6.0 validation covers Client Studio Production Workflow',
  'validation/test-results-v0.6.0.md must record the Client Studio Production Workflow test'
);
assert(
  validationResultsV070.includes('## Test 12: Studio Art Direction / Product Design Pipeline') &&
    validationResultsV070.includes('## Test 13: Production Milestone Gate') &&
    validationResultsV070.includes('Status: `Passed`') &&
    validationResultsV070.includes('references/studio-art-direction-pipeline.md') &&
    validationResultsV070.includes('references/production-milestone-gates.md'),
  'v0.7.0 validation covers art direction and milestone gates',
  'validation/test-results-v0.7.0.md must record the studio art direction and production milestone gate tests'
);
assert(
  validationResultsV080.includes('## Test 14: End-to-End Implementation Delivery') &&
    validationResultsV080.includes('Status: `Passed`') &&
    validationResultsV080.includes('references/studio-implementation-delivery-workflow.md'),
  'v0.8.0 validation covers implementation delivery',
  'validation/test-results-v0.8.0.md must record the end-to-end implementation delivery test'
);
assert(
  finalGoalCoverage.includes('## Requirement Coverage') &&
    finalGoalCoverage.includes('Real end-to-end use on a game repo') &&
    finalGoalCoverage.includes('Partially proven') &&
    finalGoalCoverage.includes('external real game repository') &&
    finalGoalCoverage.includes('Recommended Next Proof') &&
    finalGoalCoverage.includes('validation/v1.0-acceptance-proof-protocol.md'),
  'Final goal coverage audit records partial runtime proof and remaining external proof gap',
  'validation/final-goal-coverage-v0.8.0.md must map requirements and clearly state the partial runtime proof plus remaining external proof gap and v1.0 proof protocol'
);
assert(
  v100ProofProtocol.includes('# v1.0 Acceptance Proof Protocol') &&
    v100ProofProtocol.includes('Required Proof Package') &&
    v100ProofProtocol.includes('Minimum External Proof') &&
    v100ProofProtocol.includes('Screenshot or visual QA evidence') &&
    v100ProofProtocol.includes('Do not count a screenshot requirement as passed') &&
    v100ProofProtocol.includes('v1.0 Release Gate'),
  'v1.0 acceptance proof protocol defines external proof, visual evidence, and release gates',
  'validation/v1.0-acceptance-proof-protocol.md must define the external proof package, visual evidence rules, and v1.0 release gate'
);
assert(
  v090ProofPlan.includes('# v0.9 Real Project Proof Plan') &&
    v090ProofPlan.includes('Candidate Project Criteria') &&
    v090ProofPlan.includes('Do not commit copied third-party project source') &&
    v090ProofPlan.includes('validation/proof-<project>-v1.0.0.md') &&
    v090ProofPlan.includes('scripts/validate-proof-package.mjs --require'),
  'v0.9 real project proof plan defines candidate criteria, evidence rules, and required proof validation',
  'validation/v0.9-real-project-proof-plan.md must define candidate criteria, evidence rules, and required proof validation'
);
assert(
  endToEndTrace.includes('# Client Studio End-to-End Trace') &&
    endToEndTrace.includes('Expected Reference Loading') &&
    endToEndTrace.includes('Implementation Delivery Plan') &&
    endToEndTrace.includes('Delivery Report') &&
    endToEndTrace.includes('Failure Conditions'),
  'Client studio end-to-end trace documents expected delivery behavior',
  'examples/client-studio-end-to-end-trace.md must document expected reference loading, implementation delivery, delivery report, and failure conditions'
);
assert(
  read('validation/runtime-fixtures/web-first-playable-slice/delivery-report.md').includes('Client Acceptance Status') &&
    read('validation/runtime-fixtures/web-first-playable-slice/delivery-report.md').includes('Ruthless Playtester Note') &&
    read('validation/runtime-fixtures/web-first-playable-slice/delivery-report.md').includes('Architecture Boundaries'),
  'Runtime fixture delivery report records acceptance, playtest note, and architecture boundaries',
  'Runtime fixture delivery report must include client acceptance status, ruthless playtester note, and architecture boundaries'
);

try {
  execFileSync(process.execPath, [
    '--check',
    'scripts/validate-proof-package.mjs'
  ], {
    cwd: root,
    encoding: 'utf8'
  });
  pass('v1.0 proof package validator has valid JavaScript syntax');
} catch (error) {
  fail(`v1.0 proof package validator syntax check failed: ${error.message}`);
}

try {
  const proofValidatorOutput = execFileSync(process.execPath, [
    'scripts/validate-proof-package.mjs'
  ], {
    cwd: root,
    encoding: 'utf8'
  });
  assert(
    proofValidatorOutput.includes('v1.0 proof package validation'),
    'v1.0 proof package validator runs without a proof package',
    'v1.0 proof package validator did not produce expected output'
  );
} catch (error) {
  fail(`v1.0 proof package validator failed without proof package: ${error.message}`);
}

try {
  execFileSync(process.execPath, [
    'scripts/validate-proof-package.mjs',
    '--require'
  ], {
    cwd: root,
    encoding: 'utf8'
  });
  fail('v1.0 proof package validator --require should fail when no proof package exists');
} catch (error) {
  const output = `${error.stdout ?? ''}${error.stderr ?? ''}`;
  assert(
    output.includes('no proof packages found'),
    'v1.0 proof package validator --require fails when no proof package exists',
    'v1.0 proof package validator --require failed without the expected no-proof message'
  );
}

try {
  const smokeOutput = execFileSync(process.execPath, [
    'validation/runtime-fixtures/web-first-playable-slice/tests/smoke.mjs'
  ], {
    cwd: root,
    encoding: 'utf8'
  });
  assert(
    smokeOutput.includes('web-first-playable-slice smoke: passed'),
    'Runtime fixture smoke test passes',
    'Runtime fixture smoke test did not report success'
  );
} catch (error) {
  fail(`Runtime fixture smoke test failed: ${error.message}`);
}

try {
  const visualQaOutput = execFileSync(process.execPath, [
    'validation/runtime-fixtures/web-first-playable-slice/tests/visual-qa.mjs'
  ], {
    cwd: root,
    encoding: 'utf8'
  });
  const visualQaReport = read('validation/runtime-fixtures/web-first-playable-slice/artifacts/visual-qa-report.md');
  assert(
    visualQaOutput.includes('web-first-playable-slice visual QA: passed') ||
      visualQaOutput.includes('web-first-playable-slice visual QA: blocked'),
    'Runtime fixture visual QA script reports passed or blocked',
    'Runtime fixture visual QA script must report an explicit passed or blocked status'
  );
  assert(
    visualQaReport.includes('Status: `Passed`') || visualQaReport.includes('Status: `Blocked`'),
    'Runtime fixture visual QA report records explicit status',
    'Runtime fixture visual QA report must record Status: `Passed` or Status: `Blocked`'
  );
} catch (error) {
  fail(`Runtime fixture visual QA script failed unexpectedly: ${error.message}`);
}

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
