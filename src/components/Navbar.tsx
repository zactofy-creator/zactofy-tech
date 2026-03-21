"use client";
import Link from "next/link";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = ["Services","Projects","About","Contact","Careers",];

  return (
    <div className="sticky top-0 z-50 shadow-sm bg-[#fcfdf2]">

      {/* TOP BAR */}
      <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" >
        <div className="logo w-40">
          <img className="w-full object-cover" src="/logo.png" alt="Website development agency dashboard" />
        </div>
        </Link>

        {/* RIGHT */}
        <div className="flex items-center">

          {/* HAMBURGER */}
          <span
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <IoMenuSharp className="text-4xl text-gray-900" />
          </span>

          {/* DESKTOP MENU */}
          {menu.map((item) => (
            <Link
              href={`/${item.toLowerCase()}`}
              key={item}
              className="hidden md:flex mx-4 text-2xl font-semibold  hover:bg-[#4b5ae4]  p-2 rounded-xl text-gray-700 hover:text-white transition-all duration-100 t"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ✅ MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4 px-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-gray-900">
          {menu.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-lg font-semibold border-b pb-2"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}