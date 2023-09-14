import Typography from "@/components/atoms/Typography";
import React from "react";
import { BiDislike } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { StyledEachJob, StyledDivlittleDetailJob, StyledRating } from "./style";
import Rating from "@mui/material/Rating";
import { FaLocationDot } from "react-icons/fa6";
import { StyledTitleJob } from "../style";

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
}) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <div>
      <StyledEachJob>
        <div className="titlesWithicon">
          <StyledTitleJob as="h3">{title}</StyledTitleJob>
          <div>
            <BiDislike  className="icons"/>
            <AiOutlineHeart  className="icons"/>
          </div>
        </div>
        <StyledDivlittleDetailJob>
          {" "}
          <span className="span">{priceway}</span> 
          <span className="span">-{experiencerate}</span>
          <span className="span">Time: {delievredtime} </span>
          <span className="span">Budget: {budget}</span>
          <span className="span">Posted {postedtime}</span>
        </StyledDivlittleDetailJob>
        <Typography as="p"> {description}</Typography>

  
<Stack direction="row" spacing={1}>
  {Array.isArray(chips) ? (
    chips.map((chip, index) => (
      <Chip key={index} label={chip} variant="outlined" onClick={handleClick} />
    ))
  ) : (
    <Chip label={chips} variant="outlined" onClick={handleClick} />
  )}
</Stack>






        <Typography as="p"> Proposals:{Proposalsnumber}</Typography>
        <StyledDivlittleDetailJob>
          <i>{icon}</i>
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
