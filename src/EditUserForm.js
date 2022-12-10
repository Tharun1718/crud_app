import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function EditUserForm({ user, setUsers }) {

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [email, setEmail] = useState(user.email);
  const [number, setNumber] = useState(user.number);

  const navigate = useNavigate();

  const getUsers = () => {
    fetch("https://63884d9ea4bb27a7f7825e9b.mockapi.io/users")
      .then((data) => data.json())
      .then((res) => setUsers(res));
  };

  return (
    <div className="editForm_container">
     
      <TextField 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        label="Name" 
        variant="filled" 
      />
      <TextField 
        value={age}
        onChange={(e) => setAge(e.target.value)}
        label="Age" 
        variant="filled" 
      />
      <TextField 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email" 
        variant="filled" 
      />
      <TextField 
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        label="Phone No" 
        variant="filled" 
      />
      <Button 
        variant="contained"
        onClick={() => {
          fetch(`https://63884d9ea4bb27a7f7825e9b.mockapi.io/users/${user.id}`, {
            method: "PUT",
            body: JSON.stringify({ name, age, email, number }),
            headers: {
              "content-type": "application/json"
            }
          })
            .then(() => getUsers())
            .then(() => navigate("/"));
        }}
      >
        Save
      </Button>
      
    </div>
  );
}
