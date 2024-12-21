import { Product } from "@/app/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeleteButton from "./DeleteButton";

type Props = {
  product: Product;
};

const Card = ({ product }: Props) => {
  return (
    <div className="bg-white rounded-lg p-2 sm:p-3 shadow-lg flex flex-col">
      <div className="relative h-[200px]">
        <Image
          src={product.image_url}
          fill
          alt={product.name}
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 flex flex-col justify-between flex-1">
        <div>
          <h5 className="font-bold line-clamp-2">{product.name}</h5>
          <h5 className="text-blue-500 font-semibold mb-2">${product.price}</h5>
        </div>
        <div className="flex justify-between items-center">
          <Link
            href={`/products/${product.id}`}
            className="py-1 px-3 bg-[#E2EAF8] hover:bg-[#7aa7f4] transition rounded-md"
          >
            Düzenle
          </Link>
          <DeleteButton id={product.id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
