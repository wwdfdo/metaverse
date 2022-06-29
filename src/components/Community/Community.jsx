import React from "react";
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div>
        <h2 className="text-center w-[15em] text-5xl leading-normal mx-auto">
          FOR THE BEST INVESTMENT OPPORTUNITIES, JOIN OUR COMMUNITY
        </h2>
      </div>
      <div className="flex justify-center gap-8 mt-20">
        <div className="flex flex-col justify-center gap-10 items-center border-r-2 border-dotted px-20">
          <div className="flex items-center justify-center gap-4">
            <div className="w-[50px] h-[50px] rounded-full border-2 border-white glow-button flex justify-center items-center">
              <FaDiscord className="text-2xl" />
            </div>
            <span className="text-white text-2xl">Discord</span>
          </div>
          <p className="text-center text-4xl text-green-500">71585</p>
          <div className="w-full border-2 border-white rounded-3xl text-center py-1 text-xl">
            join
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center border-r-2 border-dotted px-20">
          <div className="flex items-center justify-center gap-4">
            <div className="w-[50px] h-[50px] rounded-full border-2 border-white glow-button flex justify-center items-center">
              <AiFillInstagram className="text-2xl" />
            </div>
            <span className="text-white text-2xl">Discord</span>
          </div>
          <p className="text-center text-4xl text-green-500">71585</p>
          <div className="w-full border-2 border-white rounded-3xl text-center py-1 text-xl">
            join
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center border-r-2 border-dotted px-20">
          <div className="flex items-center justify-center gap-4">
            <div className="w-[50px] h-[50px] rounded-full border-2 border-white glow-button flex justify-center items-center">
              <FaFacebookF className="text-2xl" />
            </div>
            <span className="text-white text-2xl">Discord</span>
          </div>
          <p className="text-center text-4xl text-green-500">71585</p>
          <div className="w-full border-2 border-white rounded-3xl text-center py-1 text-xl">
            join
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center border-r-2 border-dotted px-20">
          <div className="flex items-center justify-center gap-4">
            <div className="w-[50px] h-[50px] rounded-full border-2 border-white glow-button flex justify-center items-center">
              <FaTwitter className="text-2xl" />
            </div>
            <span className="text-white text-2xl">Discord</span>
          </div>
          <p className="text-center text-4xl text-green-500">71585</p>
          <div className="w-full border-2 border-white rounded-3xl text-center py-1 text-xl">
            join
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center px-20">
          <div className="flex items-center justify-center gap-4">
            <div className="w-[50px] h-[50px] rounded-full border-2 border-white glow-button flex justify-center items-center">
              <FaLinkedinIn className="text-2xl" />
            </div>
            <span className="text-white text-2xl">Discord</span>
          </div>
          <p className="text-center text-4xl text-green-500">71585</p>
          <div className="w-full border-2 border-white rounded-3xl text-center py-1 text-xl">
            join
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <p className="text-2xl">Avoid scam, check official Wizardia links</p>
        <div className="w-[10em] border-2 border-white text-center glow-button hover:text-[#0a9996] rounded-3xl py-3 text-xl">
          Verify
        </div>
      </div>
    </div>
  );
};

export default Community;
