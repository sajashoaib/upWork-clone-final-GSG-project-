"use client";
import React, { useState } from "react";
import Typography from "@/components/atoms/Typography";
import Button from "@mui/material/Button";
import { MdModeEdit } from "react-icons/md";
import {
  StyledDivprofile,
  StyledDivprofiledescription,
  StyledDivprofiledetail,
  StyledDivprofiledetailInfo,
  StyledDivprofilename,
  StyledEachDivprofilename1,
  StyledEachDivprofilename2,
  StyledEditIcon,
} from "./style";
import EditProfileLeftSide from "../EditProfileLeftSide";
import EditProfileRightSide from "../EditProfileRightSide";
const ProfileName = () => {
  return (
    <StyledDivprofile>
      <StyledDivprofilename>
        <StyledEachDivprofilename1>
          <img src="../../../../../../assets/images/profileimgs.png" />

          <div>
            <Typography as="h1">Saja S.</Typography>
            <Typography as="p">
              {" "}
              Gaza, Palestinian Territories – 1:00 am local time
            </Typography>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Button variant="contained" disabled className="disabled">
                Available now
              </Button>
              <span>off</span>
              <StyledEditIcon />
            </div>
          </div>
        </StyledEachDivprofilename1>

        <StyledEachDivprofilename2>
          <Button variant="outlined" className="btna">
            See Public Profile
          </Button>
          <Button variant="contained" className="btnb">
            Profile Setting
          </Button>
        </StyledEachDivprofilename2>
      </StyledDivprofilename>
      <StyledDivprofiledetail>
        <StyledDivprofiledetailInfo>
          <EditProfileLeftSide />
        </StyledDivprofiledetailInfo>
        <StyledDivprofiledescription>
          <EditProfileRightSide />
        </StyledDivprofiledescription>
      </StyledDivprofiledetail>
    </StyledDivprofile>
  );
};

export default ProfileName;
