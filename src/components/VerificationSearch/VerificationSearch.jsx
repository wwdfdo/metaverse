import React from "react";

const VerificationSearch = () => {
  return (
    <div className="w-3/5 flex flex-col mx-auto justify-center items-center gap-20 py-20">
      <div>
        <p className="text-2xl">
          Make sure you are visiting:{" "}
          <a href="https://www.wizardia.io" className="text-xl">
            https://www.wizardia.io
          </a>
        </p>
      </div>

      <h2 className="text-7xl">VERIFICATION SEARCH</h2>

      <div className="text-3xl text-center">
        Check if a domain, email address or telegram is an official Wizardia
        channel by entering it in the box below.
      </div>
      <div className="w-3/5 relative flex justify-between border-2 border-white py-0 px-0 rounded-full">
        <input
          type="text"
          className="py-5 px-4 text-xl rounded-full border-none w-4/5 text-white bg-transparent outline-none"
        ></input>
        <input
          type="submit"
          className="rounded-full text-white font-semibold text-xl glow-button border-l-[1px] border-l-white px-6 "
        ></input>
      </div>
    </div>
  );
};

export default VerificationSearch;
