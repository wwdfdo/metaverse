import React from "react";

import { IoIosArrowForward } from "react-icons/io";

const PassiveRevenue = () => {
  return (
    <div className="w-3/5 mx-auto py-20">
      <h2 className="text-center text-[4.8em] leading-snug">
        BUY ARENA GENESIS NFTS NOW AND GENERATE PASSIVE REVENUE
      </h2>
      <div className="flex justify-center gap-8 items-center mt-20">
        <div className="py-4 px-10 border-2 border-white glow-button rounded-full hover:text-[#0a9996] text-lg font-semibold">
          Buy Arena NFTs
        </div>
        <div className="flex gap-2 items-center hover:text-[#0a9996]">
          <p className="text-xl font-semibold ">How Arena Founders earn</p>
          <div>
            <IoIosArrowForward className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassiveRevenue;
