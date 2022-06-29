import React from "react";
import petro1 from "../../images/1-legendary-petro.webp";
import petro2 from "../../images/2-epic-petro.webp";
import petro3 from "../../images/7-rare-petro.webp";
import borderCircle1 from "../../images/prize-legendary-pointer1.svg";
import borderCircle2 from "../../images/prize-epic-pointer2.svg";
import borderCircle3 from "../../images/prize-rare-pointe3.svg";
import "./NftCards.css";

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
        <div className="nftcardborder border-[#ffff00ba]">
          <div className="text-center bg-[#f1f63b57] w-[120px] mx-auto mt-5 p-1 rounded-3xl">
            <p>LEGENDARY</p>
          </div>
          <img src={borderCircle1} className="nftcards" alt="" />
          <img src={petro1} className="nftcards" alt="" />
          <div className="cardText">
            <p>Worth $7777 each</p>
            <h2 className="text-2xl">1 Legendary Petro</h2>
          </div>
        </div>
        <div className="nftcardborder border-[#8d4aaa]">
          <div className="text-center bg-[#8d4aaa5e] w-[120px] mx-auto mt-5 p-1 rounded-3xl">
            <p>LEGENDARY</p>
          </div>
          <img src={borderCircle2} className="nftcards2" alt="" />
          <img src={petro2} className="nftcards2" alt="" />
          <div className="cardText">
            <p>Worth $777 each</p>
            <h2 className="text-2xl">2 Epic Petro</h2>
          </div>
        </div>
        <div className="nftcardborder border-[#315ea5]">
          <div className="text-center bg-[#315ea563] w-[120px] mx-auto mt-5 p-1 rounded-3xl">
            <p>LEGENDARY</p>
          </div>
          <img src={borderCircle3} className="nftcards3" alt="" />
          <img src={petro3} className="nftcards3" alt="" />
          <div className="cardText">
            <p>Worth $77 each</p>
            <h2 className="text-2xl">7 rare Petro</h2>
          </div>
        </div>
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
