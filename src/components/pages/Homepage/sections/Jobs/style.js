import Typography from "@/components/atoms/Typography";
import { styled } from "@mui/material";

export const StyledJobs=styled('div')(({theme})=>({
    borderTop: `2px solid ${theme.colors.gray03}`, 
    // padding:'0 20px'
  
}))
export const StyledTitleJob = styled(Typography)(({ theme }) => ({
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
      color:`${theme.colors.baseColorGreen}`
    },
  }));