# Unity Runtime Visual Smoke Report

- Date: 2026-06-30
- Status: `Passed`
- Scope: local Unity runtime visual smoke fixture created in a temporary directory.
- Release interpretation: useful non-Web engine runtime evidence, but not a replacement for external Unity project proof.
- Unity editor: C:\Program Files\Unity\Hub\Editor\6000.2.9f1\Editor\Unity.exe
- Project path: %TEMP%/game-dev-studio-unity-runtime-visual-smoke\UnityRuntimeVisualSmoke
- Command: "C:\Program Files\Unity\Hub\Editor\6000.2.9f1\Editor\Unity.exe" -batchmode -quit -projectPath %TEMP%/game-dev-studio-unity-runtime-visual-smoke\UnityRuntimeVisualSmoke -executeMethod GameDevStudioRuntimeVisualSmoke.Capture -logFile %TEMP%/game-dev-studio-unity-runtime-visual-smoke\unity-editor.log
- Exit status: 0
- Viewport: 1280x720
- Screenshot: validation/proof-artifacts/unity-runtime-visual-smoke.png
- Screenshot size: 84551 bytes
- Runtime marker found: `yes`

## Visual Target

- Formal client-studio dashboard scene rendered through Unity camera.
- Includes title typography, layered panels, scope / art / architecture / QA cards, accent bars, and small VFX spark markers.
- This intentionally avoids browser DOM, canvas debug rectangles, and default web UI.

## Acceptance Decision

- `Passed`: Unity opened the temporary project, rendered the client-studio visual smoke scene through a Unity camera, and wrote a non-empty PNG artifact.

## Sanitized Log Excerpt

```txt
[Licensing::Module] Error: 'com.unity.editor.headless' was not found.
[Licensing::Client] Error: Code 404 while processing request (status: Found 0 entitlement groups and 0 free entitlements matching requested entitlement ids)
[Licensing::Module] Error: 'com.unity.editor.headless' was not found.
[Licensing::Client] Error: Code 404 while processing request (status: Found 0 entitlement groups and 0 free entitlements matching requested entitlement ids)
[Licensing::Module] Error: 'com.unity.editor.headless' was not found.
[Licensing::Client] Error: Code 404 while processing request (status: Found 0 entitlement groups and 0 free entitlements matching requested entitlement ids)
[Licensing::Module] Error: 'com.unity.editor.headless' was not found.
			LogAssemblyErrors (0ms)
[Licensing::Client] Error: Code 404 while processing request (status: Found 0 entitlement groups and 0 free entitlements matching requested entitlement ids)
[Licensing::Module] Error: 'com.unity.editor.headless' was not found.
[Licensing::Client] Error: Code 404 while processing request (status: Found 0 entitlement groups and 0 free entitlements matching requested entitlement ids)
[Licensing::Module] Error: 'com.unity.editor.headless' was not found.
[Licensing::Client] Error: Code 404 while processing request (status: Found 0 entitlement groups and 0 free entitlements matching requested entitlement ids)
[Licensing::Module] Error: 'com.unity.editor.headless' was not found.
[Licensing::Client] Error: Code 404 while processing request (status: Found 0 entitlement groups and 0 free entitlements matching requested entitlement ids)
[Licensing::Module] Error: 'com.unity.editor.headless' was not found.
GDS_RUNTIME_VISUAL_SMOKE_SCREENSHOT=%REPO%\validation\proof-artifacts\unity-runtime-visual-smoke.png
Curl error 42: Callback aborted
[Licensing::IpcConnector] LicenseClient-%USERNAME%-notifications channel disconnected successfully.
[Licensing::IpcConnector] LicenseClient-%USERNAME% channel disconnected successfully.
```
