"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import * as echarts from "echarts";

interface HeatmapData {
  xLabel: string;
  yLabel: string;
  value: string;
}

export default function HeatmapCartesianChartCreationPage() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);

  // X axis labels (e.g., hours, days, months)
  const [xLabels, setXLabels] = useState("0時,1時,2時,3時,4時,5時,6時,7時,8時,9時,10時,11時,12時,13時,14時,15時,16時,17時,18時,19時,20時,21時,22時,23時");

  // Y axis labels (e.g., days of the week)
  const [yLabels, setYLabels] = useState("週一,週二,週三,週四,週五,週六,週日");

  // Data: each row is "xLabel,yLabel,value"
  const [dataInput, setDataInput] = useState(
    "0時,週一,5\n1時,週一,3\n2時,週一,1\n3時,週一,0\n4時,週一,1\n5時,週一,2\n6時,週一,4\n7時,週一,8\n8時,週一,15\n9時,週一,22\n10時,週一,28\n11時,週一,32\n12時,週一,35\n13時,週一,33\n14時,週一,30\n15時,週一,28\n16時,週一,25\n17時,週一,30\n18時,週一,28\n19時,週一,22\n20時,週一,15\n21時,週一,10\n22時,週一,8\n23時,週一,5\n0時,週二,4\n1時,週二,2\n2時,週二,1\n3時,週二,0\n4時,週二,1\n5時,週二,3\n6時,週二,5\n7時,週二,10\n8時,週二,18\n9時,週二,25\n10時,週二,30\n11時,週二,35\n12時,週二,38\n13時,週二,36\n14時,週二,32\n15時,週二,30\n16時,週二,28\n17時,週二,32\n18時,週二,30\n19時,週二,25\n20時,週二,18\n21時,週二,12\n22時,週二,8\n23時,週二,5\n0時,週三,3\n1時,週三,2\n2時,週三,1\n3時,週三,0\n4時,週三,1\n5時,週三,3\n6時,週三,6\n7時,週三,12\n8時,週三,20\n9時,週三,28\n10時,週三,33\n11時,週三,38\n12時,週三,40\n13時,週三,38\n14時,週三,35\n15時,週三,32\n16時,週三,30\n17時,週三,35\n18時,週三,33\n19時,週三,28\n20時,週三,20\n21時,週三,15\n22時,週三,10\n23時,週三,6\n0時,週四,4\n1時,週四,2\n2時,週四,1\n3時,週四,0\n4時,週四,1\n5時,週四,3\n6時,週四,5\n7時,週四,10\n8時,週四,18\n9時,週四,25\n10時,週四,30\n11時,週四,35\n12時,週四,38\n13時,週四,36\n14時,週四,32\n15時,週四,30\n16時,週四,28\n17時,週四,32\n18時,週四,30\n19時,週四,25\n20時,週四,18\n21時,週四,12\n22時,週四,8\n23時,週四,5\n0時,週五,5\n1時,週五,3\n2時,週五,1\n3時,週五,0\n4時,週五,1\n5時,週五,2\n6時,週五,4\n7時,週五,8\n8時,週五,15\n9時,週五,22\n10時,週五,28\n11時,週五,32\n12時,週五,35\n13時,週五,33\n14時,週五,30\n15時,週五,28\n16時,週五,25\n17時,週五,30\n18時,週五,28\n19時,週五,22\n20時,週五,15\n21時,週五,10\n22時,週五,8\n23時,週五,5\n0時,週六,8\n1時,週六,6\n2時,週六,3\n3時,週六,1\n4時,週六,2\n5時,週六,4\n6時,週六,8\n7時,週六,15\n8時,週六,22\n9時,週六,28\n10時,週六,33\n11時,週六,38\n12時,週六,40\n13時,週六,38\n14時,週六,35\n15時,週六,32\n16時,週六,30\n17時,週六,35\n18時,週六,33\n19時,週六,28\n20時,週六,22\n21時,週六,18\n22時,週六,15\n23時,週六,10\n0時,週日,10\n1時,週日,8\n2時,週日,5\n3時,週日,2\n4時,週日,3\n5時,週日,5\n6時,週日,10\n7時,週日,18\n8時,週日,25\n9時,週日,30\n10時,週日,35\n11時,週日,40\n12時,週日,42\n13時,週日,40\n14時,週日,38\n15時,週日,35\n16時,週日,33\n17時,週日,38\n18時,週日,35\n19時,週日,30\n20時,週日,25\n21時,週日,20\n22時,週日,18\n23時,週日,12"
  );

  // Color scale selection
  const [colorScale, setColorScale] = useState<"default" | "warm" | "cool" | "rainbow">("default");

  // Min/max value for color range
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(50);

  const colorScales = {
    default: [
      [0, "#313695"],
      [0.25, "#4575b4"],
      [0.5, "#abd9e9"],
      [0.75, "#fee090"],
      [1, "#d73027"],
    ],
    warm: [
      [0, "#000000"],
      [0.25, "#8b0000"],
      [0.5, "#ff4500"],
      [0.75, "#ffa500"],
      [1, "#ffff00"],
    ],
    cool: [
      [0, "#0000ff"],
      [0.25, "#00bfff"],
      [0.5, "#00fa9a"],
      [0.75, "#7fff00"],
      [1, "#ffff00"],
    ],
    rainbow: [
      [0, "#ff0000"],
      [0.2, "#ff7f00"],
      [0.4, "#ffff00"],
      [0.6, "#00ff00"],
      [0.8, "#0000ff"],
      [1, "#8b00ff"],
    ],
  };

  const parseData = (): { xLabelsArr: string[]; yLabelsArr: string[]; data: [number, number, number][] } => {
    const xLabelsArr = xLabels.split(",").map((l) => l.trim());
    const yLabelsArr = yLabels.split(",").map((l) => l.trim());

    const dataMap: Map<string, number> = new Map();
    const lines = dataInput.trim().split("\n");

    for (const line of lines) {
      const parts = line.split(",").map((p) => p.trim());
      if (parts.length >= 3) {
        const [xLabel, yLabel, value] = parts;
        const xIndex = xLabelsArr.indexOf(xLabel);
        const yIndex = yLabelsArr.indexOf(yLabel);
        if (xIndex !== -1 && yIndex !== -1) {
          const numValue = parseFloat(value) || 0;
          dataMap.set(`${xIndex},${yIndex}`, numValue);
        }
      }
    }

    const data: [number, number, number][] = [];
    for (let y = 0; y < yLabelsArr.length; y++) {
      for (let x = 0; x < xLabelsArr.length; x++) {
        const value = dataMap.get(`${x},${y}`) ?? 0;
        data.push([x, y, value]);
      }
    }

    return { xLabelsArr, yLabelsArr, data };
  };

  const updateChart = () => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispose();
    }

    const chart = echarts.init(chartRef.current);
    chartInstanceRef.current = chart;

    const { xLabelsArr, yLabelsArr, data } = parseData();
    const colors = colorScales[colorScale];

    const option: echarts.EChartsOption = {
      tooltip: {
        position: "top",
        formatter: (params: unknown) => {
          const p = params as { data: [number, number, number] };
          const [x, y, value] = p.data;
          return `${yLabelsArr[y]}<br/>${xLabelsArr[x]}: ${value}`;
        },
      },
      grid: {
        top: 40,
        right: 60,
        bottom: 60,
        left: 80,
      },
      xAxis: {
        type: "category",
        data: xLabelsArr,
        splitArea: {
          show: true,
        },
        axisLabel: {
          fontSize: 12,
          color: "rgb(51, 51, 51)",
        },
        axisLine: {
          lineStyle: {
            color: "rgb(51, 51, 51)",
          },
        },
      },
      yAxis: {
        type: "category",
        data: yLabelsArr,
        splitArea: {
          show: true,
        },
        axisLabel: {
          fontSize: 12,
          color: "rgb(51, 51, 51)",
        },
        axisLine: {
          lineStyle: {
            color: "rgb(51, 51, 51)",
          },
        },
      },
      visualMap: {
        min: minValue,
        max: maxValue,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: 10,
        inRange: {
          color: colors.map((c) => c[1]),
        },
        textStyle: {
          color: "rgb(51, 51, 51)",
          fontSize: 12,
        },
      },
      series: [
        {
          type: "heatmap",
          data: data,
          label: {
            show: false,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    chart.setOption(option as any);
  };

  useEffect(() => {
    updateChart();

    const handleResize = () => {
      chartInstanceRef.current?.resize();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstanceRef.current?.dispose();
    };
  }, [xLabels, yLabels, dataInput, colorScale, minValue, maxValue]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateChart();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main
        className="mx-auto w-full max-w-[1344px] px-[40.5px]"
        style={{
          fontFamily:
            '"PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif',
        }}
      >
        {/* Breadcrumb */}
        <nav className="py-4 text-[15px] text-[rgb(51,51,51)]">
          <Link href="/" className="no-underline hover:underline">
            首頁
          </Link>
          {" / "}
          <Link href="https://www.hasgg.com/data-chart" className="no-underline hover:underline">
            數據圖表
          </Link>
          {" / "}
          <span>熱力圖製作</span>
        </nav>

        {/* Page Title */}
        <h1
          className="mb-6 mt-0 text-[24px] font-medium"
          style={{
            fontFamily:
              '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
            color: "rgb(51, 51, 51)",
          }}
        >
          熱力圖製作工具
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Form */}
          <div className="flex flex-col gap-6">
            {/* Data Input Form */}
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 rounded-lg border border-gray-200 p-6">
              <h2
                className="m-0 text-[18px] font-medium"
                style={{
                  fontFamily:
                    '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
                  color: "rgb(51, 51, 51)",
                }}
              >
                數據輸入
              </h2>

              {/* X Axis Labels */}
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">X軸類別（用逗號分隔）</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                  value={xLabels}
                  onChange={(e) => setXLabels(e.target.value)}
                  placeholder="0時,1時,2時,..."
                />
              </div>

              {/* Y Axis Labels */}
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">Y軸類別（用逗號分隔）</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                  value={yLabels}
                  onChange={(e) => setYLabels(e.target.value)}
                  placeholder="週一,週二,週三,..."
                />
              </div>

              {/* Data Input */}
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">
                  輸入數據（每行：X標籤,Y標籤,數值）
                </label>
                <textarea
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px] font-mono"
                  rows={12}
                  value={dataInput}
                  onChange={(e) => setDataInput(e.target.value)}
                  placeholder="0時,週一,5&#10;1時,週一,3&#10;..."
                />
              </div>

              {/* Color Scale Selection */}
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">色彩方案</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="colorScale"
                      value="default"
                      checked={colorScale === "default"}
                      onChange={() => setColorScale("default")}
                    />
                    <span className="text-[15px]">預設藍紅</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="colorScale"
                      value="warm"
                      checked={colorScale === "warm"}
                      onChange={() => setColorScale("warm")}
                    />
                    <span className="text-[15px]">暖色系</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="colorScale"
                      value="cool"
                      checked={colorScale === "cool"}
                      onChange={() => setColorScale("cool")}
                    />
                    <span className="text-[15px]">冷色系</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="colorScale"
                      value="rainbow"
                      checked={colorScale === "rainbow"}
                      onChange={() => setColorScale("rainbow")}
                    />
                    <span className="text-[15px]">彩虹色</span>
                  </label>
                </div>
              </div>

              {/* Min/Max Value */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">最小值</label>
                  <input
                    type="number"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                    value={minValue}
                    onChange={(e) => setMinValue(parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">最大值</label>
                  <input
                    type="number"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                    value={maxValue}
                    onChange={(e) => setMaxValue(parseFloat(e.target.value) || 100)}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="rounded-md bg-[rgb(51,51,51)] px-6 py-2 text-[15px] text-white hover:bg-[rgb(70,70,70)]"
                >
                  更新圖表
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setXLabels("0時,1時,2時,3時,4時,5時,6時,7時,8時,9時,10時,11時,12時,13時,14時,15時,16時,17時,18時,19時,20時,21時,22時,23時");
                    setYLabels("週一,週二,週三,週四,週五,週六,週日");
                    setDataInput("");
                  }}
                  className="rounded-md border border-gray-300 bg-white px-6 py-2 text-[15px] text-[rgb(51,51,51)] hover:bg-gray-50"
                >
                  清空數據
                </button>
              </div>
            </form>

            {/* Data Table Preview */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h2
                className="m-0 mb-4 text-[18px] font-medium"
                style={{
                  fontFamily:
                    '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
                  color: "rgb(51, 51, 51)",
                }}
              >
                數據表格預覽
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-[13px]">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 bg-gray-100 px-2 py-1 text-left">X \ Y</th>
                      {xLabels.split(",").map((label, i) => (
                        <th key={i} className="border border-gray-300 bg-gray-100 px-2 py-1 text-left">
                          {label.trim()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {yLabels.split(",").map((yLabel, yIndex) => (
                      <tr key={yIndex}>
                        <td className="border border-gray-300 bg-gray-100 px-2 py-1 font-medium">
                          {yLabel.trim()}
                        </td>
                        {xLabels.split(",").map((_, xIndex) => {
                          // Find the value for this cell
                          const cellValue = dataInput
                            .split("\n")
                            .find((line) => {
                              const parts = line.split(",").map((p) => p.trim());
                              return (
                                parts.length >= 3 &&
                                parts[0] === xLabels.split(",")[xIndex].trim() &&
                                parts[1] === yLabel.trim()
                              );
                            })
                            ?.split(",")[2];

                          return (
                            <td key={xIndex} className="border border-gray-300 px-2 py-1 text-center">
                              {cellValue ?? "-"}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Chart Preview */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2
                className="m-0 mb-4 text-[18px] font-medium"
                style={{
                  fontFamily:
                    '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
                  color: "rgb(51, 51, 51)",
                }}
              >
                圖表預覽
              </h2>
              <div
                ref={chartRef}
                className="h-[500px] w-full"
                style={{ minHeight: "500px" }}
              />
            </div>
          </div>
        </div>

        {/* Feature Description */}
        <div className="mt-8 rounded-lg border border-gray-200 p-6">
          <h2
            className="m-0 mb-4 text-[18px] font-medium"
            style={{
              fontFamily:
                '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
              color: "rgb(51, 51, 51)",
            }}
          >
            熱力圖特點
          </h2>
          <ul className="m-0 flex list-disc flex-col gap-2 pl-6 text-[15px] text-[rgb(51,51,51)]">
            <li>熱力圖（Heatmap）是一種二維數據可視化方式，用顏色深淺表示數值大小</li>
            <li>適用於展示時段分佈、活動規律、溫度變化等場景</li>
            <li>X軸和Y軸可以表示不同的分類維度，如時間、星期、地理位置等</li>
            <li>支持多種色彩方案，可根據數據特點選擇合適的配色</li>
            <li>可自定義數值範圍，調整色彩映射</li>
          </ul>
        </div>

        {/* Usage Instructions */}
        <div className="mt-8 rounded-lg border border-gray-200 p-6">
          <h2
            className="m-0 mb-4 text-[18px] font-medium"
            style={{
              fontFamily:
                '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
              color: "rgb(51, 51, 51)",
            }}
          >
            使用說明
          </h2>
          <ol className="m-0 flex list-decimal flex-col gap-2 pl-6 text-[15px] text-[rgb(51,51,51)]">
            <li>設置X軸類別（如小時：0時,1時,2時,...23時）</li>
            <li>設置Y軸類別（如星期：週一,週二,...,週日）</li>
            <li>輸入數據，每行格式：X標籤,Y標籤,數值</li>
            <li>選擇合適的色彩方案（藍紅、暖色、冷色、彩虹）</li>
            <li>設置數值範圍（最小值和最大值）</li>
            <li>點擊「更新圖表」按鈕生成熱力圖</li>
          </ol>
        </div>

        {/* Example Section */}
        <div className="mt-8 rounded-lg border border-gray-200 p-6">
          <h2
            className="m-0 mb-4 text-[18px] font-medium"
            style={{
              fontFamily:
                '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
              color: "rgb(51, 51, 51)",
            }}
          >
            應用示例
          </h2>
          <p className="m-0 mb-4 text-[15px] text-[rgb(51,51,51)]">
            本示例展示了一週內不同時段的活动规律分布。颜色越深（红色）表示数值越高，颜色越浅（蓝色）表示数值越低。
          </p>
          <div className="rounded-md bg-gray-50 p-4">
            <p className="m-0 text-[14px] text-[rgb(102,102,102)]">
              <strong>典型應用場景：</strong>
            </p>
            <ul className="m-2 flex list-disc flex-col gap-1 pl-6 text-[14px] text-[rgb(102,102,102)]">
              <li>網站訪問時段分析 - 了解用戶活躍時間</li>
              <li>銷售數據分佈 - 識別銷售高峰時段</li>
              <li>溫度監測 - 記錄溫度變化趨勢</li>
              <li>用戶行為分析 - 分析用戶活躍模式</li>
            </ul>
          </div>
        </div>

        {/* Comment Form */}
        <div className="comment-respond mb-12 mt-8 border-t border-gray-200 pt-8">
          <h3
            className="m-0 mb-2 text-[20px] font-medium"
            style={{
              fontFamily:
                '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
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