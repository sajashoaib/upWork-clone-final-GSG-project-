import { Rating, styled } from "@mui/material";

export const StyledEachJob = styled("div")(({ theme }) => ({
  borderBottom: `2px solid ${theme.colors.gray03}`,
  padding: " 10px 0",

  " .titlesWithicon": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".span": {
    fontSize: "14px",
    color: "#5e6d55",
  },
  " &:hover": {
    background: theme.colors.gray05,
  },
  ".icons": {
    border: `1px solid ${theme.colors.gray03}`,
    padding: "10px",
    borderRadius: "50%",
    marginRight: "10px",
    color: `${theme.colors.baseColorGreen}`,
    background: "white",
    cursor: "pointer",
  },
}));

export const StyledDivlittleDetailJob = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",

  i: {
    color: theme.colors.baseColorBlue200,
  },
}));
export const StyledRating = styled(Rating)(({ theme }) => ({
  fontSize: "16px",
  color: "#108a00",
}));
