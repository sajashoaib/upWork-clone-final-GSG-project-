import { styled } from "@mui/material";

export const StyledDivmilestones = styled("div")(({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.gray03}`,
    display: "flex",
    width:'100%',
    justifyContent:'space-between',
    padding:'10px 0',
    '.fieldinput':{
        // border:'1px solid red',
        borderRadius:'15px'
    }
    
  }));
  export const StyledDivPriceDetail = styled("div")(({ theme }) => ({
    // borderBottom: `1px solid ${theme.colors.gray03}`,
    display: "flex",
    justifyContent:'center',
    padding:'10px 0',
    alignItems:'center',
  
    
  }));
  export const StyledDivfees = styled("div")(({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.gray03}`,
    display: "flex",
    justifyContent:'space-between',
    padding:'10px 0',
    alignItems:'center',
  span:{
    fontSize:'13px',
    color:theme.colors.gray01
  }
    
  }));