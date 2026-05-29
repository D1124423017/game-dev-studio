![Game Dev Studio Banner](assets/game-dev-studio-banner.png)

繁體中文 | [English](README.md)

# Game Dev Studio Skill

一個讓 Codex / AI Agent 以「完整遊戲開發團隊」方式協助遊戲製作的通用 Skill。

## 特色

- 多角色協作：製作人、企劃、程式、UI/UX、美術、音效、QA、犀利測試玩家
- 適用 Unity、Unreal、Godot、HTML Canvas、Web Game、2D、3D 與遊戲原型
- 可從模糊想法整理出可執行的遊戲企劃
- 強調程式架構，避免所有邏輯塞進單一檔案
- 只要涉及畫面呈現，就優先使用圖片生成模型或提供完整生圖方案
- 內建犀利測試玩家，主動指出不好玩、不清楚、可改善的地方

## 適合誰使用

- 想做遊戲但還不知道怎麼開始的人
- 遊戲企劃學生
- 個人開發者
- 小型遊戲團隊
- 用 Codex / AI 輔助開發遊戲的人

## 安裝方式

將這個 repository clone 或下載到 Codex skills 目錄。

```bash
git clone https://github.com/D1124423017/game-dev-studio.git ~/.codex/skills/game-dev-studio
```

Windows 可以使用類似路徑：

```powershell
git clone https://github.com/D1124423017/game-dev-studio.git "$env:USERPROFILE\.codex\skills\game-dev-studio"
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

```txt
$game-dev-studio
我想做一款 2D 動作 Roguelite，請提供最容易完成版、最有特色版、最有商業潛力版、最實驗創新版四種方向。
```

```txt
$game-dev-studio
請用製作人、企劃、程式、UI/UX、美術、音效、QA、犀利測試玩家的角度審查我的 Godot 原型。
```

```txt
$game-dev-studio
請為主角、敵人、HUD、技能圖示、命中特效與宣傳圖建立美術資產需求，並附上生圖提示詞。
```

```txt
$game-dev-studio
請把這個功能想法整理成 Codex 開發任務，包含架構要求、測試要求與驗收標準。
```

## 核心理念

這不是單純的程式助手。

它是一個遊戲開發團隊型 Skill，目標是讓 AI 不只寫程式，而是協助做出更完整、更可玩、更有品質的遊戲。

## 專案結構

```
game-dev-studio/
├── SKILL.md              # 核心技能定義
├── README.md             # 英文版說明
├── README.zh-TW.md       # 繁體中文版說明
├── LICENSE               # MIT 授權
├── references/           # 參考文件
│   ├── workflow.md
│   ├── architecture-guide.md
│   ├── visual-asset-policy.md
│   ├── ruthless-playtester.md
│   └── output-templates.md
└── assets/              # 圖片資源
    └── game-dev-studio-banner.png
```

## Release 建議

公開發布時建議：

- 第一個穩定公開版標記為 `v0.1.0`。
- Release note 說明 Skill 目的、安裝路徑與支援工作流程。
- 如果 reference 模板或呼叫行為有破壞性變更，應在 release 中標明。
- README 範例應和最新 `SKILL.md` 保持一致。

## 授權

本專案採用 MIT 授權。詳見 [LICENSE](LICENSE) 檔案。
