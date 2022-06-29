import React from "react";
import "./BuyNftTokens.css";
import buytokenimg from "../../images/image6.webp";

const BuyNftTokens = () => {
  return (
    <div className="flex flex-col  gap-5 justify-center">
      <div className="flex gap-5 justify-center">
        <div className="buytokenframe border-red-400 flex justify-between">
          <div className="w-[40%] flex flex-col items-center justify-around">
            <div className="w-2/3">
              <p>Arena Genesis NFTs</p>
              <p>
                Earn automatic staking rewards before the Arena launch. Earn
                passive royalties from every battle transaction after the Arena
                launch.
              </p>
            </div>
            <div>
              <div className="h-[200px] w-[200px] border-[2px] border-dotted rounded-[100px] border-white ">
                <div className=" m-2 h-[180px] w-[180px]  border-2 border-dashed border-white rounded-full">
                  <div className="flex flex-col justify-center items-center my-[30%] text-[#0a9996] text-lg font-semibold"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="nftbackgroundwrapper">
            <img src={buytokenimg} className="nftbackground" alt="" />
            <div
              className="glow-button text-center font-semibold text-lg w-2/3 mx-auto absolute bottom-10 left-10 border-[1px] py-2 rounded-2xl 
            hover:text-[#0a9996]  "
            >
              Learn More
            </div>
          </div>
        </div>
        <div className="buytokenframe border-red-400"></div>
      </div>
      <div></div>
    </div>
  );
};

export default BuyNftTokens;
