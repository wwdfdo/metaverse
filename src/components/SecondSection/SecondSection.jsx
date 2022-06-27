import React from "react";
import SaleCircles from "../SaleCircles/SaleCircles";
import { IoIosArrowForward } from "react-icons/io";
import tournaments from "../../images/tournaments.png";
import elephantMonster from "../../images/elephentMonster.webp";
import tommyMonster from "../../images/tommyMonster.webp";

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
        <div className="flex flex-col items-center mx-auto gap-6">
          <p className="text-4xl">BUY ARENA NFTS</p>
          <h2 className="text-7xl">AND WIN</h2>
        </div>
        <div className="py-20">
          <div className="relative bg-tournamentsBg bg-no-repeat max-w-[1200px] mx-auto h-[100vh]">
            <div className="flex flex-col items-center pt-10">
              <p>WIZARDIA</p>
              <h2>TOURNAMENTS</h2>
              <p className="py-8">
                Wizardia Tournaments will be launched soon! Battle with <br />{" "}
                your Wizard NFTs and share a 100000 $WZRD prize pool{" "}
              </p>
              <div className=" border-2 glow-button border-white px-8 py-3 w-1/6 text-center rounded-3xl cursor-pointer font-semibold hover:text-[#55e2df]">
                Learn more
              </div>
            </div>

            <img
              src={elephantMonster}
              className="absolute top-[20%] left-0 -ml-[12%]"
              alt=""
            />
            <img
              src={tommyMonster}
              className="absolute top-[20%] right-0 -mr-[12%]"
              alt=""
            />
            <div className="w-4/5  bg-[#88511f6e] flex flex-col justify-center  rounded-3xl mx-auto mt-20 z-50 ">
              <div className="flex flex-col justify-center items-center py-10">
                <div className="flex justify-center gap-6 items-center mx-auto  w-full">
                  <div>
                    Notify me when <br /> Tournaments launch:
                  </div>
                  <div className="w-3/5 relative flex justify-between bg-red-300 py-1 px-3 rounded-3xl">
                    <input
                      type="text"
                      className="py-3 rounded-3xl border-none w-4/5 text-black bg-transparent"
                    ></input>
                    <input
                      type="submit"
                      className="rounded-3xl text-black bg-yellow-200 px-5 "
                    ></input>
                  </div>
                </div>
                <p className="text-center mt-6">
                  By signing up you agree with Privacy policy and Terms and
                  conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
