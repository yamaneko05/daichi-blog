"use client";

import { LucideMenu, LucideX } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 bg-white bg-opacity-75 backdrop-blur dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between p-3">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Daichi Blog
          </span>
        </Link>
        <button
          onClick={toggleIsOpen}
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-1 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          {isOpen ? <LucideX size={32} /> : <LucideMenu size={32} />}
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}>
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <Link
                href="/"
                className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 dark:text-white md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
