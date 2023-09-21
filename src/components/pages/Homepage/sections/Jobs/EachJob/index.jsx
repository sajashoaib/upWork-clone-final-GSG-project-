'use client'
import React, { useEffect, useState } from "react";
import Typography from "@/components/atoms/Typography";
import { BiDislike } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { StyledEachJob, StyledDivlittleDetailJob, StyledRating, StyledOpenWindow } from "./style";
import { FaLocationDot } from "react-icons/fa6";
import { StyledTitleJob } from "../style";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Drawer from "../../Drawer";
import {GrPrevious} from 'react-icons/gr'
import JobDetails from "../../Drawer/JobDetails";
import { StyledLinks } from "../../DropDownList/style";
import {IoMdOpen} from 'react-icons/io'
import { MdVerified } from 'react-icons/md';
import { VscUnverified } from 'react-icons/vsc';
import { useRouter } from "next/navigation";

// Create an object to map icon strings to components
const iconComponents = {
  MdVerified: <MdVerified />,
  VscUnverified: <VscUnverified />}
const EachJob = ({
  title,
  description,
  chips,
  postedtime,
  budget,
  location,
  delievredtime,
  experiencerate,
  icon,
  priceway,
  Proposalsnumber,
  defaultvalue,
  precision,
  spent,
  verifiedType,
  jobname,
  employeelocation,
  descriptionexperience,
  projecttype,
  Lastviewedbyclient,
  connects,
  availableconnects,
  paymentmethodverified,
  postedjob,
  membership,
  clientcity,
  publishtime,
   data
}) => {
    const handleClick = () => {
      console.info("You clicked the Chip.");
    };
  
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [clickedComponentData, setClickedComponentData] = useState(null); 
  const selectedIcon = iconComponents[icon] || null;
  const router = useRouter();

  const openDrawer = (data) => {
    setClickedComponentData(data); 

    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  const openInNewWindow = (data) => {
    if (data) {
      const queryParams = new URLSearchParams({ data: JSON.stringify(data) });
      const newWindowUrl = `/jobInNewWindow?${queryParams.toString()}`;
      window.open(newWindowUrl, '_blank');
    }
  };
  return (
    <div>
      <StyledEachJob
       onClick={()=>data && openDrawer(data)}
       >
        <SwipeableDrawer
          anchor="right"
          open={drawerOpen}
          onClose={closeDrawer}
        onOpen={() => {}} 

        >
          <div
            style={{
              width: "1000px",
              padding: "25px",
            }}
          > 
          <StyledOpenWindow>
          <Button
              onClick={(e) => {
                e.stopPropagation();
                closeDrawer();
              }}
            > <GrPrevious/>
            </Button>
             {/* <Button onClick={() => openInNewWindow(clickedComponentData)}>
                <IoMdOpen /> Open Job in a new window
              </Button>  */}
            <StyledLinks href="/job" ><IoMdOpen/> Open Job in a new window</StyledLinks>
            </StyledOpenWindow>
               <JobDetails   data={clickedComponentData} />
            
          </div>
        </SwipeableDrawer>
        <div className="titlesWithicon">
          <StyledTitleJob as="h3">{title}</StyledTitleJob>
          <div>
            <BiDislike className="icons" />
            <AiOutlineHeart
              className="icons "
            />
          </div>
        </div>
        <StyledDivlittleDetailJob>
          {" "}
          <span className="span">{priceway}:</span>
          <span className="span">-{experiencerate}</span>
          <span className="span">Time: {delievredtime} </span>
          <span className="span">Budget: {budget}</span>
          <span className="span">Posted {postedtime}</span>
        </StyledDivlittleDetailJob>
        <Typography as="p"> {description}</Typography>

        <Stack direction="row" spacing={1}>
          {Array.isArray(chips) ? (
            chips.map((chip, index) => (
              <Chip
                key={index}
                label={chip}
                variant="outlined"
                onClick={handleClick}
              />
            ))
          ) : (
            <Chip label={chips} variant="outlined" onClick={handleClick} />
          )}
        </Stack>

        <Typography as="p"> Proposals:{Proposalsnumber}</Typography>
        <StyledDivlittleDetailJob>
          <i>{selectedIcon}</i>
          <span className="span">{verifiedType}</span>

          <StyledRating
            name="half-rating"
            defaultValue={defaultvalue}
            precision={precision}
            size="medium"
          />

          <span className="span">{spent} spent</span>
          <span className="span">
            <FaLocationDot /> {location}
          </span>
        </StyledDivlittleDetailJob>
      </StyledEachJob>
    </div>
  );
};

export default EachJob;
