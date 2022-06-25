import React from "react";
import Logo from "../Logo/Logo";
import Cart from "../CartIcon/Cart";
import { RiArrowDownSLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <nav className=" flex w-3/4 justify-between mx-auto min-h-[64px] items-center ">
      <div className="flex justify-between gap-12 items-center">
        <Logo />
        <ul className="flex gap-10">
          <li className="relative menuItem">
            <a href="#">
              About{" "}
              <RiArrowDownSLine className="text-2xl text-white ml-2 inline-block" />
            </a>
            <ul className="absolute text-white py-5 pl-5 gap-4 w-[140px] hidden submenuItem">
              <li>
                <a href="">item one</a>
              </li>
              <li>
                <a href="">item two</a>
              </li>
              <li>
                <a href="">item Three</a>
              </li>
            </ul>
          </li>
          <li className="relative menuItem">
            <a href="#">
              Tournaments
              <RiArrowDownSLine className="text-2xl text-white ml-2 inline-block" />
            </a>
            <ul className="absolute  text-white py-5 pl-5 gap-4 w-[140px] hidden submenuItem">
              <li>
                <a href="">item one</a>
              </li>
              <li>
                <a href="">item two</a>
              </li>
              <li>
                <a href="">item Three</a>
              </li>
            </ul>
          </li>
          <li className="relative menuItem">
            <a href="#">
              Buy NFTs
              <RiArrowDownSLine className="text-2xl text-white ml-2 inline-block" />
            </a>
            <ul className="absolute text-white py-5 pl-5 gap-4 w-[140px] hidden submenuItem">
              <li>
                <a href="">item one</a>
              </li>
              <li>
                <a href="">item two</a>
              </li>
              <li>
                <a href="">item Three</a>
              </li>
            </ul>
          </li>
          <li className="relative menuItem">
            <a href="#">
              $WZRD Token
              <RiArrowDownSLine className="text-2xl text-white ml-2 inline-block" />
            </a>
            <ul className="absolute  text-white py-5 pl-5 gap-4 w-[140px] hidden submenuItem">
              <li>
                <a href="">item one</a>
              </li>
              <li>
                <a href="">item two</a>
              </li>
              <li>
                <a href="">item Three</a>
              </li>
            </ul>
          </li>
          <li className="relative menuItem">
            <a href="#">
              Patners
              <RiArrowDownSLine className="text-2xl text-white ml-2 inline-block" />
            </a>
            <ul className="absolute text-white py-5 pl-5 gap-4 w-[140px] hidden submenuItem">
              <li>
                <a href="">item one</a>
              </li>
              <li>
                <a href="">item two</a>
              </li>
              <li>
                <a href="">item Three</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <Cart />
    </nav>
  );
};

export default NavBar;
