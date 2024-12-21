import React from "react";
import { GoSearch } from "react-icons/go";

const Input = () => {
  return (
    <form className="flex gap-2 items-center text-gray-500">
      <button title="search icon">{<GoSearch />}</button>
      <input type="text" className="p-1 outline-none" placeholder="Ara" />
    </form>
  );
};

export default Input;
