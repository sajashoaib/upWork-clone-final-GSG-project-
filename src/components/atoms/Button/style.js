'use client'
import { Button,  styled } from "@mui/material";
export const StyledButton=styled(Button)(({theme,width})=>({
    width: width, 
    color:theme.colors.baseColorGreen, 
    borderRadius:'30px',
    backgroundColor:"transparent",
    border:"2px solid #108a00",
    '&:hover': {
      backgroundColor: '#03d01d', 
    },  
}))
