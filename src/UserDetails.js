import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export function UserDetails() {
  const { id } = useParams();

  const [userInfo,setUserInfo] = useState({})
  
  useEffect(()=>{
    fetch(`https://63884d9ea4bb27a7f7825e9b.mockapi.io/users/${id}`)
    .then((data)=> data.json())
    .then((res)=>setUserInfo(res))
  },[])

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userInfo.name}</p>
      <p>Age: {userInfo.age}</p>
      <p>Email: {userInfo.email}</p>
      <p>Phone No:{userInfo.number}</p>
    </div>
  );
}
