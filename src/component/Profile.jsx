import React from "react";
import ImageProfile from "../assets/goku.png";

const Profile = () => {
  return (
    <div className="flex justify-center items-center   ">
      <div className="grid md:grid-cols-2 gap-10 ">
        {/* Phần giới thiệu */}
        <div className="flex flex-col justify-center">
          <h2 className="text-7xl font-bold  leading-tight">
            Hi, I'm a <p className ='text-blue-500'>Web Developer</p> 
          </h2>
          <p className="text-gray-600 mt-4">
            Tôi có thể viết được nhiều ngôn ngữ lập trình và có khả năng thích nghi nhanh.
          </p>
          <div className="mt-6 flex justify-center  gap-4 text-center">
            <button className="  bg-indigo-500 hover:bg-fuchsia-500 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300">
              click me!
            </button>
          </div>
        </div>

        {/* Phần hình ảnh */}
        <div className="flex flex-col items-center">
          {/* <div className="flex mt-4 gap-4">
            <img src={ImageProfile} alt="Project 1" className="w-24 h-24 rounded-lg shadow" />
            <img src={ImageProfile} alt="Project 2" className="w-24 h-24 rounded-lg shadow" />
          </div> */}
          <img src={ImageProfile} alt="Profile" className="w-90" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
