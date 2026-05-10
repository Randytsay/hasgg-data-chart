import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "數據圖表 - 聚集工具",
  description: "數據圖表分類頁面，彙集各種可視化數據工具和資源",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="h-full min-h-full flex flex-col" style={{ fontFamily: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}