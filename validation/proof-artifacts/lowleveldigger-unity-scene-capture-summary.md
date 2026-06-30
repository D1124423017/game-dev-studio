# LowLevelDigger Unity Scene Capture Attempt Summary

- Date: 2026-06-30
- Purpose: attempt external non-Web Unity project-specific runtime visual QA.
- Repository: `https://github.com/keijiro/LowLevelDigger`
- Commit tested: `a56d4ec2827998ae6417d51f0d01cc7715e866a3`
- License: Unlicense
- Project version: Unity `6000.3.5f1`
- Installed editor used: `C:\Program Files\Unity\Hub\Editor\6000.2.9f1\Editor\Unity.exe`
- Scene target: `Assets/Main.unity`
- Temporary clone: `%TEMP%\gds-proof-lowleveldigger-*`
- Raw editor log: intentionally not committed
- Visual QA: `Blocked`

## Attempt

A temporary `GameDevStudioSceneCapture.Capture` Unity Editor script was injected into the temp clone. The command opened the external project in batchmode, targeted `Assets/Main.unity`, and attempted to render the active scene camera to:

`validation/proof-artifacts/lowleveldigger-unity-scene-capture.png`

Sanitized command shape:

```txt
Unity.exe -batchmode -quit -projectPath %TEMP%\gds-proof-lowleveldigger-* -executeMethod GameDevStudioSceneCapture.Capture -logFile %TEMP%\gds-proof-lowleveldigger-*\gds-unity-scene-capture-rerun.log
```

## Result

| Check | Result | Evidence |
|---|---|---|
| Candidate repository exists | `Passed` | `git ls-remote` returned `a56d4ec2827998ae6417d51f0d01cc7715e866a3` |
| License check | `Passed` | repository license is Unlicense |
| Scene target exists | `Passed` | `Assets/Main.unity` exists in the temp clone |
| Unity editor launch | `Passed` | Unity `6000.2.9f1` launched the project in batchmode |
| Script compilation | `Failed` | package compile errors occurred before the capture method could run |
| Scene screenshot | `Blocked` | no `lowleveldigger-unity-scene-capture.png` was produced |

## Blocking Error Summary

The candidate project targets Unity `6000.3.5f1`, while the installed editor is Unity `6000.2.9f1`. The installed editor began importing the project but failed during script compilation inside the 2D package cache.

Representative sanitized errors:

```txt
Library\PackageCache\com.unity.2d.common@51e9484895c4\Editor\InternalBridge\SpriteAtlasBridge.cs(35,111): error CS0234: The type or namespace name 'SpriteFitInfo' does not exist in the namespace 'UnityEditor.U2D.SpritePacking'
Library\PackageCache\com.unity.2d.common@51e9484895c4\Editor\InternalBridge\SpriteAtlasBridge.cs(48,21): error CS0246: The type or namespace name 'SpriteFitInfo' could not be found
Library\PackageCache\com.unity.2d.common@51e9484895c4\Editor\ScriptablePacker\SpriteAtlasScriptablePacker.cs(565,33): error CS0115: no suitable method found to override
Library\PackageCache\com.unity.2d.common@51e9484895c4\Editor\ScriptablePacker\SpriteAtlasGeometryPacker.cs(876,33): error CS0115: no suitable method found to override
Scripts have compiler errors.
```

## Interpretation

This is a useful external Unity proof-candidate attempt, but it is not a passed runtime visual QA artifact.

The blocker is not that Game Dev Studio lacks a Unity capture route. The local Unity runtime visual smoke already proves a Unity camera render path. The blocker is project-specific compatibility: this external candidate expects a newer Unity editor and package API than the installed editor provides.

## Next Action

Use one of these routes for the next external Unity proof:

- Install or select Unity `6000.3.5f1` and rerun the same scene capture attempt.
- Select a public Unity project whose `ProjectSettings/ProjectVersion.txt` matches Unity `6000.2.x`.
- Use a user-owned Unity prototype that can open cleanly in the installed Unity editor.
