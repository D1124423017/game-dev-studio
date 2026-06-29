# Web First-Playable Slice Visual QA Report

- Status: `Blocked`
- Screenshot: `Not captured`
- Browser: `C:\Program Files\Google\Chrome\Application\chrome.exe, C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`

## Checks

- Local browser screenshot fallback did not produce a usable screenshot.

## Notes

- Browser attempt error: C:\Program Files\Google\Chrome\Application\chrome.exe --headless=new --disable-gpu --disable-gpu-compositing --disable-software-rasterizer: Command failed: C:\Program Files\Google\Chrome\Application\chrome.exe --headless=new --disable-gpu --disable-gpu-compositing --disable-software-rasterizer --no-first-run --no-default-browser-check --disable-background-networking --disable-dev-shm-usage --disable-extensions --disable-sync --disable-features=UseSkiaRende
- Browser attempt error: C:\Program Files\Google\Chrome\Application\chrome.exe --headless=old --disable-gpu: Command failed: C:\Program Files\Google\Chrome\Application\chrome.exe --headless=old --disable-gpu --no-first-run --no-default-browser-check --disable-background-networking --disable-dev-shm-usage --disable-extensions --disable-sync --disable-features=UseSkiaRenderer,Vulkan,CalculateNativeWinOcclusion --allow-file-acce
- Browser attempt error: C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe --headless=new --disable-gpu --disable-gpu-compositing --disable-software-rasterizer: screenshot was missing or too small
- Browser attempt error: C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe --headless=old --disable-gpu: screenshot was missing or too small
- Playwright load error: C:\Users\lenny\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules: Cannot find module 'playwright-core' Require stack:
