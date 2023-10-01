import React from 'react'
import {StyledButton } from './style';

const Buttons = ({label,width}) => {
  return (
    <div>
      <StyledButton variant="contained"  
       width={width}
       type='submit'
    
       >
      {label}
    </StyledButton>
    </div>
  )
}

export default Buttons
