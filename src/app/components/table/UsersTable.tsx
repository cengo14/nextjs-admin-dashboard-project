import React from "react";
import Table from ".";
import { getUsers } from "@/app/utils/api";
import { FaEye } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

const UsersTable = async () => {
  const users = await getUsers();

  return (
    <Table>
      <thead>
        <tr className="border-b- shadow">
          <th>#</th>
          <th>İsim</th>
          <th>E-Posta</th>
          <th>Ülke</th>
          <th>Şehir</th>
          <th>Eylem</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, key) => (
          <tr key={key} className="border-b">
            <td className="py-8">{key + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.country}</td>
            <td>{user.address.city}</td>
            <td>
              <div className="flex gap-2 items-center justify-center">
                <Link
                  href={`?user=${user.id}`}
                  className="border shadow p-2 rounded-md hover:shadow-lg hover:bg-gray-200 transition"
                >
                  <FaEye />
                </Link>
                <DeleteButton userId={user.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
