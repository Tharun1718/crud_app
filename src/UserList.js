import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow } from "./App";
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export function UserList({ users,setUsers }) {
  const getUsers = () =>{
    fetch("https://63884d9ea4bb27a7f7825e9b.mockapi.io/users")
    .then((data)=> data.json())
    .then((res)=>setUsers(res))
  }
  const navigate = useNavigate()
  return (
    <div className="userList_container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Mobile Number</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((usr, index) => (
              <StyledTableRow key={index} id={usr.id}>
                <StyledTableCell component="th" scope="row">
                  {usr.name} 
                  <IconButton onClick={()=>navigate(`/${usr.id}`)} >
                     <InfoIcon fontSize="x-small" />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="center">{usr.age}</StyledTableCell>
                <StyledTableCell align="center">{usr.email}</StyledTableCell>
                <StyledTableCell align="center">{usr.number}</StyledTableCell>
                <StyledTableCell align="center">
                  
                  <IconButton color="success" onClick={()=>navigate(`/editUser/${usr.id}`)}>
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={()=>{
                    fetch(`https://63884d9ea4bb27a7f7825e9b.mockapi.io/users/${usr.id}`,{
                      method:"DELETE"
                    })
                    .then(()=>getUsers())
                    .then(()=>navigate("/"))
                  }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
}
