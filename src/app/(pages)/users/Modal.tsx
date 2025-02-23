import { User } from "@/app/type";
import { getUserById } from "@/app/utils/api";
import Link from "next/link";
import React from "react";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";

type Props = {
  id: string;
};

const Modal = async ({ id }: Props) => {
  const user: User = await getUserById(id);

  const fields = [
    {
      label: "Email",
      value: user.email,
    },
    {
      label: "Ülke",
      value: user.address.country,
    },
    {
      label: "Şehir",
      value: user.address.city,
    },
    {
      label: "Sokak",
      value: user.address.street,
    },
    {
      label: "Posta Kodu",
      value: user.address.postal_code,
    },
    {
      label: "Telefon",
      value: user.phone,
    },
    {
      label: "Sipariş",
      value: user.orders.length,
    },
  ];

  return (
    <div className="fixed bg-black/10 inset-0 backdrop-blur-[2px] z-[999] grid place-items-center">
      <div className="bg-white rounded-lg shadow py-8 px-14 pb-16">
        <div className="flex justify-end">
          <Link
            href="/users"
            className="shadow p-2 rounded-lg hover:shadow-lg hover:bg-gray-200 transition"
          >
            <MdClose />
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold text-center my-5">
            {user.name}
          </h1>

          {fields.map((field, key) => (
            <div key={key} className="flex justify-between items-center gap-16">
              <span className="text-gray-800">{field.label}</span>
              <span className="font-semibold">{field.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
