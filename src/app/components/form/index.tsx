"use client";

import React, { FormEvent } from "react";
import Input from "./Input";
import { inputs } from "@/app/utils/constant";
import Link from "next/link";
import { createProduct, getProductById, updateProduct } from "@/app/utils/api";
import { Product } from "@/app/type";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Props = {
  editItem?: Product;
};

const Form = ({ editItem }: Props) => {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const productData = Object.fromEntries(formData.entries());
    if (!editItem) {
      const id = Math.round(Math.random() * 100);
      productData.image_url = `https://picsum.photos/seed/${id}/500/500`;
      productData.rating = "4";
      productData.reviewsCount = "0";

      createProduct(productData as Product)
        .then(() => {
          toast.success("Ürün oluşturuldu");
          router.push("/products");
          router.refresh();
        })
        .catch((error) => toast.error(error.message));
    } else {
      let updatedItem = { ...editItem, ...productData };
      updateProduct(updatedItem)
        .then(() => {
          toast.success("Ürün güncelleme başarılı");
          router.push("/products");
          router.refresh();
        })
        .catch((err) => toast.error(err.message));
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
      {inputs.map((input, key) => (
        <Input
          key={key}
          i={input}
          //@ts-ignore
          value={editItem ? editItem[input.name] : ""}
        />
      ))}
      <div className="flex justify-end gap-5">
        <Link
          href="."
          className="bg-gray-300 hover:bg-gray-400 py-2 px-5 rounded-lg"
        >
          Geri
        </Link>
        <button
          type="submit"
          className="bg-blue-300 hover:bg-blue-400 py-2 px-5 rounded-lg"
        >
          {editItem ? "Kaydet" : "Oluştur"}
        </button>
      </div>
    </form>
  );
};

export default Form;
