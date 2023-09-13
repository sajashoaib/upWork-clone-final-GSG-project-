'use client'
import React from 'react'
import { StyledButtonWithIcon } from './style'

const ButtonWithIcon = ({ label, icon, backgroundColor, textColor, onClick ,width}) => {
  return (
    <div>
        <StyledButtonWithIcon
      variant="contained"
     width={width}
      startIcon={icon}
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
    > 
    {/* <div style={{ backgroundColor: 'white', borderRadius:'50px',padding:'15px 20px'}}>
        {icon}
    </div> */}
      {label}
    </StyledButtonWithIcon>
    </div>
  )
}

export default ButtonWithIcon
