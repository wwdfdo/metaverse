import React from "react";
import SaleCircles from "../SaleCircles/SaleCircles";
import { IoIosArrowForward } from "react-icons/io";

import NftCards from "../NftCards/NftCards";
import Tournaments from "../Tournaments/Tournaments";
// import BuyNftTokens from "../BuyNftTokens/BuyNftTokens";

const SecondSection = () => {
  return (
    <div className=" bg-ladybg bg-cover  min-h-[100vh]">
      <div>
        <div className="flex flex-col justify-center gap-6 items-center py-20">
          <p className="text-3xl">6th NFT sale round</p>
          <h2 className="text-8xl">
            <span className="text-[#07d3cf]">2,082</span>/4,000
          </h2>
          <p className="text-4xl">Arena Genesis NFTs sold</p>
        </div>
        <SaleCircles />
        <div className="text-[#0a9996]">
          <p className="text-center py-10 text-2xl">
            Buy arena NFTs{" "}
            <span>
              <IoIosArrowForward className="inline-block" />
            </span>
          </p>
        </div>
      </div>
      <div>
        <NftCards />
        <Tournaments />
        {/* <BuyNftTokens /> */}
      </div>
    </div>
  );
};

export default SecondSection;
