"use client";
import React, { useState, useEffect } from "react";
import { StyledDivviewprofiletitle } from "../EditProfileLeftSide/style";
import Typography from "@/components/atoms/Typography";
import {
  StyledBsLink,
  StyledEditIcon,
  StyledPlusIcon,
} from "../ProfileName/style";
import {
  StyledDivmyjobs,
  StyledDivprofilehowiam,
  StyledDivprofilejobtitle,
  StyledDiveachmyjobs,
  StyledDivProjectCatalog,
} from "./style";
import Button from "@mui/material/Button";
import { StyledLinks } from "@/components/pages/Homepage/sections/DropDownList/style";
import { ProtofolioMyJobs, SkillsCiph } from "@/mock/ProtofolioMyJobs";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Chip from "@mui/material/Chip";
import CustomizedDialog from "../CustomizedDialog";
import TitleEditDialog from "../CustomizedDialogComponents/TitleEditDialog";
import OverViewDialog from "../CustomizedDialogComponents/OverViewDialog";
import SkillsDialog from "../CustomizedDialogComponents/SkillsDialog";
import HourlyRate from "../CustomizedDialogComponents/HourlyRate";
const itemsPerPage = 3;

const EditProfileRightSide = () => {
  const [showMore, setShowMore] = useState(false);
  const [page, setPage] = useState(1);
  const [openDialog1, setOpenDialog1] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);
  const [openDialog3, setOpenDialog3] = useState(false);
  const [openDialog4, setOpenDialog4] = useState(false);
  const [updatedRate, setUpdatedRate] = useState("20.00");
  const [skillsText, setSkillsText] = useState("");
  const [title, setTitle] = useState(
    "Front-End Developer || React Js || Next Js"
  );
  const [overviewText, setOverviewText] = useState(`
  👋 Hi, I am [Saja Shoaib], a Front-End
   developer with a passion for crafting engaging and user-friendly web applications using React.js || Next Js.
  💼 My web development journey has given me a solid foundation in
  building responsive
  and intuitive user interfaces. I thrive on solving problems and
  always look forward to taking
  
  on new challenges. Collaboration is key in my work, and I am always
  keen to work with 
  experienced colleagues and contribute my fresh perspective to the
  team.
`);

  useEffect(() => {
    const initialSkills = SkillsCiph.map((item) => item.skill).join(", ");
    setSkillsText(initialSkills);
  }, []);

  const handleSaveSkills = (newSkillsText) => {
    setSkillsText(newSkillsText);
    handleCloseDialog3();
  };
  const handleSaveRate = (newRate) => {
    setUpdatedRate(newRate);
    handleCloseDialog4();
  };

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
    handleCloseDialog1();
  };
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
  const handleOpenDialog3 = () => {
    setOpenDialog3(true);
  };

  const handleCloseDialog3 = () => {
    setOpenDialog3(false);
  };
  const handleOpenDialog4 = () => {
    setOpenDialog4(true);
  };

  const handleCloseDialog4 = () => {
    setOpenDialog4(false);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };
  const handleOverviewChange = (newText) => {
    setOverviewText(newText);
    handleCloseDialog2();
  };
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPhotos = ProtofolioMyJobs.slice(startIndex, endIndex);

  return (
    <div>
      <StyledDivprofilehowiam>
        <StyledDivprofilejobtitle>
          <StyledDivviewprofiletitle>
            <Typography as="h1">{title}</Typography>
            <StyledEditIcon onClick={handleOpenDialog1} />
            <CustomizedDialog
              open={openDialog1}
              onClose={handleCloseDialog1}
              title="Edit your title"
            >
              <TitleEditDialog text={title} onSaveChanges={handleTitleChange} />
            </CustomizedDialog>
          </StyledDivviewprofiletitle>
          <StyledDivviewprofiletitle>
            <Typography as="h2">{updatedRate}$</Typography>
            <StyledEditIcon onClick={handleOpenDialog4} />
            <CustomizedDialog
              open={openDialog4}
              onClose={handleCloseDialog4}
              title="Change hourly rate"
            >
              <HourlyRate onSave={handleSaveRate} />
            </CustomizedDialog>
            <StyledBsLink />
          </StyledDivviewprofiletitle>
        </StyledDivprofilejobtitle>

        <StyledDivviewprofiletitle>
          <div style={{ width: "90%" }}>
            <Typography as="p">{overviewText}</Typography>
          </div>
          <StyledEditIcon onClick={handleOpenDialog2} className="edit" />{" "}
          <CustomizedDialog
            open={openDialog2}
            onClose={handleCloseDialog2}
            title="OverView"
          >
            <OverViewDialog
              text={overviewText}
              onSaveChanges={handleOverviewChange}
            />
          </CustomizedDialog>
        </StyledDivviewprofiletitle>

        {showMore ? (
          <>
            <Typography as="p">
              🖥️I have experience in the fields of:-
              <Typography as="p"> - HTML</Typography>
              <Typography as="p"> - CSS</Typography>
              <Typography as="p"> - BootStrap,</Typography>
              <Typography as="p"> - JavaScript</Typography>
              <Typography as="p"> - Next Js</Typography>
              <Typography as="p"> - TypeScript</Typography>
              <Typography as="p"> - React.js.</Typography>
              📧 Feel free to reach out to me at [islamsaja@gmail.com] or
              connect with me here on Upwork.
            </Typography>
            <Button variant="text" onClick={handleShowMoreClick}>
              Less
            </Button>
          </>
        ) : (
          <Button variant="text" onClick={handleShowMoreClick}>
            More
          </Button>
        )}
      </StyledDivprofilehowiam>

      <StyledDivprofilehowiam>
        <Typography as="h4"> Work History</Typography>
        <Typography as="p">
          No work yet. Once you start getting hired on Upwork, your work with
          clients will show up here.
        </Typography>
        <StyledLinks href="#"> Start your Search</StyledLinks>
      </StyledDivprofilehowiam>

      <StyledDivprofilehowiam>
        <StyledDivviewprofiletitle>
          <Typography as="h4">Portfolio </Typography>
          <StyledPlusIcon />
        </StyledDivviewprofiletitle>
        <StyledDivmyjobs>
          {displayedPhotos.map((item, index) => (
            <StyledDiveachmyjobs key={index}>
              <img src={item.image} alt={`Image ${index}`} width="100%" />
              <StyledLinks href={item.url} key={item.id}>
                {item.title}
              </StyledLinks>
            </StyledDiveachmyjobs>
          ))}
        </StyledDivmyjobs>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(ProtofolioMyJobs.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              padding: "20px 0",
            }}
          />
        </Stack>
      </StyledDivprofilehowiam>

      <StyledDivprofilehowiam>
        <StyledDivviewprofiletitle>
          <Typography as="h4">My Skills</Typography>

          <StyledEditIcon onClick={handleOpenDialog3} />
          <CustomizedDialog
            open={openDialog3}
            onClose={handleCloseDialog3}
            title="Edit Skills"
          >
            <SkillsDialog
              initialSkills={skillsText}
              onSave={handleSaveSkills}
            />
          </CustomizedDialog>
        </StyledDivviewprofiletitle>
        {skillsText && (
          <div>
            {typeof skillsText === "string" &&
              skillsText
                .split(",")
                .map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill.trim()}
                    style={{ margin: "5px" }}
                  />
                ))}
          </div>
        )}{" "}
      </StyledDivprofilehowiam>
      <StyledDivProjectCatalog>
        <div className="titlebtncatalog">
          <Typography as="h4">Your Project Catalog </Typography>
          <Button variant="outlined" className="btna">
            Manage Projects
          </Button>
        </div>
        <Typography as="p">
          Projects are a new way to earn on Upwork that helps you do more of the
          <br />
          work you love to do. Create project offerings that highlight your
          <br />
          strengths and attract more clients.
        </Typography>
      </StyledDivProjectCatalog>
    </div>
  );
};

export default EditProfileRightSide;
