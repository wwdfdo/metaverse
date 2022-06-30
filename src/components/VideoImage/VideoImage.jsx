import React from "react";
import videoImg from "../../images/videoImage.webp";
import { FaPlay } from "react-icons/fa";
import "./VideoImage.css";

const VideoImage = () => {
  return (
    <div>
      <div className="relative">
        <img src={videoImg} className="w-4/5 rounded-[40px] mx-auto" alt="" />
        <div className="absolute center-play-button p-8 rounded-full border-2 border-white glow-button cursor-pointer">
          <FaPlay className="text-6xl" />
        </div>
      </div>
    </div>
  );
};

export default VideoImage;
