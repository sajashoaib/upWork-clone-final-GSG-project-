"use client";
import Typography from "@/components/atoms/Typography";
import React from "react";
import { useRouter } from "next/router";
import { BiSolidHelpCircle } from "react-icons/bi";
import { StyledDivProposalSettings ,StyledDivjobdetails, StyledDivjobdetailsA, StyledDivjobdetailsB} from "./style";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import {BsFillCalendarMonthFill} from 'react-icons/bs'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {IoIosPerson} from 'react-icons/io'

const ProposalSettings = ({ jobData }) => {
  return (
    <div>
      <StyledDivProposalSettings>
        <Typography as="h2">Proposal settings</Typography>
        <Typography as="p">
          This proposal requires {jobData.connects} Connects{" "}
          <BiSolidHelpCircle className="green" />{" "}
        </Typography>
        <Typography as="p">
          When you submit this proposal, youll have 42 Connects remaining.
        </Typography>
      </StyledDivProposalSettings>

      <StyledDivProposalSettings>
        <Typography as="h2">Job details</Typography>
        <StyledDivjobdetails>
        <StyledDivjobdetailsA> 
                   <Typography as="h4">{jobData.title}</Typography>

                 <div className="TypoChip">
                 <Chip label={jobData.jobname} /> 
                <Typography as="p">Posted: {jobData.postedtime}</Typography>
               </div>

        <Typography as="p">{jobData.description}</Typography></StyledDivjobdetailsA>
           
           <StyledDivjobdetailsB>
        <Typography as="p">
            <IoIosPerson className="iconjobdetail"/> 
            {jobData.experiencerate}</Typography>
        <span>Experience Level</span>

      <Typography  as="p">
        <AiOutlineDollarCircle className="iconjobdetail"/> 
        Propose your terms</Typography>
      <span>{jobData.priceway}</span>

        <Typography as="p">
            <BsFillCalendarMonthFill className="iconjobdetail"/> 
            {jobData.delievredtime}</Typography>
        <span>Project Length</span>

        </StyledDivjobdetailsB>
</StyledDivjobdetails>

        <Typography as="h4">Skills and expertise</Typography>
        <Stack direction="row" spacing={1}>
          {Array.isArray(jobData.chips) ? (
            jobData.chips.map((chip, index) => (
              <Chip key={index} label={chip} />
            ))
          ) : (
            <Chip label={data.chips} variant="outlined" onClick={handleClick} />
          )}
        </Stack>
         
      </StyledDivProposalSettings>
    </div>
  );
};

export default ProposalSettings;
