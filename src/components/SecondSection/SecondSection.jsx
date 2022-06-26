import React from "react";
import lady from "../../images/lady.webp";

const SecondSection = () => {
  return (
    <div className=" bg-ladybg bg-cover min-h-[100vh]">
      <div className="flex flex-col justify-center gap-6 items-center py-20">
        <p className="text-3xl">6th NFT sale round</p>
        <h2 className="text-8xl">
          <span className="text-[#07d3cf]">2,082</span>/4,000
        </h2>
        <p className="text-4xl">Arena Genesis NFTs sold</p>
      </div>
      <div className="flex w-5/6 justify-center gap-8 mx-auto">
        <div className="w-[180px] h-[180px]  border-2 border-white border-dotted rounded-full">
          <div className=" m-2 h-[160px] w-[160px]  border-2 border-dashed border-white rounded-full">
            <div className="flex flex-col justify-center items-center my-[30%] text-[#0a9996] text-lg font-semibold">
              <p>1st</p>
              <p>Sold out</p>
            </div>
          </div>
        </div>
        <div className="w-[180px] h-[180px]  border-2 border-white border-dotted rounded-full">
          <div className=" m-2 h-[160px] w-[160px]  border-2 border-dashed border-white rounded-full">
            <div className="flex flex-col justify-center items-center my-[30%] text-[#0a9996] text-lg font-semibold">
              <p>2nd</p>
              <p>Sold out</p>
            </div>
          </div>
        </div>
        <div className="w-[180px] h-[180px]  border-2 border-white border-dotted rounded-full">
          <div className=" m-2 h-[160px] w-[160px]  border-2 border-dashed border-white rounded-full">
            <div className="flex flex-col justify-center items-center my-[30%] text-[#0a9996] text-lg font-semibold">
              <p>3rd</p>
              <p>Sold out</p>
            </div>
          </div>
        </div>
        <div className="w-[180px] h-[180px]  border-2 border-white border-dotted rounded-full">
          <div className=" m-2 h-[160px] w-[160px]  border-2 border-dashed border-white rounded-full">
            <div className="flex flex-col justify-center items-center my-[30%] text-[#0a9996] text-lg font-semibold">
              <p>4th</p>
              <p>Sold out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
