import { styled } from "@mui/material";

export const StyledJobDivDetail = styled("div")(({ theme }) => ({
  width: "100%",
  border: `1px solid ${theme.colors.gray03}`,
  margin: "20px  0",
  display: "flex",
  borderRadius: "15px",
}));
export const StyledJobDivDetail1 = styled("div")(({ theme }) => ({
  width: "70%",
}));
export const StyledJobDivDetail2 = styled("div")(({ theme }) => ({
  width: "30%",
  borderLeft: `1px solid ${theme.colors.gray03}`,
}));
export const StyledJobDivDetail2TitlepostedTime = styled("div")(
  ({ theme }) => ({
    padding: "20px 10px",
    ".locatIcon": {
      color: theme.colors.highlightblue,
    },
  })
);
export const StyledJobDivDetail2priceexperience = styled("div")(
  ({ theme }) => ({
    padding: "20px 10px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    ".iconpriceexperience": {
      padding: "0px 10px",
      fontSize: "18px",
    },
    p: {
      color: theme.colors.gray01,
      fontSize: "13px",
    },
  })
);
export const StyledJobDivDetail2activityjobs = styled("div")(({ theme }) => ({
  padding: "20px 10px",
  p: {
    color: theme.colors.gray01,
    fontSize: "13px",
  },
  ".green": {
    color: theme.colors.baseColorGreen,
    fontSize: "18px",
  },
}));

export const StyledJobDivDetail1Apply = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderBottom: `1px solid ${theme.colors.gray03}`,
  padding: "20px 0px",
  ".btnapply": {
    padding: "10px",
    borderRadius: "20px",
    textTransform: "none",
  },
  ".a": {
    width: "250px",
    backgroundColor: theme.colors.baseColorGreen,
    margin: "25px 0 0 0",
    "&:hover": {
      backgroundColor: theme.colors.baseColorGreen,
    },
  },
  ".b": {
    width: "80%",
    border: `2px solid ${theme.colors.baseColorGreen}`,
    color: theme.colors.baseColorGreen,
    margin: "20px 0",
    "&:hover": {
      border: `2px solid ${theme.colors.baseColorGreen}`,
      color: theme.colors.baseColorGreen,
    },
  },
}));
export const StyledJobDivDetail1AboutClient = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px 10px 15px 10px",
  borderBottom: `1px solid ${theme.colors.gray03}`,
  ".locatIcon": {
    color: theme.colors.highlightblue,
  },
  ".green": {
    color: theme.colors.baseColorGreen,
    fontSize: "18px",
  },
  p: {
    color: theme.colors.gray01,
    fontSize: "13px",
    lineHeight: "0px",
  },
  h4: {
    lineHeight: "0px",
  },
}));
StyledJobDivDetail1AboutClient;
