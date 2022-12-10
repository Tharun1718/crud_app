import React from "react";
import { UserList } from "./UserList";
import { CreateUser } from "./CreateUser";

export function Home({ users,setUsers }) {
  return (
    <div>
      <UserList users={users} setUsers={setUsers} />
      <CreateUser />
    </div>
  );
}
