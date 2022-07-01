import React from "react";
import bar from "../../images/bar1.png";
import "./RoadMap.css";

const RoadMap = () => {
  return (
    <div className="pb-20 mt-40">
      <div className="flex flex-col w-5/6 mx-auto relative py-40">
        <div className="flex">
          <div className="absolute top-0 -mt-10">
            <p>Accomplished Milestones</p>
            <ul>
              <li>Visual assets</li>
              <li>Game design</li>
              <li>Team</li>
              <li>Tokenomics</li>
              <li>Community 2k</li>
            </ul>
          </div>
          <div className="absolute top-0 -mt-10 right-[48%]">
            <p>Accomplished Milestones</p>
            <ul>
              <li>Visual assets</li>
              <li>Game design</li>
              <li>Team</li>
              <li>Tokenomics</li>
              <li>Community 2k</li>
            </ul>
          </div>
          <div className="absolute top-0 -mt-10 right-32">
            <p>Accomplished Milestones</p>
            <ul>
              <li>Visual assets</li>
              <li>Game design</li>
              <li>Team</li>
              <li>Tokenomics</li>
              <li>Community 2k</li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <span className="bar"></span>
            <img src={bar} alt="" />
          </div>
          <div className="flex">
            <span className="bar"></span>
            <img src={bar} alt="" />
          </div>
          <div className="flex">
            <span className="bar"></span>
            <img src={bar} alt="" />
          </div>
          <div className="flex">
            <span className="bar"></span>
            <img src={bar} alt="" />
          </div>
          <div className="flex">
            <span className="bar"></span>
            <img src={bar} alt="" />
          </div>
        </div>
        <div className="flex gap-[27%]">
          <div className="absolute bottom-0 -mb-10 left-60">
            <p>Accomplished Milestones</p>
            <ul>
              <li>Visual assets</li>
              <li>Game design</li>
              <li>Team</li>
              <li>Tokenomics</li>
              <li>Community 2k</li>
            </ul>
          </div>
          <div className="absolute bottom-0 -mb-10 right-[30%]">
            <p>Accomplished Milestones</p>
            <ul>
              <li>Visual assets</li>
              <li>Game design</li>
              <li>Team</li>
              <li>Tokenomics</li>
              <li>Community 2k</li>
            </ul>
          </div>
          <div className="absolute bottom-0 -mb-10 right-32">
            <p>Accomplished Milestones</p>
            <ul>
              <li>Visual assets</li>
              <li>Game design</li>
              <li>Team</li>
              <li>Tokenomics</li>
              <li>Community 2k</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
