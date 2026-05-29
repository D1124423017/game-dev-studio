# 程式架構指南

## 目錄結構建議

```
project/
  Assets/
  Scenes/
  Scripts/
    Core/
    Gameplay/
    UI/
    Data/
    Audio/
    Utils/
  Prefabs/
  Resources/
  Settings/
```

## 模組拆分原則

- Core：場景管理、遊戲狀態機、事件系統、音效管理
- Gameplay：角色、敵人、技能、關卡邏輯
- UI：選單、HUD、結果畫面
- Data：數值表、存檔、設定、資源對應
- Utils：通用工具

## 禁止事項

- 所有邏輯塞在單一 MonoBehaviour
- UI、輸入、資料、邏輯、存檔全部混在一起
- 硬編碼數值散布在程式碼各處
- 沒有事件系統、用 FindObjectOfType 到處拉參考
