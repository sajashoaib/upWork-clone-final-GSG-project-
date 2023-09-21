import Typography from "@/components/atoms/Typography";
import { styled } from "@mui/material";
import Link from "next/link";

export const StyledDivFooter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  padding:'15px 0',
  width: "100%",
}));
export const StyledDivFooterParenticons = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding:'10px 0',
    borderBottom:'1px solid white'
  }));
export const StyledDivFootericons = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "30%",
  p:{
      color:'white'
  }
}));
export const StyledParentDivFooter = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  padding: "30px 100px",
  borderRadius:'15px',
  background: `${theme.colors.darkgreen}`,
}));
export const StyledEachDivFooter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",
  gap: "14px",
}));
export const StyledLink = styled(Link)(({ theme }) => ({
  color: `${theme.colors.whiteColor}`,
  textDecoration: "none",
  fontSize: "14px",
  "&:hover": {
    textDecoration: "underline",
  },
}));
export const StyledIcon = styled("div")(({ theme }) => ({
  ".iconFooter": {
    fontSize: "20px",
    borderRadius: "50%",
    padding: "10px",
    margin: " 0 10px",
    border: "1px solid white",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      transition: "background-color 0.3s, color 0.3s",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
  },
}));
export const StyledCopyRight = styled(Typography)(({ theme }) => ({
    color: `${theme.colors.whiteColor}`,
    fontSize: "14px",
    textAlign:'center',
    width:'100%'
    
  }));
