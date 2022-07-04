import React from "react";
import "./SaleCircles.css";

import { circles } from "../../arrays/circles";

const SaleCircles = () => {
  return (
    <div className="flex w-5/6 justify-center gap-8 mx-auto">
      {circles.map((circle) => (
        <div key={circle.id} className="circle1">
          <div className=" m-2 h-[160px] w-[160px]  border-2 border-dashed border-white rounded-full">
            <div className="flex flex-col justify-center items-center my-[30%] text-[#0a9996] text-lg font-semibold">
              <p>{circle.text1}</p>
              <p>{circle.text2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SaleCircles;
