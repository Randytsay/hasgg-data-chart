"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import * as echarts from "echarts";

interface DataPoint {
  x: number;
  y: number;
  size: number;
  category: string;
}

type LegendPosition = "top" | "bottom" | "left" | "right" | "none";

export default function ScatterPlotCreationPage() {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([
    { x: 170, y: 65, size: 20, category: "男" },
    { x: 165, y: 58, size: 18, category: "女" },
    { x: 180, y: 75, size: 25, category: "男" },
    { x: 155, y: 52, size: 15, category: "女" },
    { x: 175, y: 68, size: 22, category: "男" },
    { x: 160, y: 55, size: 16, category: "女" },
    { x: 185, y: 80, size: 28, category: "男" },
    { x: 168, y: 60, size: 19, category: "女" },
    { x: 172, y: 70, size: 23, category: "男" },
    { x: 162, y: 54, size: 17, category: "女" },
  ]);

  const [chartTitle, setChartTitle] = useState("身高體重散點圖");
  const [xAxisName, setXAxisName] = useState("身高 (cm)");
  const [yAxisName, setYAxisName] = useState("體重 (kg)");
  const [legendPosition, setLegendPosition] = useState<LegendPosition>("top");
  const [showGrid, setShowGrid] = useState(true);
  const [chartGenerated, setChartGenerated] = useState(false);

  const [newPoint, setNewPoint] = useState<DataPoint>({ x: 0, y: 0, size: 10, category: "" });

  const handleAddPoint = () => {
    if (newPoint.x && newPoint.y) {
      setDataPoints([...dataPoints, newPoint]);
      setNewPoint({ x: 0, y: 0, size: 10, category: "" });
    }
  };

  const handleRemovePoint = (index: number) => {
    setDataPoints(dataPoints.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setDataPoints([]);
    setChartGenerated(false);
  };

  const handleGenerateChart = useCallback(() => {
    setChartGenerated(true);
  }, []);

  const handleDownloadChart = () => {
    const chartContainer = document.getElementById("scatter-chart");
    if (chartContainer) {
      const canvas = chartContainer.querySelector("canvas");
      if (canvas) {
        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `${chartTitle || "scatter-plot"}.png`;
        link.href = url;
        link.click();
      }
    }
  };

  const getChartOption = () => {
    const categories = [...new Set(dataPoints.map((d) => d.category || "默認"))];
    const seriesData = categories.map((cat) => ({
      name: cat,
      type: "scatter" as const,
      data: dataPoints
        .filter((d) => d.category === cat || (!d.category && cat === "默認"))
        .map((d) => [Number(d.x), Number(d.y), Number(d.size || 10)]),
    }));

    const legendPositions: Record<LegendPosition, { left?: string; right?: string; top?: string; bottom?: string }> = {
      top: { top: "20" },
      bottom: { bottom: "20" },
      left: { left: "20" },
      right: { right: "20" },
      none: {},
    };

    return {
      title: {
        text: chartTitle,
        left: "center",
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      },
      legend: {
        ...legendPositions[legendPosition],
        data: categories,
        show: legendPosition !== "none",
      },
      tooltip: {
        trigger: "item",
        formatter: (params: any) => {
          return `${params.seriesName}<br/>X: ${params.value[0]}<br/>Y: ${params.value[1]}<br/>Size: ${params.value[2]}`;
        },
      },
      xAxis: {
        name: xAxisName,
        type: "value",
        scale: true,
        axisLabel: {
          fontSize: 12,
        },
        nameTextStyle: {
          fontSize: 12,
        },
        splitLine: {
          show: showGrid,
        },
      },
      yAxis: {
        name: yAxisName,
        type: "value",
        scale: true,
        axisLabel: {
          fontSize: 12,
        },
        nameTextStyle: {
          fontSize: 12,
        },
        splitLine: {
          show: showGrid,
        },
      },
      series: seriesData.map((s, index) => ({
        ...s,
        symbolSize: (value: number[]) => value[2] || 10,
      })),
    };
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main
        className="mx-auto w-full max-w-[1344px] px-[40.5px]"
        style={{
          fontFamily: '"PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif',
        }}
      >
        {/* Breadcrumb */}
        <nav className="py-4 text-[15px] text-[rgb(51,51,51)]">
          <Link href="/" className="no-underline hover:underline">
            首頁
          </Link>
          {" / "}
          <Link href="/scatter-plot-creation" className="no-underline hover:underline">
            散點圖製作
          </Link>
        </nav>

        {/* Page Title */}
        <h1
          className="mb-6 mt-0 text-[24px] font-medium"
          style={{
            fontFamily: '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
            color: "rgb(51, 51, 51)",
          }}
        >
          散點圖製作工具
        </h1>

        {/* Main Content */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          {/* Left Column - Form Inputs */}
          <div
            className="rounded-md bg-white p-6"
            style={{
              boxShadow: "0 7.5px 15px -1.875px rgba(10,10,10,0.1), 0 0 0 1px rgba(10,10,10,0.02)",
            }}
          >
            <h2
              className="mb-4 mt-0 text-[18px] font-medium"
              style={{
                fontFamily: '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
                color: "rgb(51, 51, 51)",
              }}
            >
              圖表設置
            </h2>

            {/* Chart Title */}
            <div className="mb-4">
              <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">圖表標題</label>
              <input
                type="text"
                value={chartTitle}
                onChange={(e) => setChartTitle(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                placeholder="請輸入圖表標題"
              />
            </div>

            {/* Axis Names */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">X軸名稱</label>
                <input
                  type="text"
                  value={xAxisName}
                  onChange={(e) => setXAxisName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                  placeholder="X軸名稱"
                />
              </div>
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">Y軸名稱</label>
                <input
                  type="text"
                  value={yAxisName}
                  onChange={(e) => setYAxisName(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                  placeholder="Y軸名稱"
                />
              </div>
            </div>

            {/* Legend Position */}
            <div className="mb-4">
              <label className="mb-2 block text-[14px] text-[rgb(51,51,51)]">圖例位置</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { value: "top", label: "頂部" },
                  { value: "bottom", label: "底部" },
                  { value: "left", label: "左側" },
                  { value: "right", label: "右側" },
                  { value: "none", label: "隱藏" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setLegendPosition(option.value as LegendPosition)}
                    className={`rounded-md px-3 py-1 text-[13px] ${
                      legendPosition === option.value
                        ? "bg-[rgb(51,51,51)] text-white"
                        : "bg-gray-100 text-[rgb(51,51,51)] hover:bg-gray-200"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Show Grid */}
            <div className="mb-4 flex items-center gap-2">
              <input
                type="checkbox"
                id="showGrid"
                checked={showGrid}
                onChange={(e) => setShowGrid(e.target.checked)}
                className="h-4 w-4"
              />
              <label htmlFor="showGrid" className="text-[14px] text-[rgb(51,51,51)]">
                顯示格線
              </label>
            </div>

            {/* Add Data Point */}
            <div className="mb-4 rounded-md border border-gray-200 p-4">
              <h3 className="mb-3 mt-0 text-[14px] font-medium text-[rgb(51,51,51)]">新增數據點</h3>
              <div className="mb-3 grid grid-cols-4 gap-3">
                <div>
                  <label className="mb-1 block text-[12px] text-[rgb(102,102,102)]">X值</label>
                  <input
                    type="text"
                    value={newPoint.x}
                    onChange={(e) => setNewPoint({ ...newPoint, x: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-2 py-1 text-[14px]"
                    placeholder="X"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[12px] text-[rgb(102,102,102)]">Y值</label>
                  <input
                    type="text"
                    value={newPoint.y}
                    onChange={(e) => setNewPoint({ ...newPoint, y: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-2 py-1 text-[14px]"
                    placeholder="Y"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[12px] text-[rgb(102,102,102)]">大小</label>
                  <input
                    type="text"
                    value={newPoint.size}
                    onChange={(e) => setNewPoint({ ...newPoint, size: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-2 py-1 text-[14px]"
                    placeholder="大小"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[12px] text-[rgb(102,102,102)]">分類</label>
                  <input
                    type="text"
                    value={newPoint.category}
                    onChange={(e) => setNewPoint({ ...newPoint, category: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-2 py-1 text-[14px]"
                    placeholder="分類"
                  />
                </div>
              </div>
              <button
                onClick={handleAddPoint}
                className="rounded-md bg-[rgb(51,51,51)] px-4 py-2 text-[14px] text-white hover:bg-[rgb(70,70,70)]"
              >
                添加數據
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleGenerateChart}
                className="rounded-md bg-[rgb(51,51,51)] px-4 py-2 text-[14px] text-white hover:bg-[rgb(70,70,70)]"
              >
                生成圖表
              </button>
              <button
                onClick={handleDownloadChart}
                className="rounded-md bg-blue-600 px-4 py-2 text-[14px] text-white hover:bg-blue-700"
              >
                下載圖表
              </button>
              <button
                onClick={handleClearAll}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-[14px] text-[rgb(51,51,51)] hover:bg-gray-50"
              >
                清除全部
              </button>
            </div>
          </div>

          {/* Right Column - Data Table */}
          <div
            className="rounded-md bg-white p-6"
            style={{
              boxShadow: "0 7.5px 15px -1.875px rgba(10,10,10,0.1), 0 0 0 1px rgba(10,10,10,0.02)",
            }}
          >
            <h2
              className="mb-4 mt-0 text-[18px] font-medium"
              style={{
                fontFamily: '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
                color: "rgb(51, 51, 51)",
              }}
            >
              數據列表
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[14px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-[rgb(51,51,51)]">X值</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-[rgb(51,51,51)]">Y值</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-[rgb(51,51,51)]">大小</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-[rgb(51,51,51)]">分類</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-medium text-[rgb(51,51,51)]">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPoints.map((point, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-3 py-2">{point.x}</td>
                      <td className="border border-gray-200 px-3 py-2">{point.y}</td>
                      <td className="border border-gray-200 px-3 py-2">{point.size || "-"}</td>
                      <td className="border border-gray-200 px-3 py-2">{point.category || "-"}</td>
                      <td className="border border-gray-200 px-3 py-2">
                        <button
                          onClick={() => handleRemovePoint(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          刪除
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {dataPoints.length === 0 && (
              <p className="py-4 text-center text-[14px] text-[rgb(102,102,102)]">暫無數據，請添加數據點</p>
            )}
          </div>
        </div>

        {/* Chart Display */}
        {chartGenerated && (
          <div
            id="scatter-chart"
            className="mb-8 rounded-md bg-white p-6"
            style={{
              boxShadow: "0 7.5px 15px -1.875px rgba(10,10,10,0.1), 0 0 0 1px rgba(10,10,10,0.02)",
            }}
          >
            <div style={{ width: "100%", height: "500px" }}>
              <ScatterChart option={getChartOption()} />
            </div>
          </div>
        )}

        {/* Feature Descriptions */}
        <div
          className="mb-8 rounded-md bg-white p-6"
          style={{
            boxShadow: "0 7.5px 15px -1.875px rgba(10,10,10,0.1), 0 0 0 1px rgba(10,10,10,0.02)",
          }}
        >
          <h2
            className="mb-4 mt-0 text-[18px] font-medium"
            style={{
              fontFamily: '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
              color: "rgb(51, 51, 51)",
            }}
          >
            功能特點
          </h2>
          <ul className="list-inside list-disc space-y-2 text-[14px] text-[rgb(51,51,51)]">
            <li>支持自定義圖表標題、X軸和Y軸名稱</li>
            <li>可調整圖例位置或隱藏圖例</li>
            <li>支持顯示/隱藏格線</li>
            <li>支持數據點大小和分類設置</li>
            <li>一鍵下載PNG格式的圖表</li>
            <li>支持新增、刪除數據點</li>
          </ul>
        </div>

        {/* Excel Import Instructions */}
        <div
          className="mb-8 rounded-md bg-white p-6"
          style={{
            boxShadow: "0 7.5px 15px -1.875px rgba(10,10,10,0.1), 0 0 0 1px rgba(10,10,10,0.02)",
          }}
        >
          <h2
            className="mb-4 mt-0 text-[18px] font-medium"
            style={{
              fontFamily: '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
              color: "rgb(51, 51, 51)",
            }}
          >
            Excel 匯入說明
          </h2>
          <p className="mb-4 text-[14px] text-[rgb(51,51,51)]">
            您可以通過 Excel 編輯數據，然後複製粘貼到數據列表中。請確保每列分別為 X值、Y值、大小（可選）和分類（可選）。
          </p>
          <div className="rounded-md bg-gray-50 p-4">
            <p className="text-[13px] text-[rgb(102,102,102)]">
              <strong>提示：</strong>粘貼時請確保格式正確，系統會自動識別數值列。
            </p>
          </div>
        </div>

        {/* Chart Example Image */}
        <div
          className="mb-8 rounded-md bg-white p-6"
          style={{
            boxShadow: "0 7.5px 15px -1.875px rgba(10,10,10,0.1), 0 0 0 1px rgba(10,10,10,0.02)",
          }}
        >
          <h2
            className="mb-4 mt-0 text-[18px] font-medium"
            style={{
              fontFamily: '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
              color: "rgb(51, 51, 51)",
            }}
          >
            圖表示例
          </h2>
          <div className="flex justify-center">
            <Image
              src="https://www.hasgg.com/wp-content/uploads/2024/03/scatter-example.png"
              alt="散點圖示例"
              width={800}
              height={500}
              className="max-w-full rounded-md"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Watermark */}
        <div className="mb-8 text-center">
          <p className="text-[12px] text-[rgb(153,153,153)]">
            匯聚工具 - 專業數據可視化平台
          </p>
        </div>

        {/* Comment Form */}
        <div className="comment-respond mb-12 border-t border-gray-200 pt-8">
          <h3
            className="m-0 mb-2 text-[20px] font-medium"
            style={{
              fontFamily: '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
              color: "rgb(51, 51, 51)",
            }}
          >
            撰寫評論
          </h3>
          <p className="m-0 mb-4 text-[15px] text-[rgb(102,102,102)]">Leave a Reply</p>
          <p className="m-0 mb-6 text-[14px] text-[rgb(102,102,102)]">
            Your email address will not be published. Required fields are marked *
          </p>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">Name *</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">Email *</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">Website</label>
              <input
                type="url"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
              />
            </div>
            <div>
              <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">Comment *</label>
              <textarea
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                rows={5}
                required
              />
            </div>
            <div>
              <p className="m-0 text-[13px] text-[rgb(102,102,102)]">
                <input type="checkbox" className="mr-2" />
                Save my name, email, and website in this browser for the next time I comment.
              </p>
            </div>
            <button
              type="submit"
              className="self-start rounded-md bg-[rgb(51,51,51)] px-6 py-2 text-[15px] text-white hover:bg-[rgb(70,70,70)]"
            >
              發布評論
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Scatter Chart Component using ECharts
function ScatterChart({ option }: { option: echarts.EChartsOption }) {
  const chartRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const chart = echarts.init(node);
      chart.setOption(option);
      return () => {
        chart.dispose();
      };
    }
  }, [option]) as unknown as React.RefCallback<HTMLDivElement>;

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}