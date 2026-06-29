import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import process from 'node:process';

const root = process.cwd();
const validationDir = join(root, 'validation');
const failures = [];
const passes = [];
const requireProof = process.argv.includes('--require');

function pass(message) {
  passes.push(message);
}

function fail(message) {
  failures.push(message);
}

function proofFilesFromArgs() {
  const args = process.argv.slice(2).filter((arg) => arg !== '--require');
  if (args.length > 0) {
    return args.map((arg) => resolve(root, arg));
  }

  if (!existsSync(validationDir)) {
    return [];
  }

  return readdirSync(validationDir)
    .filter((file) => /^proof-.+\.md$/.test(file))
    .map((file) => join(validationDir, file));
}

function hasSection(content, heading) {
  return new RegExp(`^${heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'm').test(content);
}

function validateProofFile(file) {
  const label = basename(file);
  if (!existsSync(file)) {
    fail(`${label}: proof file does not exist`);
    return;
  }

  const content = readFileSync(file, 'utf8');
  const requiredSections = [
    '## Source',
    '## Client Prompt',
    '## References Loaded',
    '## Studio Workflow Evidence',
    '## Implementation Evidence',
    '## Test Evidence',
    '## Ruthless Playtester Note',
    '## Client Acceptance Status'
  ];

  if (!/^# v1\.0 Proof Report:/m.test(content)) {
    fail(`${label}: missing "# v1.0 Proof Report:" title`);
  } else {
    pass(`${label}: has proof report title`);
  }

  for (const section of requiredSections) {
    if (hasSection(content, section)) {
      pass(`${label}: has ${section}`);
    } else {
      fail(`${label}: missing ${section}`);
    }
  }

  const requiredFields = [
    'Repository:',
    'Starting commit:',
    'Ending commit:',
    'Environment:',
    'Files inspected:',
    'Files changed:',
    'Architecture boundaries:',
    'UI / visual status:',
    'Motion / VFX / audio status:',
    'Verdict:',
    'Remaining risks:',
    'Client decisions:'
  ];

  for (const field of requiredFields) {
    if (content.includes(field)) {
      pass(`${label}: has ${field}`);
    } else {
      fail(`${label}: missing ${field}`);
    }
  }

  if (/```txt[\s\S]+?```/m.test(content)) {
    pass(`${label}: includes original prompt fence`);
  } else {
    fail(`${label}: missing original prompt fenced as txt`);
  }

  const statusMatches = [...content.matchAll(/\|\s*[^|\n]+\s*\|\s*`?(Passed|Failed|Not run|Blocked)`?\s*\|/g)];
  if (statusMatches.length >= 3) {
    pass(`${label}: records at least three explicit test statuses`);
  } else {
    fail(`${label}: expected at least three Passed/Failed/Not run/Blocked test statuses`);
  }

  if (/Visual QA\s*\|\s*`?Passed`?/i.test(content) && !/\.(png|jpg|jpeg|webp)|screenshot|visual comparison/i.test(content)) {
    fail(`${label}: Visual QA is Passed but no screenshot or visual comparison evidence is named`);
  }

  if (/<[^>\n]+>|TBD|TODO|placeholder/i.test(content)) {
    fail(`${label}: contains placeholder text that must be resolved before acceptance`);
  } else {
    pass(`${label}: no obvious placeholder markers`);
  }
}

const proofFiles = proofFilesFromArgs();

if (proofFiles.length === 0) {
  console.log('v1.0 proof package validation: no proof packages found');
  console.log('This is expected before v1.0.0; final readiness remains unproven.');
  process.exit(requireProof ? 1 : 0);
}

for (const file of proofFiles) {
  validateProofFile(file);
}

console.log(`v1.0 proof package validation: ${passes.length} passed, ${failures.length} failed`);
for (const message of passes) {
  console.log(`[PASS] ${message}`);
}
for (const message of failures) {
  console.error(`[FAIL] ${message}`);
}

if (failures.length > 0) {
  process.exit(1);
}
