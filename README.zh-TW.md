![Game Dev Studio Banner](assets/game-dev-studio-banner.png)

繁體中文 | [English](README.md)

# Game Dev Studio Skill

一個讓 Codex / AI Agent 以「完整遊戲開發團隊」方式協助遊戲製作的通用 Skill。

**目前版本：** `v0.9.0`

## 快速開始

日常任務建議先用輕量檢查：

```txt
$game-dev-studio
Quick Check: 請檢查這個升級畫面，告訴我前三個 UI 或遊戲爽感問題。請保持簡短。
```

大型規劃再使用完整審查：

```txt
$game-dev-studio
Full Studio Audit: 我想做一款遊戲。請先從製作人、企劃、程式、UI/UX、美術、音效、QA、測試玩家的角度幫我釐清方向，不要直接寫程式。
```

需要判斷成熟度與下一版本時，使用路線圖策略審查：

```txt
$game-dev-studio
Roadmap Strategy Audit: 請評估這個專案的成熟度，判斷應繼續擴充或進入穩定期，並規劃後續版本與 30 天優先事項。不要修改檔案。
```

甲方委託製作時，先要求工作室做 brief 與提案：

```txt
$game-dev-studio
我是一個甲方，想委託你這間遊戲工作室做一款 2D 動作遊戲。請先做需求訪談、方向提案、正式美術方向、技術架構與 MVP 範圍，不要直接寫程式。
```

## 特色

- 多角色協作：製作人、企劃、程式、UI/UX、UI 動效設計師 / 遊戲爽感動效顧問、Gameplay VFX / Technical VFX 設計師、美術、音效、QA、犀利測試玩家
- 適用 Unity、Unreal、Godot、HTML Canvas、Web Game、2D、3D 與遊戲原型
- 可從模糊想法整理出可執行的遊戲企劃
- 可把使用者視為甲方 / product owner，走委託製作流程
- 提供 client brief、studio proposal、scope lock、正式美術方向、production architecture、任務拆解、QA 與驗收回報
- 甲方正式 UI / 美術製作前，要求 selected visual target、style bible 或 approved reference
- 在可用時可銜接 Product Design plugin，進行視覺提案、image-to-code handoff 與 design QA
- 補 Prototype、Vertical Slice、Alpha、Beta、Release Candidate 與 Client Acceptance 里程碑 gate
- 實作交付時保留 scope、architecture、visual target、QA 證據、playtest notes 與 client decisions
- 強調程式架構，避免所有邏輯塞進單一檔案
- 只要涉及畫面呈現，就優先使用圖片生成模型或提供完整生圖方案
- 美觀的遊戲 UI 指引，明確把 canvas 畫出的矩形和預設文字視為 placeholder，而不是完成品 UI
- UI 動效與遊戲爽感檢查，包含 HUD 回饋、選單轉場、GSAP、React Bits 風格動效、引擎原生 UI 動畫與回饋節奏
- Gameplay VFX 與技術特效指引，包含打擊火花、粒子、sprite flipbook、shader、post-processing、screen shake、Unity VFX Graph、Unreal Niagara 與 Godot particles
- 會依照 runtime job 判斷特效該用 sprite、particle、shader、後製、camera impulse 或 UI FX，而不是全部硬塞進 canvas 繪製
- 省 token 模式：Quick Check、Focused Review、Full Studio Audit、Client Studio Production Workflow、Roadmap Strategy Audit，讓日常任務保持輕量
- 包含 Phaser、Godot、Unity 三種技術棧的公開專案實證案例
- 提供零相依驗證工具與 GitHub Actions，檢查 Skill 結構、references、版本與公開文件
- 內建犀利測試玩家，主動指出不好玩、不清楚、可改善的地方

## 審查模式

- **Quick Check**：日常問題的預設模式。輸出簡短，避免載入大型 references。
- **Focused Review**：用於單一領域，例如架構、UI、視覺資產、UI 動效、Gameplay VFX、QA 或測試玩家檢查。
- **Full Studio Audit**：用於新遊戲方向、MVP 規劃、里程碑審查、公開發布準備或完整專案審查。
- **Client Studio Production Workflow**：用於甲方 brief、客戶需求、委託製作，或從概念到實作與驗收的完整流程。
- **Roadmap Strategy Audit**：用於成熟度、下一階段、版本規劃，以及判斷應擴充、穩定、重構、驗證或發布。

這個 Skill 採用 lazy-load references 設計，不應為小任務讀取所有 references 或輸出完整團隊報告。

## 適合誰使用

- 想做遊戲但還不知道怎麼開始的人
- 遊戲企劃學生
- 個人開發者
- 小型遊戲團隊
- 用 Codex / AI 輔助開發遊戲的人

## 何時使用 / 何時不要使用

適合用於遊戲規劃、架構審查、UI/UX、美術資產、QA、測試玩家檢查、功能拆任務、MVP 規劃，以及任何影響玩家體驗的遊戲工作。

也適合用於甲方或 product owner 委託製作：先整理需求、提出方向、鎖定 MVP、定義正式遊戲美術方向、定義 production architecture、拆成任務，等範圍清楚後再實作並回報驗收狀態。

也適合正式 UI / 美術製作：先定義 selected visual target、style bible、Product Design plugin 視覺提案或 design QA 路線，再進入實作。

也適合甲方已確認 scope、visual target 與 architecture 後進入實作：先讀 repo、維持架構邊界、做 bounded slice、執行檢查、記錄 QA / playtest 證據，最後交付 client-facing report。

也適合用於 UI 太靜態、需要按鈕回饋、HUD 數值動效、選單轉場、Combo feedback、獎勵動畫或引擎原生 UI 動畫規劃的情境。

也適合用於 gameplay 回饋太弱、需要打擊特效、slash trail、粒子、shader effect、screen shake、projectile impact、爆炸、獎勵 burst 或引擎原生 VFX 規劃的情境。

不適合用於小修字、簡單 Git 指令、README 一行修改、一般知識問答，或非遊戲雜務。

## 安裝方式

將這個 repository clone 或下載到 Codex skills 目錄。

```bash
git clone https://github.com/D1124423017/game-dev-studio.git ~/.codex/skills/game-dev-studio
```

某些 Codex / Agent 環境會使用 `.agents/skills`：

```bash
git clone https://github.com/D1124423017/game-dev-studio.git ~/.agents/skills/game-dev-studio
```

Windows 請依你的環境使用對應 skills 目錄，例如：

```powershell
git clone https://github.com/D1124423017/game-dev-studio.git "$env:USERPROFILE\.codex\skills\game-dev-studio"
```

或：

```powershell
git clone https://github.com/D1124423017/game-dev-studio.git "$env:USERPROFILE\.agents\skills\game-dev-studio"
```

安裝後重新啟動 Codex 或重新載入 skills，然後使用：

```txt
$game-dev-studio
```

## 使用方式

在 Codex 中輸入：

```txt
$game-dev-studio
我想做一款遊戲，請先從製作人、企劃、程式、UI/UX、美術、音效、QA 的角度幫我釐清方向。
```

或：

```txt
$game-dev-studio
請幫我把這個遊戲想法拆成 MVP、核心系統、技術架構、美術方向與第一階段開發任務。
```

## 使用範例

### 快速檢查

```txt
$game-dev-studio
Quick Check: 請檢查這個升級畫面，告訴我前三個 UI 或遊戲爽感問題。請保持簡短。
```

### 聚焦審查

```txt
$game-dev-studio
Focused Review: 請檢查這個遊戲的戰鬥 VFX，提出必備特效、效能風險與 reduced-shake 注意事項。先不要修改檔案。
```

### 完整工作室審查

```txt
$game-dev-studio
Full Studio Audit: 請用完整遊戲開發團隊角度審查這個原型，給我讓它達到 demo-ready 的最高優先事項。
```

### 甲方委託製作

```txt
$game-dev-studio
我是一個甲方，想委託你這間遊戲工作室做一款 2D 動作遊戲。請先做需求訪談、方向提案、正式美術方向、技術架構與 MVP 範圍，不要直接寫程式。
```

### 工作室美術方向與 visual target

```txt
$game-dev-studio
我是甲方。在製作主選單與升級畫面前，請先產出工作室美術方向包，包含 selected visual target 路線、style bible、UI design system、可用時的 Product Design plugin handoff，以及 design QA 驗收標準。先不要實作。
```

### 製作里程碑 gate

```txt
$game-dev-studio
請把這個專案規劃成 Prototype、Vertical Slice、Alpha、Beta、Release Candidate 與 Client Acceptance。每個 gate 都要定義範圍、驗收證據、測試、風險與甲方需要決定的事項。
```

### 實作交付

```txt
$game-dev-studio
甲方已確認 MVP 範圍、visual target 與 architecture。請實作第一個 playable slice。改檔前先讀 repo 並提供 bounded implementation delivery plan，包含測試、風險與驗收標準。改完後回報 QA 證據與仍需甲方決定的事項。
```

### 路線圖策略審查

```txt
$game-dev-studio
Roadmap Strategy Audit: 請定義這個專案的最終目標，依 repository 證據評估成熟度，判斷應擴充或穩定，並規劃後續三個版本成果。不要修改檔案。
```

### 從零開始做遊戲

```txt
$game-dev-studio
我想做一款 2D 動作 Roguelite，請提供最容易完成版、最有特色版、最有商業潛力版、最實驗創新版四種方向。
```

### 分析現有遊戲

```txt
$game-dev-studio
請用製作人、企劃、程式、UI/UX、美術、音效、QA、犀利測試玩家的角度審查我的 Godot 原型。
```

### 規劃視覺資產

```txt
$game-dev-studio
請為主角、敵人、HUD、技能圖示、命中特效與宣傳圖建立美術資產需求，並附上生圖提示詞。
```

### 檢查 UI 動效與遊戲爽感

```txt
$game-dev-studio
請檢查我的 Web Game HUD、按鈕、獎勵 toast、Combo 計數與結果畫面，建議 CSS、GSAP、React Bits 風格或引擎原生動效方案。
```

```txt
$game-dev-studio
請檢查這個遊戲的 UI 哪些地方可以用動效提升遊戲爽感，例如 GSAP、React Bits 風格或引擎原生動畫。先不要修改檔案。
```

### 提升遊戲 UI 視覺設計

```txt
$game-dev-studio
請檢查這個 Web Game 的 UI，告訴我如何讓它像正式遊戲介面，而不是 canvas 畫出來的 placeholder 方塊。請考慮 DOM / React overlay、字體、面板、圖示、元件狀態、排版與動效。先不要修改檔案。
```

### 檢查 gameplay VFX 與技術特效

```txt
$game-dev-studio
請檢查這個遊戲的戰鬥回饋，建議 gameplay VFX 改進方向。請依照引擎或技術棧考慮 hit sparks、slash trails、projectile impacts、particles、sprite flipbooks、shader effects、post-processing、screen shake、Unity VFX Graph、Unreal Niagara 或 Godot particles。先不要修改檔案。
```

### 建立安全重構計畫

```txt
$game-dev-studio
我的 HTML Canvas 遊戲所有邏輯都在 main.js，請先做架構審查並建立安全拆分計畫，不要直接大改。
```

### 拆 Codex 開發任務

```txt
$game-dev-studio
請把這個功能想法整理成 Codex 開發任務，包含架構要求、測試要求與驗收標準。
```

### 犀利測試玩家檢查

```txt
$game-dev-studio
請當犀利測試玩家審查這個原型，直接指出哪裡無聊、看不懂、節奏拖、回饋弱或沒有記憶點，並列出必修改善。
```

## 核心理念

這不是單純的程式助手。

它是一個遊戲開發團隊型 Skill，目標是讓 AI 不只寫程式，而是協助做出更完整、更可玩、更有品質的遊戲。

## 專案結構

```
game-dev-studio/
├── .github/              # 模板與驗證 workflow
├── SKILL.md              # 核心技能定義
├── README.md             # 英文版說明
├── README.zh-TW.md       # 繁體中文版說明
├── CHANGELOG.md          # 版本紀錄
├── CONTRIBUTING.md       # 貢獻指南
├── LICENSE               # MIT 授權
├── agents/               # Skill metadata
│   └── openai.yaml
├── examples/             # 公開專案實證案例
│   ├── README.md
│   ├── phaser-vite-focused-review.md
│   ├── godot-dodge-the-creeps-audit.md
│   └── unity-open-project-roadmap.md
├── prompts/              # Skill 測試 prompt
│   └── test-prompts.md
├── references/           # 參考文件
│   ├── workflow.md
│   ├── modes.md
│   ├── client-studio-production-workflow.md
│   ├── studio-art-direction-pipeline.md
│   ├── production-milestone-gates.md
│   ├── studio-implementation-delivery-workflow.md
│   ├── roadmap-strategy-audit.md
│   ├── template-index.md
│   ├── architecture-guide.md
│   ├── visual-asset-policy.md
│   ├── ui-visual-design-guide.md
│   ├── ui-motion-guide.md
│   ├── game-vfx-guide.md
│   ├── ruthless-playtester.md
│   └── output-templates.md
├── scripts/
│   └── validate-skill.mjs
├── validation/
│   ├── test-results-v0.5.0.md
│   ├── test-results-v0.6.0.md
│   ├── test-results-v0.7.0.md
│   └── test-results-v0.8.0.md
└── assets/
    └── game-dev-studio-banner.png
```

## 驗證

使用 Node.js 執行零相依驗證工具：

```bash
node scripts/validate-skill.mjs
```

它會檢查 Skill frontmatter、lazy reference 路由、公開版本一致性、中英文 README 連結、測試與案例覆蓋、舊名稱、多行 Markdown/YAML，以及是否誤提交 `.skill`。GitHub Actions 會在 push 與 pull request 執行相同檢查。

三個公開專案案例與 client-studio workflow trace 請看 [examples/](examples/)，測試紀錄、final-goal coverage notes、v0.9 external proof report、v1.0 acceptance proof protocol，以及含 smoke / visual QA 檢查的本地 web first-playable runtime fixture 請看 [validation/](validation/)。

在至少一個獨立遊戲專案完成 proof protocol 前，不應把這個 repo 視為 `v1.0.0` ready。該證據需要包含甲方 brief、方向提案、scope lock、正式美術方向、architecture gate、implementation delivery、QA 證據、必要時的 visual evidence、犀利測試玩家回饋與 client acceptance report。

未來產生 proof report 後，可用以下指令檢查結構：

```bash
node scripts/validate-proof-package.mjs validation/proof-example-v1.0.0.md
```

建議 `v1.0.0` 前，必須要求至少一份 proof report：

```bash
node scripts/validate-proof-package.mjs --require validation/proof-example-v1.0.0.md
```

## 打包成 .skill 檔案

這個 repo 可作為 Codex Skill 的來源資料夾。
如果你的 Codex 環境支援 `.skill` 打包，請依照你的 Codex Skill 工具，將 `game-dev-studio/` 資料夾打包。

`.skill` 檔案屬於產出物，不建議提交到原始碼倉庫，因此已被 Git 忽略。

## Release 建議

目前建議公開發布版本：`v0.9.0`。

建議 release 標題：
`v0.9.0 - Real project proof gate`

建議 release notes：

- 新增 Client Studio Production Workflow，用於甲方 brief 與委託製作
- 新增 scope lock、正式美術方向、production architecture、任務拆解與驗收指引
- 新增 Studio Art Direction Pipeline，用於 visual target、style bible、Product Design plugin 銜接與 design QA
- 新增 Production Milestone Gates，用於 Prototype、Vertical Slice、Alpha、Beta、Release Candidate 與 Client Acceptance
- 新增 Studio Implementation Delivery Workflow，用於 scoped implementation、repo intake、QA 證據、playtest notes 與 client-facing delivery report
- 新增外部 HTML5 Canvas Breakout 專案的 real-project proof report
- 新增 proof package validation 與 v1.0 acceptance proof gate
- 補強正式遊戲美術、UI、VFX、production architecture、implementation 與交付證據品質 gate

完整版本紀錄請看 [CHANGELOG.md](CHANGELOG.md)。

未來發布版本時，如果 reference 模板或呼叫行為有破壞性變更，應在 release 中標明，並保持 README 範例和最新 `SKILL.md` 一致。

## 授權

本專案採用 MIT 授權。詳見 [LICENSE](LICENSE) 檔案。
