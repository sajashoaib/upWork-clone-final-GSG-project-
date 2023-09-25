import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { StyledDivProtofolio } from './style';
import { styled } from "@mui/material";
import Typography from '@/components/atoms/Typography';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#037a01' : '#078411',
  },
}));

const Protofolio = () => {
  const {data}=useAuth();

  return (
    <StyledDivProtofolio>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="../../../../../../assets/images/profile.jpg"
          sx={{ width: 60, height: 60}}
        />
      </Stack>
  <Link href='/profile'>    <Typography as='h3'>Saja S. </Typography></Link>
      <Typography as='p'>Front-End Developer || React Js</Typography>
    
      <Typography as='h5'>Complete your profile</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
       <span> <BorderLinearProgress variant="determinate" value={80}  sx={{width:'250px'}} /></span><span>80%</span>
      </div></Box>
    </StyledDivProtofolio>
  )
}

export default Protofolio;
