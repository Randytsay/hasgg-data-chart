import Navbar from "@/components/Navbar";
import ChartGrid from "@/components/ChartGrid";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
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
          <span>數據圖表</span>
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
          數據圖表
        </h1>

        {/* Chart Grid - 84 items */}
        <div className="mb-8">
          <ChartGrid />
        </div>

        {/* Intro paragraph */}
        <p
          className="mb-8 mt-0 text-[15px] leading-[27px] text-[rgb(51,51,51)]"
          style={{ maxWidth: "100%" }}
        >
          歡迎訪問我們的數據圖表分類頁面，這裡彙集了各種類型的數據可視化工具和圖表製作器。我們提供折線圖、柱狀圖、餅圖、散點圖、雷達圖等多種常用圖表類型，幫助您更好地展示和分析數據。所有工具都是免費使用，無需註冊即可開始創建您的專業圖表。
        </p>

        {/* Comment Form */}
        <div className="comment-respond mb-12 border-t border-gray-200 pt-8">
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