import { Button, styled } from "@mui/material";

export const StyledButtonWithIcon=styled(Button)(({theme, backgroundColor, textColor,width})=>({
    backgroundColor: backgroundColor || theme.colors.gray04,
    color: textColor || theme.colors.whiteColor,
    width:width,
    borderRadius:'40px',
    padding:'5px 20px',
    marginTop:'10px'


})


)