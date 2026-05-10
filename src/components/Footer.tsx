import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-8 text-[14.4px]"
      style={{
        backgroundColor: "rgb(20, 30, 15)",
        color: "rgb(153, 153, 153)",
        fontFamily:
          '"PingFang SC", "Hiragino Sans GB", "Microsoft Yahei", Arial, sans-serif',
      }}
    >
      <div className="container mx-auto text-center">
        <p className="m-0 leading-[27px]">
          Files:164 - Queries:0 - Time:0.032 - Mem:3.4277
        </p>
        <p className="m-0 leading-[27px]">
          Copyright ©2026 保留所有權利 |{" "}
          <Link href="https://www.hasgg.com" className="text-[rgb(153,153,153)] hover:underline">
            聚集工具
          </Link>{" "}
          |{" "}
          <Link href="https://www.hasgg.com/agreement" className="text-[rgb(153,153,153)] hover:underline">
            網站協議
          </Link>
        </p>
      </div>
    </footer>
  );
}