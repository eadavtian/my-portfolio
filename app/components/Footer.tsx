import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Контактная информация */}
        <div className="flex flex-col md:flex-row items-center">
          <span className="mr-4">Contact info</span>
          <a
            href="mailto:email@example.com"
            className="mr-4 hover:text-gray-300"
          >
            eadavtyan@gmail.com
          </a>
          <a href="tel:+1234567890" className="hover:text-gray-300">
            +1234567890
          </a>
        </div>
        {/* Ссылки на социальные сети */}
        <div className="flex mt-4 md:mt-0">
          <a href="#" className="mr-4 hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 2h-3a1 1 0 00-1 1v3a1 1 0 001 1h3v3h-3a5 5 0 00-5 5v3h-3v-3a5 5 0 00-5-5H2V6h3V3a1 1 0 011-1h3a1 1 0 011 1v3h3a1 1 0 001-1V3a1 1 0 011-1h3z"
              />
            </svg>
          </a>
          <a href="#" className="mr-4 hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7.5 3.5a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6zM7 16a4 4 0 118 0M6 20a9 9 0 1112 0v-1a9 9 0 10-12 1z"
              />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M21 16V8a2 2 0 00-2-2h-4l-2-2h-2l-2 2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2zM5 18h14a2 2 0 002-2v-1a2 2 0 00-2-2H5a2 2 0 00-2 2v1a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Копирайт */}
      <div className="text-center text-gray-400 text-sm mt-4">
        © {new Date().getFullYear()} Edgar Davtian Photography. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
