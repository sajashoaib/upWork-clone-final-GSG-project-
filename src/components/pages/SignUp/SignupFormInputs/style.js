import Typography from "@/components/atoms/Typography";

const { styled, FormControlLabel } = require("@mui/material");

export const StyledFormControlLabel = styled(FormControlLabel)({
  "& .MuiTypography-root": {
    "&.MuiFormControlLabel-label": {
      "& > div": {
        display: "flex",
      },
    },
  },
});
export const StyledDivTypo = styled("div")`
  text-align: left;
  padding-left: 15px;
`;
export const StyledTypo = styled(Typography)`
  font-size: 14px;
`;
