import React from "react";
import "./BuyNftTokens.css";
import buytokenimg from "../../images/image6.webp";
import { buyNftTokens } from "../../arrays/buyNftTokensArray";

const BuyNftTokens = () => {
  return (
    <div className="flex flex-col  gap-5 justify-center pb-60">
      <h2 className="text-center text-5xl pb-20">
        BUY WIZARDIA NFTS AND TOKENS
      </h2>
      <div className="flex gap-5 justify-center">
        <div className="buytokenframe border-white hover:border-[#0a9996] flex justify-between relative overflow-hidden">
          <img
            src={buytokenimg}
            className="absolute h-full left-[50%]"
            alt=""
          />
          <div className="w-[40%] flex flex-col items-center justify-around absolute gap-10 top-[10%] left-8">
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
                  <div className="flex flex-col justify-center items-center my-[30%]   text-lg font-semibold"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="nftbackgroundwrapper relative">
            <div
              className="glow-button text-center font-semibold text-lg w-[200px] right-0 mr-[45px] mx-auto absolute bottom-10 left-10 border-[1px] py-2 rounded-2xl 
            hover:text-[#0a9996]  "
            >
              Learn More
            </div>
          </div>
        </div>
        <div className="buytokenframe border-white hover:border-[#0a9996] ">
          <div className="flex flex-col gap-12 w-5/6 mx-auto justify-center items-center py-10">
            <div className="flex gap-12">
              <div>
                {" "}
                <div className="h-[200px] w-[200px] border-[2px] border-dotted rounded-[100px] border-white ">
                  <div className=" m-2 h-[180px] w-[180px]  border-2 border-dashed border-white rounded-full">
                    <div className="flex flex-col justify-center items-center my-[30%]   text-lg font-semibold"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-xl font-semibold">
                  UP TO 114% APY STAKING REWARDS
                </p>
                <p>
                  Secure your $WZRD tokens now and stake with us. Staking pools
                  are strictly limited, so don't miss out.
                </p>
              </div>
            </div>
            <div className="flex gap-16">
              <div className="w-[220px] border-2 text-center py-5 rounded-full glow-button font-semibold">
                Buy at gate.io
              </div>
              <div className="w-[220px] border-2 text-center py-5 rounded-full glow-button font-semibold">
                Buy at PancakeSwap
              </div>
            </div>
            <div>or</div>
            <div className="w-[220px] border-2 text-center py-4 rounded-full glow-button font-semibold">
              Stake tokens to earn more
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6 w-full">
        {buyNftTokens.map((buyNftToken) => (
          <div
            key={buyNftToken.id}
            className="nftcardborder2 border-white hover:border-[#0a9996] flex flex-col items-center relative group"
          >
            <img src={buyNftToken.buynfttokenImg} className="w-[80%]" alt="" />
            <div className="flex flex-col items-center absolute gap-6 bottom-8">
              <img src={buyNftToken.buyNftIconImg} alt="" />
              <h2 className="text-2xl text-center px-20">
                {buyNftToken.buynfttokenTitle}
              </h2>
              <p className="text-center text-xl font-semibold">
                {buyNftToken.buynfttokenPrice}
              </p>
              <div className="w-[80%] border-2 border-white glow-button rounded-full py-3 text-center font-semibold text-xl hidden group-hover:block hover:text-[#0a9996]">
                button
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyNftTokens;
