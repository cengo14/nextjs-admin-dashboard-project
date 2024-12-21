import React from "react";

type Props = {
  i: {
    label: string;
    name: string;
    type?: string;
  };
  value: string;
};
const Input = ({ i, value }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={i.name}>{i.label}</label>
      <input
        defaultValue={value}
        type={i.type ? i.type : "text"}
        id={i.name}
        name={i.name}
        className="shadow rounded-lg py-1 px-3"
      />
    </div>
  );
};

export default Input;
