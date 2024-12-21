import React from "react";
import Input from "./Input";
import { BiSolidBellRing } from "react-icons/bi";
import Image from "next/image";
import pp from "@/app/assets/images/pp.png";

const Header = () => {
  return (
    <header className="bg-white text-black border p-2 flex justify-between items-center">
      <Input />
      <div className="flex gap-5 items-center">
        {
          <BiSolidBellRing className="text-xl cursor-pointer hover:text-2xl hover:text-black text-gray-500" />
        }
        <div className="flex gap-3 items-center">
          <Image
            src={pp}
            alt="Profile Picture"
            width={40}
            height={40}
            className="object-contain"
          />
          <div>
            <p className="font-semibold whitespace-nowrap">Cengiz Aydemir</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
