import React from "react";
import investor1 from "../../images/investor1.webp";
import "./Investors.css";

const Investors = () => {
  return (
    <div>
      <div>
        <h2 className="text-center ">Trusted by our investors</h2>
      </div>
      <div className="flex justify-center w-4/5 mx-auto">
        <div className="dotted-spaced-right">
          <img src={investor1} className="border-r-2 border-white" alt="" />
        </div>
        <div>
          <img src={investor1} alt="" />
        </div>
        <div>
          <img src={investor1} alt="" />
        </div>
        <div>
          <img src={investor1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Investors;
