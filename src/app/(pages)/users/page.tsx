import UsersTable from "@/app/components/table/UsersTable";
import { getUsers } from "@/app/utils/api";
import React from "react";
import Modal from "./Modal";

type Props = {
  searchParams: Promise<{ user?: string }>;
};

const Users = async ({ searchParams }: Props) => {
  const { user } = await searchParams;

  return (
    <div>
      <h1 className="title">Kulanıcılar</h1>
      <UsersTable />
      {user && <Modal id={user} />}
    </div>
  );
};

export default Users;
