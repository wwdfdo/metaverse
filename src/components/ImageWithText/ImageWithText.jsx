import React from "react";
import Image10 from "../../images/img10.webp";

const ImageWithText = () => {
  return (
    <div className="flex justify-center w-4/5 mx-auto gap-10 py-32">
      <div className="w-1/3 flex flex-col gap-10 justify-center">
        <div className="text-2xl">
          You can level up your wizard NFTs and boost their battle capabilities
          with successful gameplay. Then sell, trade or rent them out in the
          upcoming Wizardia NFT marketplace.
        </div>
        <div className="w-1/2 text-center py-3 rounded-3xl text-xl font-semibold border-2 border-white glow-button">
          {" "}
          Buy NFTs now
        </div>
      </div>
      <div className="border-[1px] border-white rounded-2xl">
        <img src={Image10} alt="" />
      </div>
    </div>
  );
};

export default ImageWithText;
