"use client";
import Typography from "@/components/atoms/Typography";
import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { StyledDivProtoJobPropslas, StyledDivTitleIcon,StyledeachDivProtoJobPropslas } from "./style";

const ProtofolioJobsProposalsSections = ({ title, text }) => {
  return (
    <StyledeachDivProtoJobPropslas>
        <StyledDivTitleIcon>
          <Typography as="h4">{title} </Typography>
          <GrLinkNext />
        </StyledDivTitleIcon>
        <Typography as="p">{text}</Typography>
    </StyledeachDivProtoJobPropslas>
  );
};

export default ProtofolioJobsProposalsSections;
