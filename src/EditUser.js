import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { EditUserForm } from "./EditUserForm";

export function EditUser({ setUsers }) {
  const { id } = useParams();
  // const user = users[id]
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://63884d9ea4bb27a7f7825e9b.mockapi.io/users/${id}`)
      .then((res) => res.json())
      .then((usr) => setUser(usr));
  }, []);

  return user ? <EditUserForm user={user} setUsers={setUsers} /> : "Loading...";

}
