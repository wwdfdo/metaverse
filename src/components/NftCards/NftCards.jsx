import React from "react";
import "./NftCards.css";
import { nftCards } from "../../arrays/nftCards";

const NftCards = () => {
  return (
    <div className="flex flex-col items-center mx-auto gap-6">
      <p className="text-4xl">BUY ARENA NFTS</p>
      <h2 className="text-7xl">AND WIN</h2>
      <div className="flex gap-6 mt-10">
        <div className="w-[280px] py-6 ">
          <p className="text-center text-xl leading-[40px]">
            Each Arena Genesis NFT from rounds 6 & 7 gives you a bonus chance to
            win exclusive NFT prizes.
          </p>
          <div className="border-2 border-white text-center w-3/4 mx-auto mt-10 py-4 px-3 rounded-3xl glow-button font-semibold">
            Buy Arena NFTs to win
          </div>
        </div>
        {nftCards.map((nftcard) => (
          <div
            key={nftcard.id}
            className={`${nftcard.nftCardBoderColor} nftcardborder`}
          >
            <div
              className={`${nftcard.nftCardTitleBg} text-center w-[120px] mx-auto mt-5 p-1 rounded-3xl`}
            >
              <p>LEGENDARY</p>
            </div>
            <img src={nftcard.circleImg} className="nftcards" alt="" />
            <img src={nftcard.profileImg} className="nftcards" alt="" />
            <div className="cardText">
              <p>{nftcard.nftCardText1}</p>
              <h2 className="text-2xl">{nftcard.nftCardText2}</h2>
            </div>
          </div>
        ))}

        <div className="nftcardborder">
          <div className="text-center mt-20">
            <p className="py-3 text-2xl font-semibold glow-button w-[60px] h-[60px] mx-auto rounded-full border-2 border-white">
              10
            </p>
            <p className="mt-5">Winners</p>
          </div>
          <div className="text-center w-2/3 mx-auto absolute left-[17%] bottom-10">
            <p>10 prize winners will be announced at the end of each round.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCards;
