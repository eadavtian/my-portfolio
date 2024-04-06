"use client";

// pages/book.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookSession = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [sessionType, setSessionType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь логика отправки данных на сервер или обработки формы
    alert(`Бронирование выполнено: ${sessionType} на ${startDate}`);
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-2xl font-semibold mb-4">Book a Photoshoot</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={sessionType}
          onChange={(e) => setSessionType(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">What kind of photography do you want?</option>
          <option value="portrait">Creative photography / Fine-Art</option>
          <option value="family">Portrait photography</option>
          <option value="wedding">Family photography</option>
          <option value="branding">Wedding photography</option>
          <option value="branding">Personal brand photography</option>
          <option value="branding">Commercial photography</option>
          <option value="branding">Car photography</option>
        </select>

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="block w-full p-2 border border-gray-300 rounded-md cursor-pointer"
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
        />

        <input
          type="text"
          placeholder="Your Name"
          className="block w-full p-2 border border-gray-300 rounded-md"
          required
        />

        <input
          type="email"
          placeholder="Your email"
          className="block w-full p-2 border border-gray-300 rounded-md"
          required
        />

        <textarea
          placeholder="Your wishes"
          className="block w-full p-2 border border-gray-300 rounded-md"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-opacity-80 transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookSession;
