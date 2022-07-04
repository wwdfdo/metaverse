import React from "react";
import tomas from "../../images/tomas.png";
import "./Advisors.css";
import { advisorsArray } from "../../arrays/advisorsArray";

const Advisors = () => {
  return (
    <div>
      <h2 className="text-center text-8xl font-semibold pb-32">Our advisors</h2>
      <div className="flex justify-center gap-16 w-4/5 mx-auto flex-wrap pt-32 relative ">
        {advisorsArray.map((advisor) => (
          <div
            key={advisor.id}
            className="flex flex-col items-center border-2 border-white w-[300px] rounded-3xl gap-12 mb-28 relative"
          >
            <span className="w-[1.2em] h-[1.2em] rounded-full glow-button absolute top-0 left-[3.5em] -mt-10"></span>
            <span className="w-[0.7em] h-[0.7em] rounded-full glow-button absolute top-0 left-[5.5em] -mt-20"></span>
            <span className="w-[0.5em] h-[0.5em] rounded-full glow-button absolute top-0 right-32 -mt-32"></span>
            <img
              src={advisor.advisorImg}
              className="w-[180px] h-[180px] rounded-full border-2 border-white -mt-[90px] bg-black"
              alt=""
            />

            <div className="flex flex-col gap-6 items-center pb-10">
              <div className="flex flex-col items-center gap-2">
                <p className="text-3xl text-center font-semibold">
                  {advisor.advisorName}
                </p>
                <p className="text-lg text-center font-semibold">
                  {advisor.advisorJob}
                </p>
              </div>
              <div className="flex gap-3 dotted-spaced2 pt-8">
                <p className="text-2xl text-[#0a9996] border-r-2 border-white pr-3">
                  {advisor.advisorLink1}
                </p>
                <p className="text-2xl text-[#0a9996]">
                  {advisor.advisorLink2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advisors;
