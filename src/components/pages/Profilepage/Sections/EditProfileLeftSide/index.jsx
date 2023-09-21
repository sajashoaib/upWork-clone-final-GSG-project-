"use client";
import Typography from "@/components/atoms/Typography";
import React, { useState } from "react";
import {
  StyledEditIcon,
  StyledPlusIcon,
  StyledTrash,
} from "../ProfileName/style";
import Button from "@mui/material/Button";
import CustomizedDialog from "../CustomizedDialog";
import ViewProfileEditDialog from "../CustomizedDialogComponents/ViewProfileEditDialog";
import {
  StyledDivviewprofile,
  StyledDivviewprofilebtn,
  StyledDivviewprofiletitle,
  StyledGitHupSyackbtn,
} from "./style";
import { BsStackOverflow } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import VideIntroductionDialogComponents from "../CustomizedDialogComponents/VideIntroductionDialgComponents";
const EditProfileLeftSide = () => {
  const [openDialog1, setOpenDialog1] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);

  const handleOpenDialog1 = () => {
    setOpenDialog1(true);
  };

  const handleCloseDialog1 = () => {
    setOpenDialog1(false);
  };
  const handleOpenDialog2 = () => {
    setOpenDialog2(true);
  };

  const handleCloseDialog2 = () => {
    setOpenDialog2(false);
  };
  return (
    <div>
      <StyledDivviewprofile>
        <StyledDivviewprofiletitle>
          <Typography as="h3">View profile</Typography>
          <StyledEditIcon onClick={handleOpenDialog1} />
          <StyledPlusIcon />
          <CustomizedDialog
            open={openDialog1}
            onClose={handleCloseDialog1}
            title="Security question"
          >
            <ViewProfileEditDialog />
          </CustomizedDialog>
        </StyledDivviewprofiletitle>
        <StyledDivviewprofilebtn variant="text">
          Front End Developer
        </StyledDivviewprofilebtn>
        <StyledDivviewprofilebtn variant="text">
          All Work
        </StyledDivviewprofilebtn>
      </StyledDivviewprofile>

      <StyledDivviewprofile>
        <StyledDivviewprofiletitle>
          <Typography as="h4">Video introduction</Typography>
          <StyledPlusIcon onClick={handleOpenDialog2} />
          <CustomizedDialog
            open={openDialog2}
            onClose={handleCloseDialog2}
            title="Add video introduction"
          >
            <VideIntroductionDialogComponents />
          </CustomizedDialog>
        </StyledDivviewprofiletitle>
        <StyledDivviewprofiletitle>
          <Typography as="h4">Hours per week </Typography>
          <StyledEditIcon />
        </StyledDivviewprofiletitle>
        <Typography as="p">More than 30 hrs/week</Typography>
        <Typography as="p">No contract-to-hire preference set</Typography>
        <StyledDivviewprofiletitle>
          <Typography as="h3">Languages </Typography>
          <StyledEditIcon />
          <StyledPlusIcon />
        </StyledDivviewprofiletitle>
        <Typography as="p">
          English:<span>Conversational</span>
        </Typography>
        <Typography as="p">
          Arabic:<span>Native or Bilingual</span>
        </Typography>
        <Typography as="h3">Verifications</Typography>
        <StyledDivviewprofiletitle>
          <Typography as="h5">Military Veteran </Typography>
          <StyledPlusIcon />
        </StyledDivviewprofiletitle>
        <StyledDivviewprofiletitle>
          <Typography as="h4">Education</Typography>
          <StyledPlusIcon />
        </StyledDivviewprofiletitle>
        <StyledDivviewprofiletitle>
          <Typography as="h3">Al-Aqsa University </Typography>
          <StyledEditIcon />
          <StyledTrash />
        </StyledDivviewprofiletitle>
        <Typography as="p">
          Bachelor of Computer Science (BCompSc), Applied information technology
        </Typography>
        <Typography as="p">2021-2023</Typography>
        <StyledDivviewprofiletitle>
          <Typography as="h3">Al-Aqsa University</Typography>
          <StyledEditIcon />
          <StyledTrash />
        </StyledDivviewprofiletitle>
        <Typography as="p">Nursing</Typography>
        <Typography as="p">2019-2021</Typography>
        <StyledGitHupSyackbtn variant="outlined">
          <FaGithubAlt />
          GitHub
        </StyledGitHupSyackbtn>
        <StyledGitHupSyackbtn variant="outlined">
          <BsStackOverflow />
          Stack Overflow
        </StyledGitHupSyackbtn>
      </StyledDivviewprofile>
    </div>
  );
};

export default EditProfileLeftSide;
