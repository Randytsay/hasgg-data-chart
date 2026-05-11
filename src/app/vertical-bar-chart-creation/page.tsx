"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import * as echarts from "echarts";
import { cn } from "@/lib/utils";

type Theme = "default" | "blue" | "green" | "purple" | "orange" | "red";
type LegendPosition = "left" | "right" | "top" | "bottom" | "none";

interface DataRow {
  label: string;
  values: number[];
}

const THEME_COLORS: Record<Theme, string[]> = {
  default: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de"],
  blue: ["#0066cc", "#3399ff", "#66b3ff", "#99ccff", "#cce6ff"],
  green: ["#2e8b57", "#3cb371", "#66cdaa", "#99e6c7", "#ccf2e4"],
  purple: ["#6a3d9a", "#9370db", "#b19cd9", "#d5b9f5", "#ebd9fb"],
  orange: ["#cc6600", "#ff9933", "#ffb366", "#ffd199", "#ffe6cc"],
  red: ["#cc0000", "#ff3333", "#ff6666", "#ff9999", "#ffcccc"],
};

const THEME_LABELS: Record<Theme, string> = {
  default: "預設主題",
  blue: "藍色主題",
  green: "綠色主題",
  purple: "紫色主題",
  orange: "橙色主題",
  red: "紅色主題",
};

const LEGEND_POSITIONS: { value: LegendPosition; label: string }[] = [
  { value: "left", label: "左側" },
  { value: "right", label: "右側" },
  { value: "top", label: "頂部" },
  { value: "bottom", label: "底部" },
  { value: "none", label: "隱藏" },
];

const INITIAL_DATA: DataRow[] = [
  { label: "美國", values: [15.5, 16.2, 17.1, 15.8, 18.2, 19.5] },
  { label: "中國", values: [12.3, 13.8, 15.2, 14.5, 17.8, 19.2] },
  { label: "德國", values: [4.2, 4.5, 4.8, 4.3, 4.9, 5.1] },
  { label: "日本", values: [4.9, 4.7, 4.8, 4.2, 4.6, 4.8] },
  { label: "印度", values: [2.7, 3.1, 3.5, 3.2, 3.9, 4.3] },
];

const YEARS = ["2017年", "2018年", "2019年", "2020年", "2021年", "2022年"];

export default function VerticalBarChartCreation() {
  const [title, setTitle] = useState("各国GDP对比（万亿美元）");
  const [subtitle, setSubtitle] = useState("数据来源：世界银行");
  const [dimension, setDimension] = useState("国内生产总值");
  const [unit, setUnit] = useState("万亿美元");
  const [theme, setTheme] = useState<Theme>("default");
  const [legendPosition, setLegendPosition] = useState<LegendPosition>("top");
  const [showValues, setShowValues] = useState(false);
  const [data, setData] = useState<DataRow[]>(INITIAL_DATA);
  const [chartGenerated, setChartGenerated] = useState(false);

  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
      }
    };
  }, []);

  const generateChart = () => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispose();
    }

    const chart = echarts.init(chartRef.current);
    chartInstanceRef.current = chart;

    const colors = THEME_COLORS[theme];

    const legendOrient =
      legendPosition === "left" || legendPosition === "right" ? "vertical" : "horizontal";
    const legendLeft = legendPosition === "left" ? "left" : legendPosition === "right" ? "right" : "center";
    const legendTop = legendPosition === "top" ? "top" : legendPosition === "bottom" ? "bottom" : undefined;

    const option = {
      title: {
        text: title,
        subtext: subtitle,
        left: "center" as const,
        textStyle: {
          fontSize: 18,
          fontWeight: "bold" as const,
        },
        subtextStyle: {
          fontSize: 12,
          color: "#666",
        },
      },
      tooltip: {
        trigger: "axis" as const,
        axisPointer: {
          type: "shadow" as const,
        },
      },
      legend:
        legendPosition === "none"
          ? undefined
          : {
              data: data.map((d) => d.label),
              orient: legendOrient,
              left: legendLeft,
              top: legendTop,
              bottom: legendPosition === "bottom" ? 0 : undefined,
            },
      grid: {
        left: "3%",
        right: "3%",
        bottom: legendPosition === "bottom" || legendPosition === "none" ? "3%" : "12%",
        containLabel: true,
      },
      xAxis: {
        type: "category" as const,
        data: YEARS,
        axisLabel: {
          interval: 0,
          rotate: 0,
        },
      },
      yAxis: {
        type: "value" as const,
        name: `${dimension}（${unit}）`,
        nameLocation: "middle" as const,
        nameGap: 50,
        nameTextStyle: {
          fontSize: 12,
        },
      },
      series: data.map((row, index) => ({
        name: row.label,
        type: "bar" as const,
        data: row.values,
        itemStyle: {
          color: colors[index % colors.length],
        },
        label: showValues
          ? {
              show: true,
              position: "top" as const,
              formatter: "{c}",
              fontSize: 10,
            }
          : undefined,
        barMaxWidth: 60,
      })),
    };

    chart.setOption(option);
    setChartGenerated(true);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };

  const downloadChart = () => {
    if (!chartInstanceRef.current) return;
    const dataURL = chartInstanceRef.current.getDataURL({
      type: "png",
      pixelRatio: 2,
      backgroundColor: "#fff",
    });
    const link = document.createElement("a");
    link.download = "vertical-bar-chart.png";
    link.href = dataURL;
    link.click();
  };

  const clearData = () => {
    setData([]);
    if (chartInstanceRef.current) {
      chartInstanceRef.current.clear();
    }
    setChartGenerated(false);
  };

  const clearAll = () => {
    setTitle("");
    setSubtitle("");
    setDimension("");
    setUnit("");
    setTheme("default");
    setLegendPosition("top");
    setShowValues(false);
    setData(INITIAL_DATA);
    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispose();
      chartInstanceRef.current = null;
    }
    setChartGenerated(false);
  };

  const addRow = () => {
    setData([...data, { label: `項目${data.length + 1}`, values: Array(YEARS.length).fill(0) }]);
  };

  const addColumn = () => {
    const newYear = `${2017 + YEARS.length}年`;
    setData(data.map((row) => ({ ...row, values: [...row.values, 0] })));
  };

  const updateCellValue = (rowIndex: number, colIndex: number, value: number) => {
    const newData = [...data];
    newData[rowIndex].values[colIndex] = value;
    setData(newData);
  };

  const updateRowLabel = (rowIndex: number, label: string) => {
    const newData = [...data];
    newData[rowIndex].label = label;
    setData(newData);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main
        className="mx-auto w-full max-w-[1344px] px-[40.5px]"
        style={{
          fontFamily:
            '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif',
        }}
      >
        {/* Breadcrumb */}
        <nav className="py-4 text-[15px] text-[rgb(51,51,51)]">
          <Link href="/" className="no-underline hover:underline">
            首頁
          </Link>
          {" / "}
          <Link href="/data-chart" className="no-underline hover:underline">
            數據圖表
          </Link>
          {" / "}
          <span>縱向柱狀圖製作</span>
        </nav>

        {/* Page Title */}
        <h1
          className="mb-6 mt-0 text-[24px] font-medium"
          style={{
            fontFamily:
              '"Palatino", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", sans-serif',
            color: "rgb(51, 51, 51)",
          }}
        >
          縱向柱狀圖製作工具
        </h1>

        {/* Main Content Grid */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Basic Info Section */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2
                className="mb-4 mt-0 text-[18px] font-medium text-[rgb(51,51,51)]"
              >
                基本資訊
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">
                    標題
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="輸入圖表標題"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">
                    副標題
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="輸入副標題（可選）"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">
                      統計維度
                    </label>
                    <input
                      type="text"
                      value={dimension}
                      onChange={(e) => setDimension(e.target.value)}
                      placeholder="如：銷售額"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">
                      計量單位
                    </label>
                    <input
                      type="text"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      placeholder="如：万元"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Theme Section */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2
                className="mb-4 mt-0 text-[18px] font-medium text-[rgb(51,51,51)]"
              >
                選擇主題
              </h2>
              <div className="flex flex-wrap gap-3">
                {(Object.keys(THEME_LABELS) as Theme[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={cn(
                      "rounded-md border px-4 py-2 text-[14px] transition-colors",
                      theme === t
                        ? "border-[rgb(51,51,51)] bg-[rgb(51,51,51)] text-white"
                        : "border-gray-300 bg-white text-[rgb(51,51,51)] hover:bg-gray-50"
                    )}
                  >
                    {THEME_LABELS[t]}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                {THEME_COLORS[theme].map((color, i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-md border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Data Table Section */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2
                className="mb-4 mt-0 text-[18px] font-medium text-[rgb(51,51,51)]"
              >
                數據表格
              </h2>
              <div className="mb-4 text-[13px] text-[rgb(102,102,102)]">
                提示：表格中A1的數據是不讀取的可以隨便填寫
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[14px]">
                  <thead>
                    <tr>
                      <th className="min-w-[100px] border border-gray-300 bg-gray-100 p-2 text-center font-medium">
                        國家
                      </th>
                      {YEARS.map((year, i) => (
                        <th
                          key={i}
                          className="min-w-[80px] border border-gray-300 bg-gray-100 p-2 text-center font-medium"
                        >
                          {year}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="border border-gray-300 p-1">
                          <input
                            type="text"
                            value={row.label}
                            onChange={(e) => updateRowLabel(rowIndex, e.target.value)}
                            className="w-full p-2 text-center text-[14px]"
                          />
                        </td>
                        {row.values.map((value, colIndex) => (
                          <td key={colIndex} className="border border-gray-300 p-1">
                            <input
                              type="number"
                              value={value}
                              onChange={(e) =>
                                updateCellValue(rowIndex, colIndex, parseFloat(e.target.value) || 0)
                              }
                              className="w-full p-2 text-center text-[14px]"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={addRow}
                  className="rounded-md bg-gray-100 px-4 py-2 text-[14px] text-[rgb(51,51,51)] hover:bg-gray-200"
                >
                  添加一行
                </button>
                <button
                  onClick={addColumn}
                  className="rounded-md bg-gray-100 px-4 py-2 text-[14px] text-[rgb(51,51,51)] hover:bg-gray-200"
                >
                  添加一列
                </button>
                <button
                  onClick={clearData}
                  className="rounded-md bg-gray-100 px-4 py-2 text-[14px] text-[rgb(51,51,51)] hover:bg-gray-200"
                >
                  清除數據
                </button>
              </div>
            </div>

            {/* Options Section */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2
                className="mb-4 mt-0 text-[18px] font-medium text-[rgb(51,51,51)]"
              >
                圖表選項
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-[14px] text-[rgb(51,51,51)]">
                    圖例位置
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {LEGEND_POSITIONS.map((pos) => (
                      <button
                        key={pos.value}
                        onClick={() => setLegendPosition(pos.value)}
                        className={cn(
                          "rounded-md border px-4 py-2 text-[14px] transition-colors",
                          legendPosition === pos.value
                            ? "border-[rgb(51,51,51)] bg-[rgb(51,51,51)] text-white"
                            : "border-gray-300 bg-white text-[rgb(51,51,51)] hover:bg-gray-50"
                        )}
                      >
                        {pos.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="showValues"
                    checked={showValues}
                    onChange={(e) => setShowValues(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <label
                    htmlFor="showValues"
                    className="text-[14px] text-[rgb(51,51,51)]"
                  >
                    顯示數值標籤
                  </label>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={generateChart}
                className="rounded-md bg-[rgb(51,51,51)] px-6 py-3 text-[15px] text-white hover:bg-[rgb(70,70,70)]"
              >
                生成圖表
              </button>
              <button
                onClick={downloadChart}
                disabled={!chartGenerated}
                className="rounded-md bg-[rgb(51,51,51)] px-6 py-3 text-[15px] text-white hover:bg-[rgb(70,70,70)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                下載圖表
              </button>
              <button
                onClick={clearAll}
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-[15px] text-[rgb(51,51,51)] hover:bg-gray-50"
              >
                清除所有
              </button>
            </div>
          </div>

          {/* Right Column - Chart Preview */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2
                className="mb-4 mt-0 text-[18px] font-medium text-[rgb(51,51,51)]"
              >
                圖表預覽
              </h2>
              <div
                ref={chartRef}
                className="h-[400px] w-full"
                style={{ minHeight: "400px" }}
              />
            </div>

            {/* Feature Descriptions */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2
                className="mb-4 mt-0 text-[18px] font-medium text-[rgb(51,51,51)]"
              >
                功能特點
              </h2>
              <ul className="space-y-2 text-[14px] text-[rgb(51,51,51)]">
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(51,51,51)]">✓</span>
                  <span>圖表生成：快速生成專業的縱向柱狀圖</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(51,51,51)]">✓</span>
                  <span>多主題支持：提供多種顏色主題選擇</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(51,51,51)]">✓</span>
                  <span>數據輸入：支持手動輸入或粘貼數據</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(51,51,51)]">✓</span>
                  <span>自定義選項：可調整圖例位置、顯示數值標籤</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(51,51,51)]">✓</span>
                  <span>圖表下載：支持PNG格式高清下載</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[rgb(51,51,51)]">✓</span>
                  <span>全程本地處理：數據不會上傳到服務器</span>
                </li>
              </ul>
            </div>

            {/* Excel Import Instructions */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2
                className="mb-4 mt-0 text-[18px] font-medium text-[rgb(51,51,51)]"
              >
                Excel 導入說明
              </h2>
              <div className="space-y-3 text-[14px] text-[rgb(102,102,102)]">
                <p>1. 準備Excel文件，第一列為標籤（如國家名稱）</p>
                <p>2. 其他列為數值數據</p>
                <p>3. 複製數據粘貼到表格中</p>
                <p>4. 注意：A1單元格不讀取，可以隨便填寫</p>
              </div>
              <div className="mt-4 rounded-md bg-gray-50 p-4">
                <div className="text-[13px] text-[rgb(102,102,102)]">
                  <p className="font-medium text-[rgb(51,51,51)]">示例：</p>
                  <pre className="mt-2 whitespace-pre-wrap">
{`國家	2017年	2018年	2019年
美國	15.5	16.2	17.1
中國	12.3	13.8	15.2
德國	4.2	4.5	4.8`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        <div className="comment-respond mb-12 border-t border-gray-200 pt-8">
          <h3
            className="m-0 mb-2 text-[20px] font-medium"
            style={{
              fontFamily:
                '"Palatino", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft Yahei", sans-serif',
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