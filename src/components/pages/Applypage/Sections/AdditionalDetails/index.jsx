import Typography from "@/components/atoms/Typography";
import React from "react";
import Button from "@mui/material/Button";
import { StyledDivProposalSettings } from "../ProposalSettings/style";
import { StyledTextArea, StyledStack } from "./style";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const AdditionalDetail = () => {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <div>
      <StyledDivProposalSettings>
        <FormControl sx={{ m: 1, minWidth: 140 }}>
          <Typography as="p">How long will this project take?</Typography>
          <Select
            value={time}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{ borderRadius: "15px", padding: "0 20px" }}
          >
            <MenuItem value="">
              <em>Select a duration</em>{" "}
            </MenuItem>
            <MenuItem value={10}>More than 6 months</MenuItem>
            <MenuItem value={20}>3 to 6 months</MenuItem>
            <MenuItem value={30}>1 to 3 months</MenuItem>
            <MenuItem value={40}>Less than 1 month</MenuItem>
          </Select>
        </FormControl>
      </StyledDivProposalSettings>

      <StyledDivProposalSettings>
        <Typography as="h2">Additional details</Typography>
        <Typography as="p">Cover Letter</Typography>
        <StyledTextArea rows={10} />
      </StyledDivProposalSettings>
      <StyledStack spacing={2} direction="row">
        <Button variant="contained" className="btnSend">
          Contained
        </Button>
        <Button variant="text" className="btncancel">
          Text
        </Button>
      </StyledStack>
    </div>
  );
};

export default AdditionalDetail;
