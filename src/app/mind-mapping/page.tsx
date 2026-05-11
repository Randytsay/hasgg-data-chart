"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface MindMapNode {
  id: string;
  text: string;
  x: number;
  y: number;
  children: string[];
  parentId: string | null;
}

const initialNodes: MindMapNode[] = [
  { id: "root", text: "思維導圖", x: 400, y: 300, children: ["node1", "node2", "node3"], parentId: null },
  { id: "node1", text: "中心主題", x: 200, y: 150, children: [], parentId: "root" },
  { id: "node2", text: "子節點", x: 400, y: 450, children: [], parentId: "root" },
  { id: "node3", text: "另一個節點", x: 600, y: 150, children: [], parentId: "root" },
];

export default function MindMappingPage() {
  const [nodes, setNodes] = useState<MindMapNode[]>(initialNodes);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [editingNodeId, setEditingNodeId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  const [newNodeText, setNewNodeText] = useState("");
  const [theme, setTheme] = useState<"light" | "dark" | "colorful">("light");

  const selectedNode = nodes.find((n) => n.id === selectedNodeId);

  const handleNodeClick = useCallback((nodeId: string) => {
    setSelectedNodeId(nodeId);
  }, []);

  const handleEditClick = useCallback((nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (node) {
      setEditingNodeId(nodeId);
      setEditText(node.text);
    }
  }, [nodes]);

  const handleEditSave = useCallback(() => {
    if (editingNodeId && editText.trim()) {
      setNodes((prev) =>
        prev.map((n) =>
          n.id === editingNodeId ? { ...n, text: editText.trim() } : n
        )
      );
      setEditingNodeId(null);
      setEditText("");
    }
  }, [editingNodeId, editText]);

  const handleAddChild = useCallback(() => {
    if (!selectedNode || !newNodeText.trim()) return;

    const newId = `node-${Date.now()}`;
    const childCount = selectedNode.children.length;
    const offsetX = 150;
    const offsetY = 80 * (childCount - selectedNode.children.length / 2);

    const newNode: MindMapNode = {
      id: newId,
      text: newNodeText.trim(),
      x: selectedNode.x - offsetX,
      y: selectedNode.y + offsetY,
      children: [],
      parentId: selectedNode.id,
    };

    setNodes((prev) => [
      ...prev.map((n) =>
        n.id === selectedNode.id
          ? { ...n, children: [...n.children, newId] }
          : n
      ),
      newNode,
    ]);
    setNewNodeText("");
  }, [selectedNode, newNodeText]);

  const handleAddSibling = useCallback(() => {
    if (!selectedNode || !selectedNode.parentId || !newNodeText.trim()) return;

    const parent = nodes.find((n) => n.id === selectedNode.parentId);
    if (!parent) return;

    const newId = `node-${Date.now()}`;
    const siblingIndex = parent.children.indexOf(selectedNode.id);
    const offsetX = 150;
    const offsetY = 80;

    const newNode: MindMapNode = {
      id: newId,
      text: newNodeText.trim(),
      x: parent.x - offsetX,
      y: parent.y + offsetY * (siblingIndex - parent.children.length / 2 + 1),
      children: [],
      parentId: parent.id,
    };

    setNodes((prev) => [
      ...prev.map((n) =>
        n.id === parent.id
          ? { ...n, children: [...n.children, newId] }
          : n
      ),
      newNode,
    ]);
    setNewNodeText("");
  }, [selectedNode, nodes, newNodeText]);

  const handleDeleteNode = useCallback(() => {
    if (!selectedNode || selectedNode.id === "root") return;

    const collectDescendants = (nodeId: string): string[] => {
      const node = nodes.find((n) => n.id === nodeId);
      if (!node) return [];
      return [nodeId, ...node.children.flatMap(collectDescendants)];
    };

    const toDelete = new Set(collectDescendants(selectedNode.id));

    setNodes((prev) =>
      prev
        .filter((n) => !toDelete.has(n.id))
        .map((n) =>
          n.id === selectedNode.parentId
            ? { ...n, children: n.children.filter((c) => c !== selectedNode.id) }
            : n
        )
    );
    setSelectedNodeId(null);
  }, [selectedNode, nodes]);

  const exportToSvg = useCallback(() => {
    const svg = document.getElementById("mind-map-svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "mind-map.svg";
    link.click();

    URL.revokeObjectURL(url);
  }, []);

  const getNodeColor = (nodeId: string) => {
    if (theme === "dark") return "#1a1a2e";
    if (theme === "colorful") {
      const colors = ["#4facfe", "#00f2fe", "#43e97b", "#fa709a", "#f6d365"];
      const index = nodes.findIndex((n) => n.id === nodeId) % colors.length;
      return colors[index];
    }
    return "#ffffff";
  };

  const getNodeBorderColor = (nodeId: string) => {
    if (theme === "dark") return "#4facfe";
    if (theme === "colorful") {
      const colors = ["#4facfe", "#00f2fe", "#43e97b", "#fa709a", "#f6d365"];
      const index = nodes.findIndex((n) => n.id === nodeId) % colors.length;
      return colors[index];
    }
    return "#333333";
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
          <span>思維導圖製作</span>
        </nav>

        {/* Page Title */}
        <h1
          className="mb-6 mt-0 text-[24px] font-medium"
          style={{
            fontFamily:
              '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft YaHei", sans-serif',
            color: "rgb(51, 51, 51)",
          }}
        >
          思維導圖製作工具
        </h1>

        {/* Mind Map Container */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row">
          {/* Canvas Area */}
          <div
            className="flex-1 overflow-hidden rounded-lg border border-gray-200 bg-white"
            style={{ minHeight: "500px" }}
          >
            <svg
              id="mind-map-svg"
              width="100%"
              height="500"
              style={{ background: theme === "dark" ? "#1a1a2e" : "#fafafa" }}
            >
              {/* Draw edges first */}
              {nodes.map((node) =>
                node.children.map((childId) => {
                  const child = nodes.find((n) => n.id === childId);
                  if (!child) return null;

                  const startX = node.x;
                  const startY = node.y;
                  const endX = child.x;
                  const endY = child.y;

                  const midX = (startX + endX) / 2;

                  return (
                    <path
                      key={`edge-${node.id}-${childId}`}
                      d={`M ${startX} ${startY} Q ${midX} ${startY} ${midX} ${(startY + endY) / 2} T ${endX} ${endY}`}
                      fill="none"
                      stroke={theme === "dark" ? "#4facfe" : "#666"}
                      strokeWidth="2"
                    />
                  );
                })
              )}

              {/* Draw nodes */}
              {nodes.map((node) => (
                <g
                  key={node.id}
                  transform={`translate(${node.x - 60}, ${node.y - 25})`}
                  onClick={() => handleNodeClick(node.id)}
                  style={{ cursor: "pointer" }}
                >
                  <rect
                    width="120"
                    height="50"
                    rx="8"
                    fill={getNodeColor(node.id)}
                    stroke={selectedNodeId === node.id ? "#4facfe" : getNodeBorderColor(node.id)}
                    strokeWidth={selectedNodeId === node.id ? "3" : "2"}
                  />
                  {editingNodeId === node.id ? (
                    <foreignObject x="5" y="8" width="110" height="34">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={handleEditSave}
                        onKeyDown={(e) => e.key === "Enter" && handleEditSave()}
                        className="h-full w-full border-none bg-transparent outline-none"
                        style={{ fontSize: "14px", textAlign: "center" }}
                        autoFocus
                      />
                    </foreignObject>
                  ) : (
                    <text
                      x="60"
                      y="30"
                      textAnchor="middle"
                      fill={theme === "dark" ? "#fff" : "#333"}
                      fontSize="14"
                      fontWeight={node.id === "root" ? "bold" : "normal"}
                    >
                      {node.text}
                    </text>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Control Panel */}
          <div className="w-full rounded-lg border border-gray-200 bg-white p-4 lg:w-[300px]">
            <h3
              className="mb-4 mt-0 text-[16px] font-medium"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              節點操作
            </h3>

            {selectedNode ? (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">
                    節點文字
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editingNodeId === selectedNode.id ? editText : selectedNode.text}
                      onChange={(e) => setEditText(e.target.value)}
                      className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-[14px]"
                      disabled={editingNodeId !== selectedNode.id}
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEditClick(selectedNode.id)}
                    >
                      編輯
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[14px] text-[rgb(51,51,51)]">
                    新節點文字
                  </label>
                  <input
                    type="text"
                    value={newNodeText}
                    onChange={(e) => setNewNodeText(e.target.value)}
                    placeholder="輸入節點文字..."
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-[14px]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Button size="sm" onClick={handleAddChild}>
                    添加子節點
                  </Button>
                  {selectedNode.parentId && (
                    <Button size="sm" variant="outline" onClick={handleAddSibling}>
                      添加兄弟節點
                    </Button>
                  )}
                  {selectedNode.id !== "root" && (
                    <Button size="sm" variant="destructive" onClick={handleDeleteNode}>
                      刪除節點
                    </Button>
                  )}
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-[14px] text-[rgb(51,51,51)]">
                    主題
                  </label>
                  <div className="flex gap-2">
                    {(["light", "dark", "colorful"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTheme(t)}
                        className={`rounded-md border px-3 py-1 text-[13px] ${
                          theme === t
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-gray-300 bg-white text-gray-700"
                        }`}
                      >
                        {t === "light" ? "淺色" : t === "dark" ? "深色" : "彩色"}
                      </button>
                    ))}
                  </div>
                </div>

                <Button className="mt-4 w-full" onClick={exportToSvg}>
                  下載為 SVG
                </Button>
              </div>
            ) : (
              <p className="text-[14px] text-gray-500">點擊節點以選擇</p>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h2
            className="mb-4 mt-0 text-[20px] font-medium"
            style={{
              fontFamily:
                '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft YaHei", sans-serif',
              color: "rgb(51, 51, 51)",
            }}
          >
            功能特點
          </h2>
          <ul className="mb-6 flex list-inside flex-wrap gap-x-8 gap-y-2 text-[15px] text-[rgb(51,51,51)]">
            <li>自動生成</li>
            <li>下載為SVG</li>
            <li>本地處理</li>
            <li>支持 Markdown</li>
            <li>支持 Katex 數學公式</li>
          </ul>
        </div>

        {/* Example Images */}
        <div className="mb-8">
          <h2
            className="mb-4 mt-0 text-[20px] font-medium"
            style={{
              fontFamily:
                '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft YaHei", sans-serif',
              color: "rgb(51, 51, 51)",
            }}
          >
            示例效果
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex aspect-video items-center justify-center rounded-lg border border-gray-200 bg-gray-50 text-[14px] text-gray-400"
              >
                示例圖片 {i}
              </div>
            ))}
          </div>
        </div>

        {/* Comment Form */}
        <div className="comment-respond mb-12 border-t border-gray-200 pt-8">
          <h3
            className="m-0 mb-2 text-[20px] font-medium"
            style={{
              fontFamily:
                '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft YaHei", sans-serif',
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