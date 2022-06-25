import React from "react";
import Logo from "../Logo/Logo";
import Cart from "../CartIcon/Cart";

const Header = () => {
  return (
    <header>
      <div>
        <nav className=" flex w-3/4 justify-between mx-auto min-h-[64px] items-center ">
          <div className="flex justify-between gap-12 items-center">
            <Logo />
            <div className="flex gap-10">
              <div> About</div>
              <div>Tournaments</div>
              <div>Buy NFTs</div>
              <div>$WZRD Token</div>
              <div>Patners</div>
            </div>
          </div>

          <Cart />
        </nav>
      </div>
    </header>
  );
};

export default Header;
