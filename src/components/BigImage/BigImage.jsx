import React from "react";
import bigimage from "../../images/bigImage.webp";

const BigImage = () => {
  return (
    <div>
      <div className="text-center w-3/5 mx-auto text-2xl py-32">
        The game is a turn-based battler with RPG elements (character
        progression, artifact upgrades, and crafting). Players obtain and
        upgrade wizards and use them to do battle - PVE and PVP - in the Arena.
      </div>
      <img src={bigimage} alt="" />
      <div className="text-center w-3/5 mx-auto text-2xl">
        You must lead your heroic wizards - represented by NFTs - as they fight
        for survival and uncover the magic of our newly born metaverse.
      </div>
    </div>
  );
};

export default BigImage;
