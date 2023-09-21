"use client";
import React, { useState } from "react";
import { StyledDivProposalSettings } from "../ProposalSettings/style";
import Typography from "@/components/atoms/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"; // Import LocalizationProvider
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  StyledDivPriceDetail,
  StyledDivfees,
  StyledDivmilestones,
} from "./style";
import { StyledLinks } from "@/components/pages/Homepage/sections/DropDownList/style";

const Terms = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [amount, setAmount] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <StyledDivProposalSettings>
      <Typography as="h2">Terms</Typography>
      <FormControl>
        <Typography as="h5">How do you want to be paid?</Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio  />}
            label="By milestone"
          />
          <FormLabel id="demo-radio-buttons-group-label">
            Divide the project into smaller segments, called milestones. Youll
            be paid for milestones as they are completed and approved.
          </FormLabel>

          <FormControlLabel
            value="male"
            control={<Radio />}
            label="By project"
          />
          <FormLabel id="demo-radio-buttons-group-label">
            Get your entire payment at the end, when all work has been
            delivered.
          </FormLabel>
        </RadioGroup>
      </FormControl>
      <Typography as="h5">
        How many milestones do you want to include?
      </Typography>
      <StyledDivmilestones>
        <div>
          <Typography as="h5">Description</Typography>
          <TextField
            className="fieldinput"
            id="outlined-basic"
            label="Outlined"
            ariant="outlined"
            sx={{ width: "400px" }}
          />
        </div>
        <div>
          <Typography as="h5">Due date</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                className="fieldinput"
                label="Select a Date"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div>
          <Typography as="h5">Amount</Typography>
          <TextField
            className="fieldinput"
            label="Amount"
            variant="outlined"
            value={amount}
            placeholder="0.00"
            onChange={handleAmountChange}
          />
        </div>
      </StyledDivmilestones>
      <StyledDivPriceDetail>
        <div style={{ width: "40%" }}>
          <img src="../../../../../../assets/images/dollar.png" />
          <Typography as="p">
            Includes Upwork Fixed-Price Protection.
          </Typography>
          <StyledLinks href="/">Learn more</StyledLinks>
        </div>

        <div>
          <StyledDivfees>
            <div>
              <Typography as="h5">Total price of project</Typography>
              <span>
                This includes all milestones, and is the amount your client will
                see
              </span>
            </div>
            <Typography as="p">$0.00</Typography>
          </StyledDivfees>

          <StyledDivfees>
            <Typography as="h5">Freelancer Service Fee</Typography>
            <Typography as="p">$0.00</Typography>
          </StyledDivfees>

          <StyledDivfees>
            <div>
              <Typography as="h5">You’ll Receive</Typography>
              <span>Your estimated payment, after service fees </span>
            </div>
            <Typography as="p">$0.00</Typography>
          </StyledDivfees>
        </div>
      </StyledDivPriceDetail>
    </StyledDivProposalSettings>
  );
};

export default Terms;
