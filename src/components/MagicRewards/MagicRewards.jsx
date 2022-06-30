import React from "react";
import magic_rewards_img1 from "../../images/magic_rewards_img1.webp";
import magic_rewards_img2 from "../../images/magic_rewards_img2.webp";
// import magic_rewards_img3 from "../../images/magic_rewards_img3.webp";
import magic_rewards_img4 from "../../images/magic_rewards_img4.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const MagicRewards = () => {
  return (
    <div className="w-4/5 mx-auto">
      <h2 className="w-[500px] text-6xl leading-normal">
        METAVERSE P2E GAME WITH MAGIC REWARDS
      </h2>
      <div className="flex flex-col gap-20 mt-10">
        <div className="flex justify-between gap-40">
          <div className="flex flex-col gap-5 w-1/2">
            <p className="text-2xl">
              Wizardia will have 7 early investor sales rounds. But the best
              time to invest is now.
            </p>
            <div className="flex gap-5 items-center">
              <div className="glow-button border-2 border-white px-4 py-3 text-md rounded-3xl hover:text-[#0a9996] text-white font-semibold">
                Buy Arena Genesis NFT now
              </div>
              <div className="flex  items-center hover:text-white text-[#0a9996]">
                <div className="text-xl font-semibold ">Calculate revenue</div>
                <div>
                  <MdOutlineKeyboardArrowRight className="text-3xl mt-1 " />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-20 w-[33em] items-center">
            <div className=" border-2 border-white p-12 rounded-full glow-button w-2/3">
              <img src={magic_rewards_img1} className="w-[200px]" alt="" />
            </div>
            <div>
              <p className="font-semibold text-xl">The first ones earn more</p>
              <p>
                The earlier you purchase Arena NFTs, the more passive income
                will be generated over time.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-center w-[33em] mx-auto items-center">
          <div className=" border-2 border-white p-12 rounded-full glow-button w-2/3">
            <img src={magic_rewards_img2} className="w-[200px]" alt="" />
          </div>
          <div>
            <p className="font-semibold text-xl">The first ones pay less</p>
            <p>
              Early investors will receive Arena Genesis NFTs at a reduced
              price. The later rounds of the sale will have a higher price.
            </p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-20 w-[33em]  items-center ">
            <div className=" border-2 border-white p-12 rounded-full glow-button w-2/3">
              <img src={magic_rewards_img2} className="w-[200px] " alt="" />
            </div>
            <div>
              <p className="font-semibold text-xl">
                Action at Arena? Profit to your wallet.
              </p>
              <p>
                Get ready for passive income from all battles and transactions
                at the Arena
              </p>
            </div>
          </div>
          <div className="flex gap-20 w-[33em] items-center">
            <div className=" border-2 border-white p-12  rounded-full glow-button w-2/3">
              <img src={magic_rewards_img4} className="w-[200px]" alt="" />
            </div>
            <div>
              <p className="font-semibold text-xl">
                Action at Arena? Profit to your wallet.
              </p>
              <p>
                Get ready for passive income from all battles and transactions
                at the Arena
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicRewards;
