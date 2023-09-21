import styled, { keyframes } from "styled-components";
import { StyledH3, StyledP } from "../../../../atoms/Typography/style";
import Link from "next/link";
export const DropDownListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border:1px solid  #beccbe;
  border-radius:15px;
  margin-top:15px;

`;

export const DropdownButton = styled(StyledP)`
   display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
 
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(100);
  }
`;

export const DropdownContent = styled.div`
  padding: 5px;
  margin-top: 5px;
  animation: ${fadeIn} 0.3s ease-in-out;
   overflow: hidden; 
  transition: max-height 0.3s ease-in-out; 
`;

export const ListPreferences = styled.div`
display: flex;
 align-items: center;
 padding: 0 25px;
 gap: 10px;
 .editicon {
    border-radius: 50%;
    padding:8px;
    border: 1px solid  #beccbe;
    font-size: 20px;
    color:#108a00;
 }

`;








export const StyledLinks = styled(Link)(({ theme }) => ({
  color: '#108a00',
  textDecoration: "none",
  fontSize: "14px",
  "&:hover": {
    textDecoration: "underline",
  },
}));