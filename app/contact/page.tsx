import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-4 mx-16 my-8">
      <p className="text-gray-500 text-xl font-light text-center">
        for cooperation and business proposals
      </p>
      <h1 className="text-xl font-light text-center">Contact Me</h1>{" "}
      <span className="pt-5 font-light">Name *</span>
      <input
        className="bg-gray-100 rounded-lg m-0 p-3 border border-gray-300"
        type="text"
        placeholder="Your Name"
      />
      <span className="pt-5 font-light">Email *</span>
      <input
        className="bg-gray-100 rounded-lg m-0 p-3 border border-gray-300"
        type="email"
        placeholder="Your Email"
      />
      <span className="pt-5 font-light">Message *</span>
      <textarea
        className="bg-gray-100 rounded-lg m-0 p-3 border border-gray-300"
        name="test"
        id=""
        cols="30"
        rows="10"
        style={{ resize: "none" }}
        placeholder="Your Message"
      ></textarea>
      <button className="bg-black px-4 rounded-xl py-2 bg-opacity-50 mt-4 text-white hover:bg-opacity-80 hover:text-yellow-400 transition duration-150 ease-in-out text-sm md:text-base lg:text-lg">
        Submit
      </button>
    </div>
  );
};

export default Contact;
