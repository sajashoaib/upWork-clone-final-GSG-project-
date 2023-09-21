'use client'
import { Button,  styled } from "@mui/material";
export const StyledButton=styled(Button)(({theme,width,backgroundColor,textColor,border})=>({
    width: width, 
    backgroundColor: backgroundColor, 
    color: textColor, 
    borderRadius:'30px',
    border:border,
    // padding:'20px',
    '&:hover': {
      backgroundColor: '#03d01d', 
    },  
}))
/* background-color:${(props)=>props.theme.colors.baseColorGreen}; */
/* width: 350px; */
/* border-radius: 20px;
padding: 10px 20px;
&:hover {
 background-color:${(props)=>props.theme.colors.baseColorGreen200};
  transition: background-color 0.5s; */


    
  
