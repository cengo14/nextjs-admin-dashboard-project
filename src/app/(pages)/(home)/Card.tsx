import { InfoItem } from "@/app/(pages)/(home)/page";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  card: InfoItem;
};
const CardBox = ({ card }: Props) => {
  return (
    <div className="flex gap-3 p-4 bg-white shadow my-1 justify-between items-center rounded-xl hover:shadow-md transition">
      <div>
        <h4 className="text-base sm:text-sm text-gray-700 whitespace-nowrap ">
          {card.label}
        </h4>
        <p className="text-xl md:text-2xl font-semibold">{card.value}</p>
      </div>
      <Image src={card.icon} alt={card.label} width={40} height={40} />
    </div>
  );
};

export default CardBox;
