import Typography from "@/components/atoms/Typography";
import React from "react";
import { StyledPlusIcon } from "../ProfileName/style";
import { StyledLinks } from "@/components/pages/Homepage/sections/DropDownList/style";
import {
  StyledDivTestimonals,
  StyledDivTestimonalsTitle,
  StyledDivTestimonalsimgLink,
} from "../Testimonials/style";

const OtherExperiences = () => {
  return (
    <StyledDivTestimonals>
      <StyledDivTestimonalsTitle>
        <Typography as="h2">Other Experiences</Typography>
        <StyledPlusIcon />
      </StyledDivTestimonalsTitle>
      <Typography as="p">Endorsements from past clients</Typography>
      <StyledDivTestimonalsimgLink>
        <img src="../../../../../../assets/images/folder.png" alt="notfound" />
        <Typography as="p">
          Highlighting relevant experiences can boost your visibility in our
          search results. (+5%)
        </Typography>
        <StyledLinks href="#">Add an experience</StyledLinks>
      </StyledDivTestimonalsimgLink>
    </StyledDivTestimonals>
  );
};

export default OtherExperiences;
