import React from "react";
import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";

export function Home({ users }) {
  return (
    <div>
      <UserList users={users} />
      <CreateUser />
    </div>
  );
}
