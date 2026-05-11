"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import * as echarts from "echarts";

interface DataRow {
  source: string;
  target: string;
  value: string;
}

export default function SankeyChartCreationPage() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstanceRef = useRef<echarts.ECharts | null>(null);
  const [dataInput, setDataInput] = useState(
    "訪問,注冊,1000\n訪問,下載,800\n訪問,咨詢,600\n注冊,付費,200\n注冊,未付費,800\n下載,付費,150\n下載,未付費,650\n咨詢,付費,100\n咨詢,未付費,500"
  );
  const [chartStyle, setChartStyle] = useState<"default" | "custom">("default");
  const [nodeWidth, setNodeWidth] = useState(20);
  const [nodeGap, setNodeGap] = useState(8);
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [selectedTemplate, setSelectedTemplate] = useState("traffic");

  const templates = {
    traffic: {
      name: "網站流量",
      data: "訪問,注冊,1000\n訪問,下載,800\n訪問,咨詢,600\n注冊,付費,200\n注冊,未付費,800\n下載,付費,150\n下載,未付費,650\n咨詢,付費,100\n咨詢,未付費,500",
    },
    energy: {
      name: "能源流向",
      data: "煤炭,發電,50\n煤炭,供熱,20\n煤炭,其他,10\n天然氣,發電,30\n天然氣,供熱,15\n天然氣,其他,5\n石油,發電,15\n石油,供熱,10\n石油,其他,5\n太陽能,發電,25\n太陽能,供熱,5\n太陽能,其他,20",
    },
    finance: {
      name: "財務流向",
      data: "收入,員工工資,500\n收入,設備採購,200\n收入,市場營銷,150\n收入,研發,100\n收入,利潤,250\n員工工資,個人所得稅,50\n設備採購,增值稅,20\n市場營銷,增值稅,15",
    },
  };

  const parseData = (): { nodes: string[]; links: { source: string; target: string; value: number }[] } => {
    const nodesSet = new Set<string>();
    const links: { source: string; target: string; value: number }[] = [];

    const lines = dataInput.trim().split("\n");
    for (const line of lines) {
      const parts = line.split(",").map((p) => p.trim());
      if (parts.length >= 3) {
        const [source, target, value] = parts;
        nodesSet.add(source);
        nodesSet.add(target);
        const numValue = parseFloat(value) || 0;
        links.push({ source, target, value: numValue });
      }
    }

    return { nodes: Array.from(nodesSet), links };
  };

  const updateChart = () => {
    if (!chartRef.current) return;

    const { nodes, links } = parseData();

    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispose();
    }

    const chart = echarts.init(chartRef.current);
    chartInstanceRef.current = chart;

    const isHorizontal = orientation === "horizontal";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const option: any = {
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
      },
      series: [
        {
          type: "sankey",
          layout: isHorizontal ? "horizontal" : "vertical",
          layoutIterations: 0,
          orient: isHorizontal ? "horizontal" : "vertical",
          nodeWidth,
          nodeGap,
          nodeAlign: "justify",
          lineStyle: {
            color: "gradient",
            curveness: 0.5,
          },
          label: {
            position: "right",
            fontSize: 12,
            color: "rgb(51, 51, 51)",
          },
          data: nodes.map((name) => ({ name, itemStyle: { color: chartStyle === "default" ? "#4a90d9" : undefined } })),
          links: links.map((link) => ({
            source: link.source,
            target: link.target,
            value: link.value,
          })),
          emphasis: {
            focus: "adjacency",
          },
          itemStyle: {
            borderWidth: 0,
          },
        },
      ],
    };

    chart.setOption(option);
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
  }, [dataInput, chartStyle, nodeWidth, nodeGap, orientation]);

  const handleTemplateChange = (templateKey: string) => {
    setSelectedTemplate(templateKey);
    const template = templates[templateKey as keyof typeof templates];
    if (template) {
      setDataInput(template.data);
    }
  };

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
          <span>桑基圖製作</span>
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
          桑基圖製作工具
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

              {/* Template Selection */}
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">選擇模板</label>
                <select
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px]"
                  value={selectedTemplate}
                  onChange={(e) => handleTemplateChange(e.target.value)}
                >
                  <option value="traffic">網站流量</option>
                  <option value="energy">能源流向</option>
                  <option value="finance">財務流向</option>
                </select>
              </div>

              {/* Data Input */}
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">
                  輸入數據（每行：源,目標,數值）
                </label>
                <textarea
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-[15px] font-mono"
                  rows={10}
                  value={dataInput}
                  onChange={(e) => setDataInput(e.target.value)}
                  placeholder="訪問,注冊,1000&#10;訪問,下載,800&#10;..."
                />
              </div>

              {/* Chart Style */}
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">圖表樣式</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="chartStyle"
                      value="default"
                      checked={chartStyle === "default"}
                      onChange={() => setChartStyle("default")}
                    />
                    <span className="text-[15px]">預設樣式</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="chartStyle"
                      value="custom"
                      checked={chartStyle === "custom"}
                      onChange={() => setChartStyle("custom")}
                    />
                    <span className="text-[15px]">自定義樣式</span>
                  </label>
                </div>
              </div>

              {/* Node Width */}
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">節點寬度: {nodeWidth}</label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={nodeWidth}
                  onChange={(e) => setNodeWidth(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Node Gap */}
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">節點間距: {nodeGap}</label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={nodeGap}
                  onChange={(e) => setNodeGap(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Orientation */}
              <div>
                <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">佈局方向</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="orientation"
                      value="horizontal"
                      checked={orientation === "horizontal"}
                      onChange={() => setOrientation("horizontal")}
                    />
                    <span className="text-[15px]">水平</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="orientation"
                      value="vertical"
                      checked={orientation === "vertical"}
                      onChange={() => setOrientation("vertical")}
                    />
                    <span className="text-[15px]">垂直</span>
                  </label>
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
                  onClick={() => setDataInput("")}
                  className="rounded-md border border-gray-300 bg-white px-6 py-2 text-[15px] text-[rgb(51,51,51)] hover:bg-gray-50"
                >
                  清空數據
                </button>
              </div>
            </form>
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
            桑基圖特點
          </h2>
          <ul className="m-0 flex list-disc flex-col gap-2 pl-6 text-[15px] text-[rgb(51,51,51)]">
            <li>桑基圖（Sankey Diagram）是一種流程圖，用於展示流量、轉化或遷移關係</li>
            <li>適用於可視化能源流動、網站訪問路徑、資金流向等場景</li>
            <li>可以直觀展示不同節點之間的流量大小，流量越大，連線越粗</li>
            <li>支持水平/垂直兩種佈局方向</li>
            <li>可自定義節點寬度和間距</li>
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
            <li>選擇一個預設模板或手動輸入數據</li>
            <li>數據格式：每行包含 源,目標,數值，用逗號分隔</li>
            <li>點擊「更新圖表」按鈕生成桑基圖</li>
            <li>使用「預設樣式」或「自定義樣式」切換外觀</li>
            <li>拖動滑塊調整節點寬度和間距</li>
            <li>選擇水平或垂直佈局方向</li>
          </ol>
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