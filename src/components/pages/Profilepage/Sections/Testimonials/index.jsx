import Typography from "@/components/atoms/Typography";
import React from "react";
import {
  StyledDivprofile,
  StyledEditIcon,
  StyledPlusIcon,
} from "../ProfileName/style";
import { StyledLinks } from "@/components/pages/Homepage/sections/DropDownList/style";
import {
  StyledDivTestimonals,
  StyledDivTestimonalsTitle,
  StyledDivTestimonalsimgLink,
} from "./style";

const Testimonials = () => {
  return (
    <StyledDivTestimonals>
      <StyledDivTestimonalsTitle>
        <Typography as="h2">Testimonials</Typography>
        <StyledPlusIcon />
      </StyledDivTestimonalsTitle>
      <Typography as="p">Endorsements from past clients</Typography>
      <StyledDivTestimonalsimgLink>
        <img src="../../../../../../assets/images/Search.png" alt="notfound" />
        <Typography as="p">
          Showcasing client testimonials can strengthen your profile. (+5%)
        </Typography>
        <StyledLinks href="#">Request a testimonial</StyledLinks>
      </StyledDivTestimonalsimgLink>
    </StyledDivTestimonals>
  );
};

export default Testimonials;
