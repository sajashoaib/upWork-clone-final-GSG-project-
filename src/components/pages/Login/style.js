import { Box, styled } from "@mui/material";

export const StyledBox=styled(Box)(({theme})=>({

    // height: '80vh',
    padding:'5px 5px',
    border: `2px solid ${theme.colors.gray02}`,
    borderRadius:'10px',
}))