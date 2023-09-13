import Typography from '@/components/atoms/Typography'
import React from 'react'
import { StyledFooterDiv, StyledFooterTypo } from './style'

const FooterLoginSignUp = () => {
  return (
    <StyledFooterDiv>
      <StyledFooterTypo as='p'> &copy; 2015 - 2023 Upwork&reg; Global Inc.
      <a href="/privacy-policy">Privacy Policy</a>
      </StyledFooterTypo>
        </StyledFooterDiv>
  )
}

export default FooterLoginSignUp
