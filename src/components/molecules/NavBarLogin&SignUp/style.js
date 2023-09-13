import { Toolbar, styled } from "@mui/material";

export const StyledToolBar=styled(Toolbar)`
box-shadow:none;
display: flex;
justify-content: space-between;
color: red;


`
export const StyledSpan=styled('span')`
color: ${(props)=>props.theme.colors.baseColorGreen};
cursor: pointer;

`