import React,{useState} from 'react'
import { StyledDivTestimonals, StyledDivTestimonalsTitle } from '../Testimonials/style'
import Typography from '@/components/atoms/Typography'
import { StyledPlusIcon, StyledTrash } from '../ProfileName/style'
import { StyledDivcertificate, Styledbtncertificate } from './style';

const Certificate = () => {
    const [showMore, setShowMore] = useState(false);
    const handleShowMoreClick = () => {
        setShowMore(!showMore);
      };
  return (
    <StyledDivTestimonals>
        <StyledDivTestimonalsTitle sx={{paddingBottom:"30px"}}>
        <Typography as="h2">Certifications</Typography>
        <StyledPlusIcon />
        </StyledDivTestimonalsTitle>
        <StyledDivcertificate>
        <img src="../../../../../../assets/images/certificate.png" width='20%'/>
        <div style={{width:'90%'}}>
        <StyledDivTestimonalsTitle >
        <Typography as="h3">responsive-web-design</Typography>
        <StyledTrash /></StyledDivTestimonalsTitle> 
        <Typography as="p">Provider: Quincy Larson (Executive Director)
</Typography>
        <Typography as="p">Issued: September 2023
</Typography>
{showMore ? (
          <>
            <Typography as="p">
            This certification was obtained after 
            I built the following projects and got all automated test suites passed :- 1. Build a Survey Form 2. Build a Tribute Page 3. Build a Technical Documentation Page 4. Build a 
            Product Landing Page 5. Build a Personal Portfolio Webpage
            </Typography>
            <Styledbtncertificate variant="text" onClick={handleShowMoreClick}>
             Hide Description
            </Styledbtncertificate>
          </>
        ) : (
          <Styledbtncertificate variant="text" onClick={handleShowMoreClick}>
            Show Description
          </Styledbtncertificate>
        )}

        
        </div></StyledDivcertificate>
    </StyledDivTestimonals>
  )
}

export default Certificate
