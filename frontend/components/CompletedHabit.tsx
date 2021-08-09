import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

export const CompletedHabit = ({ name }) => {
  return (
    <div className="bg-yellow-600 text-gray-300 border-gray-700 rounded-3xl border w-full h-16 flex pl-4 flex-row items-center justify-between relative">
      <strong>
        <span className="text-3xl m-auto">{name}</span>
      </strong>
      <div className="text-gray-800 grid place-items-center text-3xl rounded-r-3xl w-2/12 h-full">
        <AiOutlineCheck />
      </div>
    </div>
  );
};
