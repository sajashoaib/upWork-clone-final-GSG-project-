import { styled } from "@mui/material";

export const StyledDivTestimonals = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.colors.gray03}`,
  borderRadius: "15px",
  margin: "15px 0",
  padding: "15px",
}));

export const StyledDivTestimonalsTitle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  h2: {
    color: theme.colors.gray02,
    lineHeight: "0px",
  },
}));

export const StyledDivTestimonalsimgLink = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
}));
