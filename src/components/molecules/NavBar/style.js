import { InputBase, styled } from "@mui/material";

 export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    color:'black',
    '&:hover': {
      backgroundColor: theme.colors.gray04,
    },
     width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));
  
 export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
export  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '25ch',
      },
    },
  }));
export const StyledSearcDiv=styled('div')`
background-color:white;
display: flex ;
justify-content : center;
align-items: center;
border-radius: 50px;
border:1px solid #5e6d55;
&:hover {
    background-color: #beccbe;
    color: white;
  }

`
export const StyledSelectDiv=styled('div')`
display: flex ;
align-items: center;
margin-left:25px;


`