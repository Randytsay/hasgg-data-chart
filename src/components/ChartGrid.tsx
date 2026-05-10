import { CHART_ITEMS } from "@/types/hasgg";
import Link from "next/link";

export default function ChartGrid() {
  return (
    <div
      className="grid gap-[10px]"
      style={{
        gridTemplateColumns: "repeat(3, 420px)",
      }}
    >
      {CHART_ITEMS.map((item) => (
        <div
          key={item.title}
          className="box flex rounded-md bg-white"
          style={{
            display: "flex",
            padding: "20px",
            marginBottom: "24px",
            boxShadow:
              "0 7.5px 15px -1.875px rgba(10,10,10,0.1), 0 0 0 1px rgba(10,10,10,0.02)",
          }}
        >
          <h3
            className="m-0"
            style={{
              display: "flex",
              fontSize: "20px",
              fontWeight: 500,
              fontFamily:
                '"Palatino", "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei", sans-serif',
              color: "rgb(0, 0, 0)",
            }}
          >
            <Link
              href={item.href}
              className="no-underline text-inherit hover:underline"
            >
              {item.title}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
}