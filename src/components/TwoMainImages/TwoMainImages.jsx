import React from "react";
import image7 from "../../images/img7.webp";
import image8 from "../../images/img8.webp";
import "./TwoMainImages.css";

const TwoMainImages = () => {
  return (
    <div className="flex gap-6 justify-center py-40">
      <div className="relative border-2 border-red-300 rounded-3xl">
        <img src={image7} alt="" />
        <p className="text-center text-3xl font-semibold bg-[#0a9996]  rounded-2xl py-4 mx-auto buttonCenter">
          PPV
        </p>
      </div>
      <div className="relative border-2 border-red-300 rounded-3xl">
        <img src={image8} alt="" />
        <p className="text-center text-3xl font-semibold bg-[#0a9996] w-[150px] rounded-2xl py-4 mx-auto buttonCenter">
          PPV
        </p>
      </div>
    </div>
  );
};

export default TwoMainImages;
