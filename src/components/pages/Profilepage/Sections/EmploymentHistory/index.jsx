import React from "react";
import {
  StyledDivTestimonals,
  StyledDivTestimonalsTitle,
} from "../Testimonials/style";
import Typography from "@/components/atoms/Typography";
import {
  StyledEditIcon,
  StyledPlusIcon,
  StyledTrash,
} from "../ProfileName/style";

const EmploymentHistory = () => {
  return (
    <div>
      <StyledDivTestimonals>
        <StyledDivTestimonalsTitle sx={{ paddingBottom: "30px" }}>
          <Typography as="h2">Employment history</Typography>
          <StyledPlusIcon />
        </StyledDivTestimonalsTitle>
        <StyledDivTestimonalsTitle>
          <Typography as="h4">FrontEnd Developer | Gaza Sky Geeks</Typography>
          <div>
            <StyledEditIcon sx={{ margin: "0 10px" }} />
            <StyledTrash />
          </div>
        </StyledDivTestimonalsTitle>
        <Typography as="p">June 2023 - September 2023</Typography>
      </StyledDivTestimonals>
    </div>
  );
};

export default EmploymentHistory;
