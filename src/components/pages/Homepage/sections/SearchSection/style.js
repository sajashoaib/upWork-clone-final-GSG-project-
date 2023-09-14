import { styled, InputBase } from "@mui/material";

export const Searchs = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  border: "2px solid #9aaa97",
  backgroundColor: "white",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "&:hover": {
    borderColor: theme.colors.gray01,
    transition: " border-color 0.3s ease-in-out",
  },
  [theme.breakpoints.up("sm")]: {
  },
}));
export const StyledSearchesicon = styled("div")`
  background-color: white;
  border: 1px solid #5e6d55;
  &:hover {
    background-color: #beccbe;
    color: white;
  }
`;
export const StyledInputBases = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "25ch",
    },
  },
}));
