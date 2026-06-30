import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import process from 'node:process';

const args = process.argv.slice(2);
const writeIndex = args.indexOf('--write');
const dateIndex = args.indexOf('--date');
const outputPath = writeIndex >= 0
  ? args[writeIndex + 1] || 'validation/engine-runtime-environment-report.md'
  : null;
const reportDate = dateIndex >= 0 ? args[dateIndex + 1] || isoDate() : isoDate();
const root = process.cwd();

function isoDate() {
  return new Date().toISOString().slice(0, 10);
}

function commandSource(command) {
  try {
    const lookup = process.platform === 'win32' ? 'where.exe' : 'which';
    const output = execFileSync(lookup, [command], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
    return output.split(/\r?\n/).find(Boolean) || '';
  } catch {
    return '';
  }
}

function envPath(names) {
  for (const name of names) {
    const value = process.env[name];
    if (value && existsSync(value)) {
      return `${name}=${value}`;
    }
  }
  return '';
}

function listDirectories(directory) {
  if (!directory || !existsSync(directory)) {
    return [];
  }

  try {
    return readdirSync(directory, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => join(directory, entry.name));
  } catch {
    return [];
  }
}

function firstExisting(paths) {
  return paths.find((candidate) => candidate && existsSync(candidate)) || '';
}

function findGodotInstall() {
  const candidates = [];
  const roots = [
    process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, 'Programs', 'Godot'),
    process.env.ProgramFiles && join(process.env.ProgramFiles, 'Godot'),
    process.env['ProgramFiles(x86)'] && join(process.env['ProgramFiles(x86)'], 'Godot')
  ].filter(Boolean);

  for (const directory of roots) {
    if (!existsSync(directory)) {
      continue;
    }

    try {
      for (const entry of readdirSync(directory)) {
        const candidate = join(directory, entry);
        if (/godot.*\.exe$/i.test(entry) && existsSync(candidate) && statSync(candidate).isFile()) {
          candidates.push(candidate);
        }
      }
    } catch {
      // Ignore unreadable install directories.
    }
  }

  return candidates[0] || '';
}

function findUnityInstall() {
  const programFiles = process.env.ProgramFiles;
  const hubRoot = programFiles && join(programFiles, 'Unity', 'Hub', 'Editor');
  const hubEditors = listDirectories(hubRoot)
    .map((editorDirectory) => join(editorDirectory, 'Editor', 'Unity.exe'));

  return firstExisting([
    ...hubEditors,
    programFiles && join(programFiles, 'Unity', 'Editor', 'Unity.exe')
  ]);
}

function findUnrealInstall() {
  const epicRoot = process.env.ProgramFiles && join(process.env.ProgramFiles, 'Epic Games');
  const versionDirectories = listDirectories(epicRoot).filter((directory) => /UE_\d/i.test(directory));
  const candidates = [];

  for (const directory of versionDirectories) {
    candidates.push(join(directory, 'Engine', 'Binaries', 'Win64', 'UnrealEditor.exe'));
    candidates.push(join(directory, 'Engine', 'Binaries', 'Win64', 'UE4Editor.exe'));
  }

  return firstExisting(candidates);
}

function detectEngine(engine) {
  const commandEvidence = engine.commands
    .map((command) => commandSource(command))
    .find(Boolean);
  const envEvidence = envPath(engine.env);
  const installEvidence = engine.findInstall ? engine.findInstall() : '';
  const evidence = commandEvidence || envEvidence || installEvidence;

  return {
    name: engine.name,
    status: evidence ? 'Available' : 'Blocked',
    evidence: evidence || 'No PATH command, environment variable, or common install path found.',
    nextCapture: engine.nextCapture
  };
}

const engines = [
  {
    name: 'Godot',
    commands: ['godot', 'godot4', 'godot3'],
    env: ['GODOT_BIN', 'GODOT4_BIN', 'GODOT3_BIN'],
    findInstall: findGodotInstall,
    nextCapture: 'Open the project main scene and capture a running editor/export screenshot plus output log.'
  },
  {
    name: 'Unity',
    commands: ['Unity'],
    env: ['UNITY_EDITOR', 'UNITY_PATH', 'UNITYHUB_PATH'],
    findInstall: findUnityInstall,
    nextCapture: 'Open the target scene in Play Mode or a build and capture screenshot plus console status.'
  },
  {
    name: 'Unreal',
    commands: ['UnrealEditor', 'UE4Editor', 'UE5Editor'],
    env: ['UNREAL_EDITOR', 'UE_EDITOR', 'UE4_EDITOR', 'UE5_EDITOR'],
    findInstall: findUnrealInstall,
    nextCapture: 'Open the target map in PIE or a build and capture screenshot plus output log.'
  }
];

const results = engines.map(detectEngine);
const blockedCount = results.filter((result) => result.status === 'Blocked').length;
const status = blockedCount === 0 ? 'Ready' : 'Blocked';

const lines = [
  '# Engine Runtime Environment Report',
  '',
  `- Date: ${reportDate}`,
  '- Purpose: determine whether non-Web engine runtime visual QA can run in this environment.',
  `- Overall status: \`${status}\``,
  '- Scope: Godot, Unity, and Unreal runtime availability only. Web / HTML Canvas visual QA is tracked separately.',
  '',
  '## Results',
  '',
  '| Engine | Runtime Status | Evidence | Next Capture Route |',
  '|---|---|---|---|',
  ...results.map((result) => `| ${result.name} | \`${result.status}\` | ${result.evidence.replaceAll('|', '\\|')} | ${result.nextCapture} |`),
  '',
  '## Interpretation',
  '',
  blockedCount === 0
    ? '- Godot, Unity, and Unreal runtimes are detectable in this environment. Run project-specific capture steps before marking engine visual QA as passed.'
    : '- At least one non-Web engine runtime is unavailable in this environment. Static smoke tests and patch artifacts remain useful, but they must not be reported as runtime visual QA.',
  '- If an engine is installed outside PATH or common install locations, set the matching environment variable and rerun this script.',
  '- Do not use this environment report as a substitute for project-specific screenshots.',
  '',
  '## Suggested Commands',
  '',
  '```bash',
  'node scripts/check-engine-runtime-visual-qa.mjs',
  'node scripts/check-engine-runtime-visual-qa.mjs --write validation/engine-runtime-environment-report.md',
  '```',
  ''
];

const report = `${lines.join('\n')}`;

if (outputPath) {
  const absoluteOutput = join(root, outputPath);
  mkdirSync(dirname(absoluteOutput), { recursive: true });
  writeFileSync(absoluteOutput, report, 'utf8');
}

process.stdout.write(report);
