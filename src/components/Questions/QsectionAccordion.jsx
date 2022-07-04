import React from "react";
import { useState } from "react";

const QsectionAccordion = ({ QuestionArray }) => {
  const [visibleAccordionId, setVisibleAccordionId] = useState(null);
  return (
    <div className="w-full mx-auto justify-center items-center flex flex-col gap-5">
      {QuestionArray.map((Question) => (
        <div
          key={Question.id}
          className="md:w-[45%] w-[40%] bg-transparent border-2 border-white px-8 py-4 rounded-[50px] text-[#ffffff]"
        >
          <div
            className="flex justify-between"
            onClick={() =>
              setVisibleAccordionId(
                visibleAccordionId === Question.id ? null : Question.id
              )
            }
          >
            <h3 className="md:text-[1rem] text-[0.8rem] font-bold">
              {Question.qtitle}
            </h3>
            <span className="text-xl">
              <i
                className={`fa-solid ${
                  visibleAccordionId === Question.id
                    ? "fa-angle-up"
                    : "fa-angle-down"
                } `}
              ></i>
            </span>
          </div>
          <div
            className={`${
              visibleAccordionId === Question.id ? "" : "hidden"
            } mt-8`}
          >
            <p className="font-bold">{Question.answer}</p>
            <p className="font-bold">{Question.answer1}</p>
            <p className="font-bold">{Question.answer2}</p>
            <p className="font-bold">{Question.answer3}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QsectionAccordion;
