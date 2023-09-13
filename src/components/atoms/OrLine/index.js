import { styled } from "@mui/material";
import PropTypes from "prop-types";
const OrLine = styled('p')`
  font-size: ${(props)=>props.theme.fontsize.xxxs};
  letter-spacing: 0px;
  color:${(props)=>props.theme.colors.smoke};

  position: relative;
  margin: 8px 0;
  width:${(props)=>props.width || "70%"} ;
  text-align: center;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: calc(50% - 20px);
    height: 1px;
    background-color:${(props)=>props.theme.colors.smoke};
  }

  &::after {
    left: unset;
    right: 0;
  }
`;
OrLine.propTypes={
  width:PropTypes.string
}
export default OrLine;
