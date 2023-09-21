import Typography from "@/components/atoms/Typography";
import { styled } from "@mui/material";

export const StyledJobs=styled('div')(({theme})=>({
  
}))
export const StyledTitleJob = styled(Typography)(({ theme }) => ({
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
      color:`${theme.colors.baseColorGreen}`
    },
  }));