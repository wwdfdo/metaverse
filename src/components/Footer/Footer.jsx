import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FooterLinkArray } from "../../arrays/FoolterLinksArray";
import footerlogo from "../../images/logo-big.webp";

const Footer = () => {
  return (
    <div className="w-4/5 mx-auto">
      <hr className="dashed" />
      <div className="mt-10 pb-10">
        <div className="flex justify-between w-full">
          <img src={footerlogo} className="w-[150px]" alt="" />
          <div className="flex items-center text-2xl gap-6">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn />
            <FaDiscord />
          </div>
        </div>
        <div className="flex justify-start gap-20 py-10">
          <div className="flex flex-col justify-between gap-8 w-1/4">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold">
                Don't miss our latest news
              </p>
              <div className="flex justify-between border-2 border-white py-0 px-0 rounded-3xl">
                <input
                  type="text"
                  className="py-2 px-4 text-xl rounded-3xl border-none w-4/5 text-white bg-transparent outline-none"
                ></input>
                <input
                  type="submit"
                  className="rounded-3xl text-white font-semibold text-xl glow-button border-l-[1px] border-l-white px-6 m-1 "
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold">Disclaimer</p>
              <p className="text-lg">
                Nothing in this website constitutes financial advice, and it is
                always recommended to consult a qualified financial advisor
                before participating in any token or NFT purchases.
              </p>
            </div>
          </div>
          {FooterLinkArray.map((footerLink) => (
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">
                {footerLink.footerLinkHeading}
              </h3>
              <a className="text-lg font-normal">{footerLink.footerLink1}</a>
              <a className="text-lg font-normal">{footerLink.footerLink2}</a>
              <a className="text-lg font-normal">{footerLink.footerLink3}</a>
              <a className="text-lg font-normal">{footerLink.footerLink4}</a>
              <a className="text-lg font-normal">{footerLink.footerLink5}</a>
              <a className="text-lg font-normal">{footerLink.footerLink6}</a>
              <a className="text-lg font-normal">{footerLink.footerLink7}</a>
              <a className="text-lg font-normal">{footerLink.footerLink8}</a>
              <a className="text-lg font-normal">{footerLink.footerLink9}</a>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div>© Wizardia. All rights reserved.</div>
          <div className="flex gap-5">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
