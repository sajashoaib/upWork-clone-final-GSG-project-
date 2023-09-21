import { styled } from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import { BsLink, BsTrash } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

export const StyledDivprofile = styled("div")(({ theme }) => ({
    border: `1px solid ${theme.colors.gray03}`,
    borderRadius:'15px' ,
    margin:'15px 0',
      '.btna':{
            borderRadius:"20px",
            border:`1px solid ${theme.colors.baseColorGreen} `,
            color:theme.colors.baseColorGreen,
           textTransform:'none',
           fontSize:'16px',
           marginRight:'15px',
           padding:'5px 20px'
        },
  }));
  

export const StyledDivprofilename = styled("div")(({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.gray03}`,
    display: "flex",
    justifyContent:'space-between',
    padding:'10px'
  }));
  
  export const StyledEachDivprofilename1 = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent:'space-between',
    width:'40%',
    alignItems:'center',
    '.disabled':{
        padding :'0 8%',
        borderRadius:'20px',
    }

  }));
  export const StyledEditIcon = styled(MdModeEdit)(({ theme }) => ({
    border: `2px solid ${theme.colors.gray03}`,
       borderRadius:'50%',
    padding:'5px',
    color:theme.colors.baseColorGreen,
    fontSize:'20px',
    cursor:'pointer'
    

  }));

  export const StyledPlusIcon = styled(AiOutlinePlus)(({ theme }) => ({
    border: `2px solid ${theme.colors.gray03}`,
       borderRadius:'50%',
    padding:'5px',
    color:theme.colors.baseColorGreen,
    fontSize:'20px',
    cursor:'pointer'
    

  }));

  export const StyledTrash = styled(BsTrash)(({ theme }) => ({
    border: `2px solid ${theme.colors.gray03}`,
       borderRadius:'50%',
    padding:'5px',
    color:theme.colors.baseColorGreen,
    fontSize:'20px',
    cursor:'pointer'
    

  }));
  export const StyledBsLink = styled(BsLink)(({ theme }) => ({
    border: `2px solid ${theme.colors.gray03}`,
       borderRadius:'50%',
    padding:'5px',
    color:theme.colors.baseColorGreen,
    fontSize:'20px',
    cursor:'pointer'
    

  }));


  export const StyledEachDivprofilename2 = styled("div")(({ theme }) => ({
        width:'40%',
        padding:'20px 0',
     

'.btnb':{
            borderRadius:"20px",
            backgroundColor:theme.colors.baseColorGreen,
            color:'white',
           textTransform:'none',
           fontSize:'16px',
           padding:'5px 30px'

        }
  }));

  export const StyledDivprofiledetail = styled("div")(({ theme }) => ({
    display: "flex",
     width:'100%'
  }));

  export const StyledDivprofiledetailInfo = styled("div")(({ theme }) => ({
    borderRight: `1px solid ${theme.colors.gray03}`,
    width:'30%'
  }));
  
  export const StyledDivprofiledescription = styled("div")(({ theme }) => ({
    width:'70%'
  }));