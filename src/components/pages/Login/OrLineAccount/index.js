import { styled } from "@mui/material";

const OrLineAccount = styled("p")`
  font-size: ${(props) => props.theme.fontsize.xxxs};
  letter-spacing: 0px;
  color: ${(props) => props.theme.colors.smoke};
  position: relative;
  margin: 60px 0 0 0;
  width: 100%;
  text-align: center;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: calc(50% - 130px);
    height: 1px;
    background-color: ${(props) => props.theme.colors.smoke};
  }

  &::after {
    left: unset;
    right: 0;
  }
`;

export default OrLineAccount;
