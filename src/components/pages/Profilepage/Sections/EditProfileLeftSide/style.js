import { Button, styled } from "@mui/material";

export const StyledDivviewprofile = styled("div")(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.gray03}`,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "10px 20px",
  "& h4, & h5": {
    lineHeight: "0",
  },
  p: {
    lineHeight: "16px",
    color: theme.colors.gray01,
  },
}));

export const StyledDivviewprofiletitle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent:'space-between'
 
}));

export const StyledDivviewprofilebtn = styled(Button)(({ theme }) => ({
  color: "green",
  textTransform: "none",
  padding: "10px 30px 10px 5px",
  "&:hover": {
    backgroundColor: "green",
    color: "white",
  },
}));
export const StyledGitHupSyackbtn = styled(Button)(({ theme }) => ({
  color: theme.colors.gray01,
  textTransform: "none",
  border: `2px solid ${theme.colors.gray01}`,
  borderRadius: "30px",
  width: "100%",
  margin: "10px 0",
  fontSize: "18px",
  padding: "10px 30px",
  "&:hover": {
    backgroundColor: theme.colors.upgreenold,
    color: "white",
    border: `2px solid ${theme.colors.gray01}`,
  },
}));
