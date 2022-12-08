import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function AddUser({users,setUsers}) {

  const getUsers = () =>{
    fetch("https://63884d9ea4bb27a7f7825e9b.mockapi.io/users")
    .then((data)=> data.json())
    .then((res)=>setUsers(res))
  }

  useEffect(()=> getUsers(), [])
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const addUser = (user) => {

    fetch("https://63884d9ea4bb27a7f7825e9b.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(()=>getUsers())
    .then(() => navigate("/"));
  };

  return (
    <div>
      <input placeholder="enter your name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="enter your age" onChange={(e) => setAge(e.target.value)} />
      <input placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="enter your number" onChange={(e) => setNumber(e.target.value)} />
      <button
        onClick={() => {
          const newUser = {
            name: name,
            age: age,
            email: email,
            number: number
          };

          addUser(newUser);
        }}
      >
        Add
      </button>
    </div>
  );
}
