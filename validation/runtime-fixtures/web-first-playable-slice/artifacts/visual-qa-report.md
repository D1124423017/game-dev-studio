# Web First-Playable Slice Visual QA Report

- Status: `Passed`
- Screenshot: `artifacts/visual-qa-main-menu.png`
- Browser: `C:\Program Files\Google\Chrome\Application\chrome.exe`

## Checks

- Local browser executable found: `Passed`
- Screenshot captured: `Passed`
- Screenshot has non-trivial size: `Passed`

## Notes

- Used local headless browser screenshot fallback because Playwright was unavailable.
- This proves a renderable visual artifact exists, but it does not replace Playwright DOM and console assertions.
- Headless flags: --headless=new --disable-gpu --disable-gpu-compositing --disable-software-rasterizer
- Screenshot bytes: 137680
- Playwright load error: C:\Users\lenny\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules: Cannot find module 'playwright-core' Require stack:
