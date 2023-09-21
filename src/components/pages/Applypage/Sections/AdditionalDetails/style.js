import { Stack, styled } from "@mui/material";

export const StyledTextArea = styled('textarea')(({ theme }) => ({
    border: `1px solid ${theme.colors.gray03}`,
    borderRadius:'10px',
    width:'100%'
   
  }));
  
  export const StyledStack = styled(Stack)(({ theme }) => ({
   '.btnSend':{
    width:'20%',
    backgroundColor:theme.colors.baseColorGreen,
    padding:'10px 40px',
    borderRadius:'20px',
    '&:hover':{
        backgroundColor:theme.colors.baseColorGreen,
    }
   },
   '.btncancel':{
color:theme.colors.baseColorGreen,
'&:hover':{
    textDecoration:'underline'
}
   }
   
  }));
  