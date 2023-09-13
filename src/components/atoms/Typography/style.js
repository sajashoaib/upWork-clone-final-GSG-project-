'use client'
import { styled } from "@mui/material";

export const StyledH1=styled('h1')`
color:${(props)=>props.theme.colors.darkgreen};
font-family: ${(props)=>props.theme.typography.helvetica};
font-size: ${(props)=>props.theme.fontsize.xxl};
font-weight: 500px;
line-height: 32px;
`
export const StyledH2=styled('h2')`
color:${(props)=>props.theme.colors.darkgreen};
font-family: ${(props)=>props.theme.typography.helvetica};
font-size: ${(props)=>props.theme.fontsize.md};
font-weight: 500px;
line-height: 28px;
`
export const StyledH3=styled('h3')`
color:${(props)=>props.theme.colors.darkgreen};
font-family: ${(props)=>props.theme.typography.helvetica};
font-size: ${(props)=>props.theme.fontsize.mdd};
font-weight: 500px;
line-height: 24px;
`
export const StyledH4=styled('h4')`
color:${(props)=>props.theme.colors.darkgreen};
font-family: ${(props)=>props.theme.typography.helvetica};
font-size: ${(props)=>props.theme.fontsize.sm};
font-weight: 500px;
line-height: 22px;
`
export const StyledH5=styled('h5')`
color:${(props)=>props.theme.colors.darkgreen};
font-family: ${(props)=>props.theme.typography.helvetica};
font-size: ${(props)=>props.theme.fontsize.xs};
`

export const StyledH6=styled('h6')`
color:${(props)=>props.theme.colors.smoke};
font-family: ${(props)=>props.theme.typography.helvetica};
font-size: ${(props)=>props.theme.fontsize.xxs};
`

export const StyledP=styled('p')`
color:${(props)=>props.theme.colors.darkgreen};
font-family: ${(props)=>props.theme.typography.helvetica};
font-size: ${(props)=>props.theme.fontsize.xs};
/* line-height: 22px; */
letter-spacing:0.6px;

`
