"use client";

import { deleteUser } from "@/app/utils/api";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

type Props = {
  userId: string;
};

const DeleteButton = ({ userId }: Props) => {
  const router = useRouter();
  const handleDelete = () => {
    deleteUser(userId)
      .then(() => {
        toast.success("Kullanıcı silindi");
        router.refresh();
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <button
      onClick={handleDelete}
      title="Delete"
      className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-red-200 transition"
    >
      <FaTrash className="text-red-600 hover:text-red-700" />
    </button>
  );
};

export default DeleteButton;
