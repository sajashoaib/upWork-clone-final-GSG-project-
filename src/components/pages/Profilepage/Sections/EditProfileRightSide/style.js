import { styled } from "@mui/material";

export const StyledDivprofilejobtitle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledDivprofilehowiam = styled("div")(({ theme }) => ({
  padding: "15px",
  borderBottom: `1px solid ${theme.colors.gray03}`,
}));

export const StyledDivmyjobs = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "15px",
}));
export const StyledDiveachmyjobs = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  img: {
    border: `1px solid ${theme.colors.gray03}`,
  },
}));
export const StyledDivProjectCatalog = styled("div")(({ theme }) => ({
  padding: "15px",
  ".titlebtncatalog": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
