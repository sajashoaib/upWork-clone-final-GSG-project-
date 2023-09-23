import React from "react";
import {
  StyledJobDivDetail,
  StyledJobDivDetail1,
  StyledJobDivDetail1Apply,
  StyledJobDivDetail2,
  StyledJobDivDetail2TitlepostedTime,
  StyledJobDivDetail2activityjobs,
  StyledJobDivDetail2priceexperience,
  StyledJobDivDetail1AboutClient,
} from "./style";
import Typography from "@/components/atoms/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { StyledLinks } from "../../DropDownList/style";
import { BiSolidHelpCircle } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";
import Button from "@mui/material/Button";
import { BsFlagFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import Link from "next/link";
import { useJobData } from "@/context/JobDataContext";

const JobDetails = ({ data, width, margin }) => {
  if (!data) {
    return <p></p>;
  }
  const { setJob } = useJobData();

  const handleApplyNowClick = () => {
    setJob(data);
  };
  return (
    <StyledJobDivDetail style={{ width, margin }}>
      <StyledJobDivDetail1>
        <div style={{ borderBottom: "1px solid #beccbe" }}>
          <StyledJobDivDetail2TitlepostedTime>
            <Typography as="h3"> {data.title}</Typography>
            <StyledLinks href="/">{data.jobname}</StyledLinks>
            <Typography className="span">Posted {data.postedtime}</Typography>
            <Typography as="p">
              <FaLocationDot className="locatIcon" /> {data.employeelocation}
            </Typography>
          </StyledJobDivDetail2TitlepostedTime>
        </div>

        <StyledJobDivDetail2TitlepostedTime
          style={{ borderBottom: "1px solid #beccbe" }}
        >
          <Typography as="p"> {data.description}</Typography>
        </StyledJobDivDetail2TitlepostedTime>

        <StyledJobDivDetail2priceexperience
          style={{ borderBottom: "1px solid #beccbe" }}
        >
          <div>
            <span className="span">
              {" "}
              <FaMoneyBill className="iconpriceexperience" />
              {data.budget}
            </span>
            <Typography as="p">{data.priceway}</Typography>
          </div>

          <div>
            <span className="span">
              {" "}
              <BsPersonFillCheck className="iconpriceexperience" />
              {data.experiencerate}
            </span>
            <Typography as="p">{data.descriptionexperience}</Typography>
          </div>
        </StyledJobDivDetail2priceexperience>

        <div style={{ borderBottom: "1px solid #beccbe", padding: "0 10px" }}>
          <Typography as="p">
            Project Type: <span>{data.projecttype}</span>
          </Typography>
        </div>

        <StyledJobDivDetail2TitlepostedTime
          style={{ borderBottom: "1px solid #beccbe" }}
        >
          <Typography as="h4">Skills and Expertise</Typography>
          <Stack direction="row" spacing={1}>
            {Array.isArray(data.chips) ? (
              data.chips.map((chip, index) => (
                <Chip key={index} label={chip} variant="outlined" />
              ))
            ) : (
              <Chip
                label={data.chips}
                variant="outlined"
                onClick={handleClick}
              />
            )}
          </Stack>
        </StyledJobDivDetail2TitlepostedTime>
        <StyledJobDivDetail2activityjobs>
          <Typography as="h4">Activity on this job</Typography>
          <Typography as="p">
            {" "}
            Proposals:
            <BiSolidHelpCircle className="green" />
            <span style={{ color: "black" }}> {data.Proposalsnumber} </span>
          </Typography>
          <Typography as="p">
            {" "}
            Proposals:
            <BiSolidHelpCircle className="green" />
            <span style={{ color: "black" }}>{data.Lastviewedbyclient} </span>
          </Typography>
          <Typography as="p">
            {" "}
            Interviewing:<span style={{ color: "black" }}> 0</span>
          </Typography>
          <Typography as="p">
            {" "}
            Invites sent: <span style={{ color: "black" }}> 0</span>
          </Typography>
          <Typography as="p">
            {" "}
            Unanswered invites:<span style={{ color: "black" }}> 0</span>
          </Typography>

          <Typography as="h3">
            Upgrade your membership to see the bid range{" "}
            <BiSolidHelpCircle className="green" />
          </Typography>
        </StyledJobDivDetail2activityjobs>
      </StyledJobDivDetail1>

      <StyledJobDivDetail2>
        <StyledJobDivDetail1Apply>
          <Link href="/apply">
            {" "}
            <Button
              variant="contained"
              className="btnapply a"
              onClick={handleApplyNowClick}
            >
              Apply Now
            </Button>
          </Link>
          <Button variant="outlined" className="btnapply b">
            {" "}
            <BsHeart className="green" /> Saved Job
          </Button>
          <StyledLinks href="/">
            <BsFlagFill className="green" /> Flag as inappropriate
          </StyledLinks>
          <Typography as="p">Send a proposal for:{data.connects} </Typography>
          <Typography as="p">
            {" "}
            Available Connects:{data.availableconnects}
          </Typography>
        </StyledJobDivDetail1Apply>

        <StyledJobDivDetail1AboutClient>
          <Typography as="h4">About the client</Typography>
          <Typography as="p">
            {data.paymentmethodverified} <BiSolidHelpCircle className="green" />
          </Typography>
          <Typography as="h5">{data.clientcity}</Typography>
          <Typography as="p">{data.publishtime}</Typography>
          <Typography as="h5">{data.postedjob}</Typography>

          <Typography as="p">{data.membership}</Typography>
        </StyledJobDivDetail1AboutClient>
      </StyledJobDivDetail2>
    </StyledJobDivDetail>
  );
};

export default JobDetails;
