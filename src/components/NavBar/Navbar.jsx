import React from "react";
import Logo from "../Logo/Logo";
import Cart from "../CartIcon/Cart";
import { RiArrowDownSLine } from "react-icons/ri";
import "./NavBar.css";
import { navItems } from "../../arrays/navItems";

const NavBar = () => {
  return (
    <div className="w-full min-h-[100px] flex items-center fixed justify-center text-center z-50 bg-gradient-to-b from-[#000000b8]">
      <nav className=" flex justify-between mx-auto items-center  navcenter ">
        <div className="flex justify-between gap-12 items-center">
          <Logo />
          <ul className="flex gap-10">
            {navItems.map((navItem) => (
              <li key={navItem.id} className="relative menuItem">
                <a href="#" className="hover:text-[#0a9996] group">
                  {navItem.menuItem}
                  <RiArrowDownSLine className="text-2xl text-white ml-2 inline-block group-hover:text-[#0a9996]" />
                </a>
                <ul className="absolute text-white py-5 pl-5 gap-4 w-[140px] hidden submenuItem">
                  <li>
                    <a href="">{navItem.subMenuItem1}</a>
                  </li>
                  <li>
                    <a href="">{navItem.subMenuItem2}</a>
                  </li>
                  <li>
                    <a href="">{navItem.subMenuItem2}</a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <Cart />
      </nav>
    </div>
  );
};

export default NavBar;
