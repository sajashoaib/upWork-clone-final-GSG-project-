import { styled } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


export const StyledDivProtofolio=styled('div')(({theme})=>({
display:'flex',
flexDirection:'column',
textAlign:'center',
border:`1px solid ${theme.colors.gray03}`,
borderRadius:'15px',
justifyContent:'center',
alignItems:'center',
padding:'20px 0 10px 0',

h3:{
    
textDecoration:'underline',
cursor:'pointer',
textAlign:'left',

'&:hover': {
    color: theme.colors.baseColorGreen, 
  },


},
h5:{ color: theme.colors.grass, 
    cursor:'pointer',
    textAlign:'left',
    
    '&:hover': {
           textDecoration:'underline',

      },
}


}))
//  export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//     height: 10,
//     borderRadius: 5,
//     [`&.${linearProgressClasses.colorPrimary}`]: {
//     //   backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//     backgroundColor:'red'
//     },
//     [`& .${linearProgressClasses.bar}`]: {
//       borderRadius: 5,
//     //   backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
//     backgroundColor:'red'
//     },
//   }));