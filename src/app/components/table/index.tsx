import React, { JSX } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Table = ({ children }: Props) => {
  return (
    <div className=" max-md:w-[82vw] overflow-x-auto">
      <table
        border={4}
        className="border shadow w-full bg-white rounded-md mt-5 z-0"
      >
        {children}
      </table>
    </div>
  );
};

export default Table;
