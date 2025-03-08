import React from "react";
import * as images from "../assets";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[url('../assets/bg1.jpg')]. text-white p-8">
      {/* Cột trái - Ảnh */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={images.earth} // Thay bằng đường dẫn ảnh thực tế
          alt="Earth"
          className="w-full h-auto max-h-[500px] object-cover opacity-80 rounded-lg  
               hover:scale-110 hover:rotate-360 transition-all duration-[4000ms] ease-in-out"  />
      </div>

      {/* Cột phải - Form */}
      <div className="w-full md:w-1/2 bg-white text-gray-900 shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          {/* Tên */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              type="text"
              placeholder="What's your good name?"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="What's your web address?"
            />
          </div>

          {/* Tin nhắn */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              rows="4"
              placeholder="What you want to say?"
            />
          </div>

          {/* Nút Gửi */}
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
