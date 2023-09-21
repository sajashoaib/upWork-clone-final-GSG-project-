import { styled } from "@mui/material";

export const StyledDivhourlyrate = styled('div')(({ theme }) => ({ 
    textTransform:'none',
    display:'flex',
    justifyContent:'space-between',
color:'green',
alignItems:'center',
 width:'100%'  , 
    borderBottom: `1px solid ${theme.colors.gray03}`,
  }));