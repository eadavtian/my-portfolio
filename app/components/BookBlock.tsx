import React from "react";

const BookBlock = () => {
  return (
    <div className="m-4 md:m-16 p-8 bg-yellow-50 shadow-md">
      <div className="grid md:grid-cols-2 gap-4 h-full">
        {/* Текстовый блок с Flexbox */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              Lightroom Mobile Guide
            </h1>
            <p className="text-gray-700 mt-4">
              Очень длинное описание принта и детали заказа, которое может
              занимать много места и тестировать поведение грида при разных
              условиях.
            </p>
          </div>
          <button className="btn bg-yellow-100 py-2 px-4 rounded-full shadow-md mt-4 self-start font-semibold hover:bg-yellow-200 transition duration-150 ease-in-out">
            Purchase the Book *
          </button>
        </div>
        {/* Блок с изображением */}
        <div className="bg-white p-4 shadow-lg flex justify-center items-center">
          <img
            src="/assets/images/book.JPEG"
            alt="Print"
            className="object-contain h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BookBlock;
