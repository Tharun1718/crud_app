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

export function UserList({ users }) {
  
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
                  <button onClick={()=>navigate(`/editUser/${usr.id}`)}>Edit</button>
                  <button
                  >
                    Delete
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
}
