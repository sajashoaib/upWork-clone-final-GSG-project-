import Typography from "@/components/atoms/Typography";
import { styled } from "@mui/material";
export const StyledFooterDiv=styled('div')(({theme})=>({
    backgroundColor: theme.colors.darkgreen,
    borderRadius:'20px',
    margin:'30px 20px 20px 20px',
    padding:'40px',
    color:theme.colors.whiteColor
}))

export const StyledFooterTypo=styled(Typography)`
text-align: center;
a{
    color:${props => props.theme.colors.whiteColor};
    text-decoration: none;
}
a:hover {
  text-decoration: underline;
}








`








