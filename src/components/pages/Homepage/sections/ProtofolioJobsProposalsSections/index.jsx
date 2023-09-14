"use client";
import Typography from "@/components/atoms/Typography";
import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { StyledDivProtoJobPropslas, StyledDivTitleIcon,StyledeachDivProtoJobPropslas } from "./style";

const ProtofolioJobsProposalsSections = ({ title, text ,image}) => {
  return (
    <StyledeachDivProtoJobPropslas>
        <StyledDivTitleIcon>
          <Typography as="h4">{title} </Typography>
          <GrLinkNext />
        </StyledDivTitleIcon>
        <div className="typoimg">

       
        <Typography as="p">{text}</Typography>
        <img src={image} className="img1"/> </div>
    </StyledeachDivProtoJobPropslas>
  );
};

export default ProtofolioJobsProposalsSections;
