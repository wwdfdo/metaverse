import React from "react";

import headerbg from "../../images/headerbg.webp";

const HeaderBg = () => {
  return (
    <div>
      <img src={headerbg} className="absolute z-[-1]  w-full" alt="" />
    </div>
  );
};

export default HeaderBg;
