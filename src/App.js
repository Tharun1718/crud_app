import React, { useEffect } from "react";
import {useState} from "react";
import './App.css';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Routes, Route } from 'react-router-dom';
import { UserDetails } from "./UserDetails";
import { Home } from "./Home";
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch("https://63884d9ea4bb27a7f7825e9b.mockapi.io/users")
    .then((data)=> data.json())
    .then((res)=>setUsers(res))
  },[])

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home users={users} setUsers={setUsers}/>} />
        <Route path="/createUser" element={<AddUser users={users} setUsers={setUsers}/>} />
        <Route path="/:id" element={<UserDetails />} />
        <Route path="/editUser/:id" element={<EditUser setUsers={setUsers} />} />
      </Routes>

    </div>
  );
}

export default App;
