import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import { IoIosBicycle } from "react-icons/io";
import { cards } from "../../arrays/cardsArray";

import "./CardSlider.css";

const EcosystemSlider = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow cursor-pointer absolute lg:-right-[4%] lg:block hidden bottom-[50%] z-10 text-[#73f59b] p-3 rounded-3xl bg-slate-100  hover:text-[#68edff] next text-md"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow cursor-pointer absolute bottom-[50%] lg:-left-[7%] lg:block hidden z-10 text-[#73f59b]  p-3 rounded-3xl bg-slate-100  hover:text-[#68edff] prev text-md"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    centerPadding: 40,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="Modes"
      className="flex flex-col justify-center  mx-auto gap-20  pb-80"
    >
      <h2 className="text-white font-[500] text-center md:text-[5em] leading-snug text-[2.1em] pb-5 w-1/2 mx-auto">
        Wizardia in the spotlight
      </h2>
      <div className="container w-4/5 mx-auto">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="pr-4">
              <div className="border-2 border-white w-[100%] pr-2 pl-5 py-10 rounded-3xl flex flex-col gap-10">
                <h2 className="text-center">hello world</h2>
                <div className="flex flex-col gap-10 dotted-spaced3 dotted-spaced3">
                  <p className="text-xl font-semibold pt-10   ">feb 22 2022</p>
                  <p className="text-xl">
                    Solana-based P2E metaverse challenges the market with
                    battle-based gameplay & Wizard NFTs
                  </p>
                  <p className="text-lg">Read More</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EcosystemSlider;
