"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/types/hasgg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex h-20 items-center bg-transparent px-10 text-[15px]">
      {/* Brand */}
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <span className="iconlogo">
            <Link href="/">
              <Image
                src="https://www.hasgg.com/wp-content/themes/wndt-master/static/images/hasgg.png"
                alt="聚集工具"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </Link>
          </span>
        </div>
        <div className="flex items-center">
          <Link href="/">
            <span className="text-[rgb(51,51,51)] no-underline">聚集工具</span>
          </Link>
        </div>
        {/* Switch button */}
        <div className="ml-4">
          <Link href="https://niu.156669.com/static/img/jft5.webp">
            <Image
              src="https://niu.156669.com/static/img/jft5.webp"
              alt="Switch"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </Link>
        </div>
        {/* Mobile burger */}
        <button
          className="wnd-side-burger navbar-burger ml-4 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="mb-1 block h-0.5 w-5 bg-[rgb(51,51,51)]" />
          <span className="mb-1 block h-0.5 w-5 bg-[rgb(51,51,51)]" />
          <span className="block h-0.5 w-5 bg-[rgb(51,51,51)]" />
        </button>
      </div>

      {/* Menu */}
      <div
        className={`navbar-menu absolute left-0 top-full w-full flex-col bg-white shadow-lg md:relative md:flex md:w-auto md:flex-row md:bg-transparent md:shadow-none ${isMenuOpen ? "flex" : "hidden"}`}
      >
        <div className="navbar-start flex flex-col md:flex-row">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap px-4 py-2 text-[rgb(51,51,51)] no-underline hover:underline md:py-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="navbar-end flex flex-col border-t border-gray-200 md:flex-row md:border-0">
          <Link
            href="#search"
            className="flex items-center gap-1 px-4 py-2 text-[rgb(51,51,51)] md:py-0"
          >
            <span>🔍</span>
            <span>搜索</span>
          </Link>
          <Link
            href="#login"
            className="flex items-center gap-1 px-4 py-2 text-[rgb(51,51,51)] md:py-0"
          >
            <span>👤</span>
            <span>登錄 / 註冊</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}