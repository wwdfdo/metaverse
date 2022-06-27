import React from "react";
import NavBar from "../NavBar/Navbar";
import "./Header.css";
import desktoplogo from "../../images/logo-big.webp";
import { BsFillPlayFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div>
        <NavBar />
        <div className="w-3/5 mx-auto flex flex-col justify-center items-center py-20">
          <img src={desktoplogo} className="w-[300px]" alt="" />
          <h1 className="text-center tracking-wide leading-snug">
            METAVERSE P2E GAME
            <br />
            WITH MAGIC REWARDS
          </h1>
          <p className="py-10 text-4xl">Buy Arena Genesis NFTs now</p>
          <div className="flex gap-5 justify-center items-center w-3/5">
            <div className=" border-2 glow-button border-white px-8 py-3 w-1/3 text-center rounded-3xl cursor-pointer font-semibold hover:text-[#55e2df]">
              Buy Arena NFTs
            </div>
            <div className=" border-2 border-white px-8 py-3 w-1/3 text-center rounded-3xl cursor-pointer font-semibold hover:text-[#55e2df]">
              Play tailer{" "}
              <span>
                {" "}
                <BsFillPlayFill className="inline-block text-2xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
