# 工作流程參考

先選模式，不要每次都執行完整流程。

- Quick Check：小問題、快速建議、單一點檢查。
- Focused Review：單一領域深度檢查，例如 UI、VFX、架構、QA。
- Full Studio Audit：新遊戲方向、MVP、重大里程碑或完整專案審查。
- Roadmap Strategy Audit：成熟度、下一階段、版本路線圖、繼續擴充或進入穩定期的決策。

詳細模式規則見 `references/modes.md`。

## 路線圖與版本決策

Roadmap Strategy Audit 不等於完整團隊審查，也不應自動載入全部 references。

1. 先定義專案或 Skill 的最終目標
2. 檢查目前程式、文件、案例、測試、使用者回饋與 release 證據
3. 分開標示已驗證事實、推論與未知項目
4. 判斷應繼續擴充、穩定、重構、驗證或發布
5. 以風險降低和使用者價值排序版本內容
6. 明確列出現在不該做的方向
7. 將近期行動限制在五到七項

詳細規則見 `references/roadmap-strategy-audit.md`。

## 新遊戲啟動

新遊戲啟動通常使用 Full Studio Audit，但仍然只讀必要 reference。

1. 接收使用者想法
2. 切換製作人角度：釐清範圍、用途、時間、MVP
3. 切換企劃角度：玩法、核心循環、爽點
4. 切換技術角度：引擎、平台、架構
5. 切換美術角度：風格、資產需求
6. 切換 UI/UX 角度：必要畫面、操作流程
7. 切換 UI Visual 角度：介面是否像正式遊戲，而不是 canvas placeholder 或 debug UI
8. 切換 UI Motion 角度：HUD、選單、卡牌、獎勵、Combo、結果畫面的動態回饋
9. 切換 Gameplay VFX 角度：打擊、技能、粒子、shader、screen shake 與特效效能
10. 整合產出：方向提案 + 推薦方向 + 風險 + 下一步

## 開發階段

開發階段通常使用 Quick Check 或 Focused Review。

1. 先確認影響範圍
2. 先讀現有程式碼再改
3. 如果涉及 UI / HUD / 玩家回饋，先確認 UI 視覺設計、動效方案與工具選型
4. 如果涉及 hit effect、技能、爆炸、粒子、shader、screen shake 或後製，先確認 Gameplay VFX 路由與架構邊界
5. 實作後驗證
6. 回報變更與風險

## 完成階段

完成階段預設使用短版回報。只有公開 release、重大里程碑或使用者要求時才完整展開。

1. 犀利測試玩家發表意見
2. 檢查視覺、UI visual design、UI motion、Gameplay VFX 與音效完整性
3. 檢查 reduced motion、reduced shake、效能、可讀性、overdraw 與輸入延遲
4. 檢查文件與驗收標準
5. 回報最終產出

## UI Motion / Game Feel Review

- Motion should be reviewed after static UI/UX and before final polish.
- 視覺相關任務除了圖片資產，也要檢查互動動效。
- UI motion should improve clarity, feedback, rhythm, and game feel, not add decorative noise.

## Game UI Visual Design Review

- UI visual design should be reviewed after information architecture and before implementation details.
- Web Game 的正式 UI 通常不應只用 Canvas 畫矩形和預設文字完成。
- 複雜 UI 應評估 DOM / React overlay、engine-native UI、字體、面板、圖示、元件狀態、排版與動效。

## Gameplay VFX / Technical VFX Review

- Gameplay VFX should be reviewed after core gameplay events are understood and before final visual polish.
- 視覺相關任務除了圖片、UI 與動效，也要檢查 gameplay-space 特效是否清楚傳達打擊、危險、獎勵、技能與狀態變化。
- VFX should be routed by runtime job: sprite / flipbook, particle system, shader / material, post-processing, camera impulse, or UI FX.
- VFX logic should live in presentation, render, particles, shaders, or effect modules. It should not own damage, score, progression, or win/loss rules.
- Check shape, timing, color, readability, overdraw, pooling, worst-case spawn count, reduced motion, and reduced shake.
