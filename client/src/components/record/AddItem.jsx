"use client";
import React from "react";
import Checkbox from "./Checkbox";
import Recordmodal from "../Recordmodal";

const AddItem = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="font-semibold text-2xl">Recordc</div>
      <div>
        <Recordmodal
          text={"Add item"}
          bg={"bg-blue-500"}
          tcolor={"text-white"}
          rounded={"rounded-2xl"}
          width={"w-[250px]"}
          height={"h-[32px]"}
          hover={"hover:bg-blue-600"}
        />
      </div>

      <input
        type="type"
        placeholder="Search"
        className="bg-gray-100 rounded-lg p-4 border-[1px] border-gray-300 hover:bg-gray-200 w-[250px] h-[32px]"
      />

      <div className="font-semibold text-base text-[#1F2937]">Types</div>
      <Checkbox />
    </div>
  );
};

export default AddItem;
