import React from "react";
import Header from "../dash/Header";
import AddItem from "./AddItem";
import Category from "./Category";
import Select from "./Select";
import Range from "./Range";

export const Record = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex w-[1200px] mx-auto h-full my-auto">
        <div className="flex flex-col gap-10">
          <AddItem />
          <Category />
          <Select />
          <Range />
        </div>
      </div>
    </div>
  );
};
