import React, { useEffect } from "react";
import {useState} from "react";
import './App.css';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { UserDetails } from "./UserDetails";
import { Home } from "./Home";
import { AddUser } from "./AddUser";


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
        <Route path="/" element={<Home users={users}/>} />
        <Route path="/createUser" element={<AddUser users={users} setUsers={setUsers}/>} />
        <Route path="/:id" element={<UserDetails />} />
        <Route path="/editUser/:id" element={<EditUser />} />
      </Routes>

    </div>
  );
}

function EditUser(){
  const {id} = useParams()
  // const user = users[id]
  const [user,setUser] = useState({})

  useEffect(()=>{
    fetch(`https://63884d9ea4bb27a7f7825e9b.mockapi.io/users/${id}`)
    .then((res)=>res.json())
    .then((usr)=>setUser(usr))
  },[])

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [email, setEmail] = useState(user.email);
  const [number, setNumber] = useState(user.number);

  const navigate = useNavigate();

  return(
    <div>
       <p>Id number is {id}</p>
       <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
       <input type="text" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)}/>
       <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
       <input type="text" placeholder="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
       <button
          onClick={()=>{
            fetch(`https://63884d9ea4bb27a7f7825e9b.mockapi.io/users/${id}`,{
              method:"PUT",
              body:JSON.stringify({name,age,email,number}),
              headers:{
                "content-type":"application/json"
              }
            })
            .then((res)=>res.json)
            .then(()=>navigate("/"))
          }}
       >
        Submit
       </button>
    </div>
  )
}


export default App;
