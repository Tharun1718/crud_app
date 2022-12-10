import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export function CreateUser() {
  const navigate = useNavigate();
  return (
    <div className="createUser_container">
      <Button variant="contained" onClick={() => navigate("/createUser")}>Add User</Button>
    </div>
  );
}
