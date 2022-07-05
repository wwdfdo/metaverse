import React from "react";
import investor1 from "../../images/investor1.webp";
import "./Investors.css";
import ellipse from "../../images/ellipse.svg";

const Investors = () => {
  return (
    <div className="py-40">
      <div className="relative">
        <img
          src={ellipse}
          className="absolute top-0 -mt-20 left-[10%]"
          alt=""
        />
        <div>
          <h2 className="text-center text-[4.2em] font-semibold py-20 ">
            Trusted by our investors
          </h2>
        </div>
        <div className="flex justify-center flex-wrap w-4/5 mx-auto gap-10">
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
          <div>
            <img
              src={investor1}
              className="w-[20em] investor-glow rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
