"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const menuItems = [
  { name: "PORTFOLIO", path: "/#gallery" },
  { name: "SHOP", path: "/shop" },
  { name: "CONTACT", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling on body
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling on body
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure that the body style is reset
    // when the component is unmounted or re-rendered.
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const mobileMenu = (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center z-40 transition-opacity duration-300">
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} className="text-center py-4">
            <a
              href={item.path}
              className="text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <header className="flex justify-between items-center p-4 bg-white relative z-20">
      <div className="flex justify-start px-10">
        <a href="/" className="logo-link">
          <img className="h-10 w-10" src="/assets/images/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="hidden sm:flex justify-center font-bold text-xl cursor-default">
        <a href="/">EADAVTIAN</a>
      </div>
      <nav className="hidden sm:flex justify-end">
        <ul className="flex space-x-4 mr-14">
          {menuItems.map((item) => (
            <li key={item.name} className="cursor-pointer">
              {item.name === "PORTFOLIO" ? (
                <a href={item.path}>{item.name}</a>
              ) : (
                <Link
                  href={item.path}
                  className="text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {/* Мобильная кнопка меню */}
      <div
        className="sm:hidden z-50 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          // Иконка закрытия меню
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Иконка открытия меню
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>

      {isMenuOpen && mobileMenu}
    </header>
  );
}
