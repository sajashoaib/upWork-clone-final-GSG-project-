import { styled } from "@mui/material";

export const StyledDivProposalSettings = styled("div")(({ theme }) => ({
    width: "95%",
    border: `1px solid ${theme.colors.gray03}`,
       borderRadius: "15px",
    padding:'10px 20px ',
    margin:'15px 0'
  }));

  export const StyledDivjobdetails = styled("div")(({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.gray03}`,
    display: "flex",
    justifyContent:'space-between',
  }));
  
  export const StyledDivjobdetailsA = styled("div")(({ theme }) => ({
    width: "50%",
    '.TypoChip':{
        display: "flex",
        alignItems:'center',
        gap:'30px'

    }
  }));
  export const StyledDivjobdetailsB = styled("div")(({ theme }) => ({
    borderLeft: `1px solid ${theme.colors.gray03}`,
    padding:'0 20px',
    p:{
        fontSize:'12px',
        margin:'10 0'
    },
    span:{
        fontSize:"12px",
        color:theme.colors.gray01,
    },
    '.iconjobdetail':{
        fontSize:"18px",
    }
  }));