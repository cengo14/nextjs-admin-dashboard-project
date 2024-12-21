"use client";
import { deleteProduct } from "@/app/utils/api";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

type Props = {
  id: string;
};

const DeleteButton = ({ id }: Props) => {
  const router = useRouter();
  const handleDelete = async () => {
    if (!confirm("Silmek istediğinizden emin misiniz ?")) return;
    await deleteProduct(id)
      .then(() => {
        router.refresh();
        toast.success("Ürün silindi..");
      })
      .catch((error) => toast.error(error));
  };
  return (
    <button
      onClick={handleDelete}
      className="py-1 px-3 bg-[#F3a5a5] hover:bg-[#f45757] transition rounded-md"
    >
      Sil
    </button>
  );
};

export default DeleteButton;
