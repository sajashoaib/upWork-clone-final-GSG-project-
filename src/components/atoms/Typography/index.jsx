import React from 'react'
import { StyledH1, StyledH5 ,StyledH2,StyledH4,StyledH3,StyledH6,StyledP} from './style';

const Typography = ({ as="p", children , ...props }) => {
  
    switch (as.toLowerCase()) {
        case "h1":
          return (
            <StyledH1 {...props}>
              {children}
            </StyledH1>
          );
        case "h2":
          return (
            <StyledH2  {...props}>
              {children}
            </StyledH2>
          );
        case "h3":
          return (
            <StyledH3  {...props}>
              {children}
            </StyledH3>
          );
        case "h4":
          return (
            <StyledH4  {...props}>
              {children}
            </StyledH4>
          );
        case "h5":
          return (
            <StyledH5 {...props}>
              {children}
            </StyledH5>
          );
        case "h6":
          return (
            <StyledH6 {...props}>
              {children}
            </StyledH6>
          );
        // // variant for p 
        // // default => 16 px 
        // // default-muted => 16px color:muted
        // // small => 14 px 
        // // small-muted => 14px color:muted
        // // micro => 12 px 
        // // micro-muted => 12px color:muted
        case "p" :
          return <StyledP {...props}>{children}</StyledP>
          default : 
          return <StyledP  as={as} {...props}>{children}</StyledP>
        };

}

export default Typography

