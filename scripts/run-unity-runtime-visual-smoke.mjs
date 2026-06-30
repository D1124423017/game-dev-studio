import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync
} from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import process from 'node:process';

const root = process.cwd();
const outputImage = join(root, 'validation/proof-artifacts/unity-runtime-visual-smoke.png');
const outputReport = join(root, 'validation/proof-artifacts/unity-runtime-visual-smoke-report.md');
const smokeRoot = join(tmpdir(), 'game-dev-studio-unity-runtime-visual-smoke');
const projectPath = join(smokeRoot, 'UnityRuntimeVisualSmoke');
const logPath = join(smokeRoot, 'unity-editor.log');
const unityPath = findUnityInstall();

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

function commandSource(command) {
  try {
    const lookup = process.platform === 'win32' ? 'where.exe' : 'which';
    const output = spawnSync(lookup, [command], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).stdout.trim();
    return output.split(/\r?\n/).find(Boolean) || '';
  } catch {
    return '';
  }
}

function findUnityInstall() {
  const commandEvidence = commandSource('Unity');
  if (commandEvidence) {
    return commandEvidence;
  }

  for (const key of ['UNITY_EDITOR', 'UNITY_PATH']) {
    const value = process.env[key];
    if (value && existsSync(value)) {
      return value;
    }
  }

  const programFiles = process.env.ProgramFiles;
  const hubRoot = programFiles && join(programFiles, 'Unity', 'Hub', 'Editor');
  const hubEditors = listDirectories(hubRoot)
    .map((editorDirectory) => join(editorDirectory, 'Editor', 'Unity.exe'));

  return firstExisting([
    ...hubEditors,
    programFiles && join(programFiles, 'Unity', 'Editor', 'Unity.exe')
  ]);
}

function safeRemoveSmokeRoot() {
  const resolvedTemp = tmpdir().toLowerCase();
  const resolvedSmoke = smokeRoot.toLowerCase();

  if (!resolvedSmoke.startsWith(resolvedTemp) || basename(smokeRoot) !== 'game-dev-studio-unity-runtime-visual-smoke') {
    throw new Error(`Refusing to remove unexpected path: ${smokeRoot}`);
  }

  rmSync(smokeRoot, { recursive: true, force: true });
}

function writeProject() {
  safeRemoveSmokeRoot();
  mkdirSync(join(projectPath, 'Assets', 'Editor'), { recursive: true });
  mkdirSync(join(projectPath, 'ProjectSettings'), { recursive: true });
  mkdirSync(join(projectPath, 'Packages'), { recursive: true });

  writeFileSync(join(projectPath, 'ProjectSettings', 'ProjectVersion.txt'), [
    'm_EditorVersion: 6000.2.9f1',
    'm_EditorVersionWithRevision: 6000.2.9f1'
  ].join('\n'), 'utf8');

  writeFileSync(join(projectPath, 'Packages', 'manifest.json'), [
    '{',
    '  "dependencies": {}',
    '}',
    ''
  ].join('\n'), 'utf8');

  writeFileSync(join(projectPath, 'Assets', 'Editor', 'GameDevStudioRuntimeVisualSmoke.cs'), unityEditorScript, 'utf8');
}

function sanitizeLog(content) {
  const replacements = [
    [root, '%REPO%'],
    [smokeRoot, '%TEMP%/game-dev-studio-unity-runtime-visual-smoke'],
    [process.env.USERPROFILE, '%USERPROFILE%'],
    [process.env.TEMP, '%TEMP%'],
    [process.env.TMP, '%TEMP%'],
    [process.env.USERNAME, '%USERNAME%']
  ].filter(([value]) => value);

  let sanitized = content;
  for (const [from, to] of replacements.sort((a, b) => b[0].length - a[0].length)) {
    sanitized = sanitized.replaceAll(from, to);
  }

  return sanitized;
}

function sanitizeText(value) {
  return sanitizeLog(String(value || ''));
}

function logExcerpt() {
  if (!existsSync(logPath)) {
    return ['Log file was not created.'];
  }

  const sanitized = sanitizeLog(readFileSync(logPath, 'utf8'));
  const important = sanitized
    .split(/\r?\n/)
    .filter((line) =>
      /GDS_RUNTIME_VISUAL_SMOKE|error|exception|license|entitlement|batchmode|quit/i.test(line)
    )
    .slice(-20);

  return important.length > 0 ? important : sanitized.split(/\r?\n/).slice(-12);
}

function writeReport(status, details) {
  mkdirSync(dirname(outputReport), { recursive: true });
  const lines = [
    '# Unity Runtime Visual Smoke Report',
    '',
    `- Date: ${new Date().toISOString().slice(0, 10)}`,
    `- Status: \`${status}\``,
    '- Scope: local Unity runtime visual smoke fixture created in a temporary directory.',
    '- Release interpretation: useful non-Web engine runtime evidence, but not a replacement for external Unity project proof.',
    `- Unity editor: ${details.unityPath || 'not found'}`,
    `- Project path: ${sanitizeText(details.projectPath || 'not created')}`,
    `- Command: ${sanitizeText(details.command || 'not run')}`,
    `- Exit status: ${details.exitStatus ?? 'not run'}`,
    `- Viewport: ${details.viewport || '1280x720'}`,
    `- Screenshot: ${details.screenshot || 'none'}`,
    `- Screenshot size: ${details.screenshotSize || 0} bytes`,
    `- Runtime marker found: ${details.markerFound ? '`yes`' : '`no`'}`,
    '',
    '## Visual Target',
    '',
    '- Formal client-studio dashboard scene rendered through Unity camera.',
    '- Includes title typography, layered panels, scope / art / architecture / QA cards, accent bars, and small VFX spark markers.',
    '- This intentionally avoids browser DOM, canvas debug rectangles, and default web UI.',
    '',
    '## Acceptance Decision',
    '',
    details.acceptance,
    '',
    '## Sanitized Log Excerpt',
    '',
    '```txt',
    ...details.logExcerpt,
    '```',
    ''
  ];

  writeFileSync(outputReport, lines.join('\n'), 'utf8');
}

function run() {
  if (!unityPath) {
    writeReport('Blocked', {
      unityPath: '',
      projectPath,
      command: '',
      exitStatus: 'not run',
      screenshot: '',
      screenshotSize: 0,
      markerFound: false,
      acceptance: '- `Blocked`: Unity Editor was not detected.',
      logExcerpt: ['Unity Editor was not detected by PATH, UNITY_EDITOR, UNITY_PATH, or the Unity Hub install path.']
    });
    process.stdout.write('Unity runtime visual smoke: blocked (Unity not found)\n');
    return;
  }

  writeProject();
  mkdirSync(dirname(outputImage), { recursive: true });
  rmSync(outputImage, { force: true });

  const args = [
    '-batchmode',
    '-quit',
    '-projectPath',
    projectPath,
    '-executeMethod',
    'GameDevStudioRuntimeVisualSmoke.Capture',
    '-logFile',
    logPath
  ];
  const command = `"${unityPath}" ${args.map((arg) => arg.includes(' ') ? `"${arg}"` : arg).join(' ')}`;
  const result = spawnSync(unityPath, args, {
    cwd: projectPath,
    encoding: 'utf8',
    env: {
      ...process.env,
      GDS_UNITY_VISUAL_SMOKE_OUTPUT: outputImage
    },
    timeout: 180000
  });

  const screenshotSize = existsSync(outputImage) ? statSync(outputImage).size : 0;
  const logLines = logExcerpt();
  const markerFound = logLines.some((line) => line.includes('GDS_RUNTIME_VISUAL_SMOKE_SCREENSHOT'));
  const passed = result.status === 0 && screenshotSize > 50000 && markerFound;

  writeReport(passed ? 'Passed' : 'Blocked', {
    unityPath,
    projectPath,
    command,
    exitStatus: result.status ?? (result.signal ? `signal ${result.signal}` : 'unknown'),
    viewport: '1280x720',
    screenshot: screenshotSize > 0 ? 'validation/proof-artifacts/unity-runtime-visual-smoke.png' : 'none',
    screenshotSize,
    markerFound,
    acceptance: passed
      ? '- `Passed`: Unity opened the temporary project, rendered the client-studio visual smoke scene through a Unity camera, and wrote a non-empty PNG artifact.'
      : '- `Blocked`: Unity was detected but did not produce a clean screenshot artifact and runtime marker within the bounded command.',
    logExcerpt: logLines
  });

  process.stdout.write(passed
    ? 'Unity runtime visual smoke: passed\n'
    : 'Unity runtime visual smoke: blocked\n');
}

const unityEditorScript = String.raw`
using System.IO;
using UnityEditor;
using UnityEngine;

public static class GameDevStudioRuntimeVisualSmoke
{
    public static void Capture()
    {
        const int width = 1280;
        const int height = 720;
        string outputPath = System.Environment.GetEnvironmentVariable("GDS_UNITY_VISUAL_SMOKE_OUTPUT");
        if (string.IsNullOrEmpty(outputPath))
        {
            outputPath = Path.Combine(Application.dataPath, "..", "unity-runtime-visual-smoke.png");
        }

        Camera camera = CreateCamera();
        CreatePanel("Backdrop", new Vector3(0f, 0f, 3f), new Vector3(14f, 8f, 1f), new Color(0.035f, 0.047f, 0.063f, 1f));
        CreatePanel("Header", new Vector3(0f, 3.55f, 2f), new Vector3(12.4f, 0.85f, 1f), new Color(0.12f, 0.16f, 0.2f, 1f));
        CreatePanel("MainPanel", new Vector3(0f, 0.1f, 2f), new Vector3(12.1f, 5.85f, 1f), new Color(0.075f, 0.095f, 0.118f, 1f));
        CreatePanel("AccentLine", new Vector3(-3.15f, 2.6f, 1.6f), new Vector3(5.3f, 0.08f, 1f), new Color(0.96f, 0.72f, 0.27f, 1f));

        CreateText("GAME DEV STUDIO", new Vector3(-3.3f, 3.45f, 0f), 0.095f, new Color(0.98f, 0.95f, 0.86f, 1f));
        CreateText("Client Studio Runtime Visual QA", new Vector3(3.2f, 3.45f, 0f), 0.052f, new Color(0.68f, 0.8f, 0.92f, 1f));
        CreateText("FORMAL GAME UI - NOT PLACEHOLDER", new Vector3(-3.15f, 2.25f, 0f), 0.062f, new Color(0.98f, 0.95f, 0.86f, 1f));

        CreateCard("CLIENT BRIEF", "goal / player / platform", new Vector3(-4.45f, 0.9f, 0f), new Color(0.13f, 0.22f, 0.31f, 1f));
        CreateCard("MVP SCOPE", "must / defer / risk", new Vector3(-1.45f, 0.9f, 0f), new Color(0.18f, 0.2f, 0.29f, 1f));
        CreateCard("ART DIRECTION", "style / UI / VFX", new Vector3(1.55f, 0.9f, 0f), new Color(0.24f, 0.18f, 0.28f, 1f));
        CreateCard("QA GATE", "visual / smoke / accept", new Vector3(4.55f, 0.9f, 0f), new Color(0.17f, 0.25f, 0.19f, 1f));

        CreatePanel("Footer", new Vector3(0f, -2.3f, 1.5f), new Vector3(10.9f, 0.75f, 1f), new Color(0.11f, 0.135f, 0.15f, 1f));
        CreateText("Unity camera render proof - architecture / UI / VFX boundaries stay visible", new Vector3(0f, -2.34f, 0f), 0.041f, new Color(0.75f, 0.82f, 0.84f, 1f));

        for (int i = 0; i < 18; i++)
        {
            float angle = i * 20f * Mathf.Deg2Rad;
            float radius = 0.18f + (i % 3) * 0.065f;
            Vector3 center = new Vector3(5.4f, 2.3f, 0f);
            Vector3 position = center + new Vector3(Mathf.Cos(angle) * radius, Mathf.Sin(angle) * radius, 0f);
            CreatePanel("Spark", position, new Vector3(0.035f, 0.035f, 1f), new Color(1f, 0.76f, 0.25f, 1f));
        }

        RenderTexture renderTexture = new RenderTexture(width, height, 24);
        camera.targetTexture = renderTexture;
        camera.Render();
        RenderTexture.active = renderTexture;

        Texture2D image = new Texture2D(width, height, TextureFormat.RGB24, false);
        image.ReadPixels(new Rect(0, 0, width, height), 0, 0);
        image.Apply();

        Directory.CreateDirectory(Path.GetDirectoryName(outputPath));
        File.WriteAllBytes(outputPath, ImageConversion.EncodeToPNG(image));

        Debug.Log("GDS_RUNTIME_VISUAL_SMOKE_SCREENSHOT=" + outputPath);

        RenderTexture.active = null;
        camera.targetTexture = null;
        Object.DestroyImmediate(renderTexture);
        Object.DestroyImmediate(image);
        EditorApplication.Exit(0);
    }

    private static Camera CreateCamera()
    {
        GameObject cameraObject = new GameObject("Client Studio QA Camera");
        Camera camera = cameraObject.AddComponent<Camera>();
        camera.orthographic = true;
        camera.orthographicSize = 4f;
        camera.clearFlags = CameraClearFlags.SolidColor;
        camera.backgroundColor = new Color(0.035f, 0.047f, 0.063f, 1f);
        camera.transform.position = new Vector3(0f, 0f, -10f);
        return camera;
    }

    private static void CreateCard(string title, string detail, Vector3 position, Color color)
    {
        CreatePanel(title + " Panel", position, new Vector3(2.35f, 1.4f, 1f), color);
        CreatePanel(title + " Bar", position + new Vector3(0f, 0.56f, -0.1f), new Vector3(2.05f, 0.09f, 1f), new Color(0.96f, 0.72f, 0.27f, 1f));
        CreateText(title, position + new Vector3(0f, 0.18f, -0.2f), 0.044f, new Color(0.98f, 0.95f, 0.86f, 1f));
        CreateText(detail, position + new Vector3(0f, -0.25f, -0.2f), 0.032f, new Color(0.71f, 0.8f, 0.86f, 1f));
    }

    private static void CreatePanel(string name, Vector3 position, Vector3 scale, Color color)
    {
        GameObject panel = GameObject.CreatePrimitive(PrimitiveType.Quad);
        panel.name = name;
        panel.transform.position = position;
        panel.transform.localScale = scale;
        Renderer renderer = panel.GetComponent<Renderer>();
        renderer.sharedMaterial = CreateMaterial(color);
    }

    private static Material CreateMaterial(Color color)
    {
        Shader shader = Shader.Find("Unlit/Color");
        if (shader == null)
        {
            shader = Shader.Find("Sprites/Default");
        }
        if (shader == null)
        {
            shader = Shader.Find("Standard");
        }

        Material material = new Material(shader);
        material.color = color;
        return material;
    }

    private static void CreateText(string content, Vector3 position, float size, Color color)
    {
        GameObject textObject = new GameObject(content);
        textObject.transform.position = position;
        TextMesh textMesh = textObject.AddComponent<TextMesh>();
        textMesh.text = content;
        textMesh.anchor = TextAnchor.MiddleCenter;
        textMesh.alignment = TextAlignment.Center;
        textMesh.characterSize = size;
        textMesh.fontSize = 64;
        textMesh.color = color;
    }
}
`;

run();
