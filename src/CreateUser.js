import React from "react";
import { useNavigate } from 'react-router-dom';

export function CreateUser() {
  const navigate = useNavigate();
  return (
    <div className="createUser_container">
      <button onClick={() => navigate("/createUser")}>Add User</button>
    </div>
  );
}
