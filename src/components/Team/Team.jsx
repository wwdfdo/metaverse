import React from "react";
import tomas from "../../images/tomas.png";
import "./Team.css";
import ellipse from "../../images/ellipse.svg";
import { TeamMembers } from "../../arrays/TeamMembers";

const Team = () => {
  return (
    <div className="flex justify-center gap-16 w-4/5 mx-auto flex-wrap pt-32 relative ">
      <img src={ellipse} className="absolute top-0 -mt-40" alt="" />
      {TeamMembers.map((TeamMember) => (
        <div
          key={TeamMember.id}
          className="flex flex-col items-center border-2 border-white w-[300px] rounded-3xl gap-12 mb-28 relative"
        >
          <span className="w-[1.2em] h-[1.2em] rounded-full glow-button absolute top-0 left-[3.5em] -mt-10"></span>
          <span className="w-[0.7em] h-[0.7em] rounded-full glow-button absolute top-0 left-[5.5em] -mt-20"></span>
          <span className="w-[0.5em] h-[0.5em] rounded-full glow-button absolute top-0 right-32 -mt-32"></span>
          <img
            src={TeamMember.teamMemberImg}
            className="w-[180px] h-[180px] rounded-full border-2 border-white -mt-[90px] bg-black"
            alt=""
          />

          <div className="flex flex-col gap-6 items-center pb-10">
            <div className="flex flex-col items-center gap-2">
              <p className="text-3xl text-center font-semibold">
                {TeamMember.teamMemberName}
              </p>
              <p className="text-lg text-center font-semibold">
                {TeamMember.teamMemberJob}
              </p>
            </div>
            <div className="flex gap-3 dotted-spaced pt-8">
              <p className="text-2xl text-[#0a9996] border-r-2 border-white pr-3">
                {TeamMember.teamMemberLink1}
              </p>
              <p className="text-2xl text-[#0a9996]">
                {TeamMember.teamMemberLink2}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
