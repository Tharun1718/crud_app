import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export function UserDetails() {
  const { id } = useParams();

  const [userInfo,setUserInfo] = useState({})
  
  useEffect(()=>{
    fetch(`https://63884d9ea4bb27a7f7825e9b.mockapi.io/users/${id}`)
    .then((data)=> data.json())
    .then((res)=>setUserInfo(res))
  },[])

  return (
    <div className="userDetails_container">
      <Card sx={{ maxWidth: 445 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={userInfo.avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userInfo.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {userInfo.age}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
