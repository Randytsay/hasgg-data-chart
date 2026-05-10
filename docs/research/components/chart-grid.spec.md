# ChartGrid Specification

## Overview
- **Target file:** `src/components/ChartGrid.tsx`
- **Interaction model:** static
- **Total items:** 84 chart category cards

## DOM Structure
```
<div class="box" style="display:flex; padding:20px; ...">
  <h3><a href="/line-chart-creation">折線圖</a></h3>
</div>
<div class="box" style="display:flex; padding:20px; ...">
  <h3><a href="/vertical-bar-chart-creation">縱向 柱狀圖</a></h3>
</div>
<!-- ... 84 total cards in 3-column grid -->
```

## Computed Styles (exact values)

### Container Grid
- display: grid
- gridTemplateColumns: 420px 420px 420px (3 columns)
- gap: 10px
- padding: 0px

### Card (`.box`)
- display: flex
- padding: 20px
- margin: 0px 0px 24px
- backgroundColor: rgb(255, 255, 255)
- borderRadius: 6px
- boxShadow: rgba(10, 10, 10, 0.1) 0px 7.5px 15px -1.875px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px

### H3 Link
- fontSize: 20px
- fontWeight: 500
- fontFamily: "Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif
- color: rgb(0, 0, 0)
- margin: 0px
- textDecoration: none

### Hover States
- Card hover: opacity may change slightly (not confirmed - needs live test)
- H3 link hover: standard link behavior

## Responsive Behavior
- Desktop (1440px): 3 columns
- Tablet (768px): 2 columns (breakpoint ~1024px)
- Mobile (390px): 1 column

## Text Content (all 84 items)
折線圖, 縱向 柱狀圖, 基礎 餅圖, 散點圖, K 線圖, 雷達圖, 盒須圖, 樹狀圖, 矩形樹圖, 旭日圖, 桑基圖, 漏斗圖, 熱力圖, 直方圖, 基礎 儀錶盤圖, 主題河流圖, 半環形圖, 南丁格爾玫瑰圖, 疊加對比 漏斗圖, 疊靠 漏斗圖, 另類 餅圖, 圓角 環形圖, 縱向 盒須圖, 基礎堆疊 條形圖, 堆疊 柱狀圖, 基礎堆疊歸一化百分比 條形圖, 基礎 環形圖, 嵌套 環形圖, 扇區間隙 餅圖, 折柱混合圖, 多 Y 軸 折柱混合圖, 極坐標 柱狀圖, 極坐標 圓角環形圖, 極坐標堆疊 柱狀圖, 橫向 柱狀圖, 瀑布圖, 縱向堆疊 條形圖, 縱向堆疊歸一化百分比 條形圖, 詞雲圖, 進度 儀錶盤圖, 階梯 瀑布圖, 餅圖聯動 折線圖, 多 X 軸 折線圖, 垂直 折線圖, 凹凸圖/排序圖, 極坐標 氣泡圖, 笛卡爾坐標 氣泡圖, 單軸 散點圖, 數據聚合 散點圖, 分布範圍 散點圖, 多系列 盒須圖, 函數繪製圖形, 帶標記/標線的 柱狀圖, 多數值 軸軸縮放 柱狀圖, 可拖拽點的 折線圖, 可添加拐點的 折線圖, 極坐標 雙數值軸 折線圖, 極坐標 雙數值軸 折線圖-2, 雙數值軸 折線圖, 帶標記/標線的 折線圖, 極坐標 熱力圖, 思維導圖, 手寫白板畫布, 流程圖、矢量圖, 日曆圖, 橫向 日曆圖, 縱向 日曆圖, 圖片轉 3D柱狀圖, 圖片轉 3D曲面圖, 3D 折線圖, 3D 柱狀圖, 3D 曲面圖, 3D 散點圖, 虛線柱狀圖, 氣泡圖, 氣泡圖2, AQI 氣泡圖, 流式渲染散點圖, 數據集 3D 柱狀圖, 3D 體素化圖像, 3D 星雲效果, 標籤右部對齊 散點圖, 標籤頂部對齊 散點圖, 時鐘屏保

## URLs
All links are to https://www.hasgg.com/{slug}