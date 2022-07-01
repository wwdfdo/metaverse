import React from "react";
import elephantMonster from "../../images/elephentMonster.webp";
import tommyMonster from "../../images/tommyMonster.webp";

const Tournaments = () => {
  return (
    <div className="py-20">
      <div className="relative bg-tournamentsBg bg-no-repeat max-w-[1200px] mx-auto h-[100vh]">
        <div className="flex flex-col items-center pt-10">
          <p>WIZARDIA</p>
          <h2>TOURNAMENTS</h2>
          <p className="py-8">
            Wizardia Tournaments will be launched soon! Battle with <br /> your
            Wizard NFTs and share a 100000 $WZRD prize pool{" "}
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
        <div className="w-4/5  bg-[#542f0d] flex flex-col justify-center  rounded-3xl mx-auto mt-20 z-50 ">
          <div className="flex flex-col justify-center items-center py-10">
            <div className="flex justify-center gap-6 items-center mx-auto  w-full">
              <div>
                Notify me when <br /> Tournaments launch:
              </div>
              <div className="w-3/5 relative flex justify-between border-2 border-white py-0 px-0 rounded-full">
                <input
                  type="text"
                  className="py-5 px-4 text-xl rounded-full border-none w-4/5 text-white bg-transparent outline-none"
                ></input>
                <input
                  type="submit"
                  className="rounded-full text-white font-semibold text-xl glow-button border-l-[1px] border-l-white px-6 "
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
  );
};

export default Tournaments;
