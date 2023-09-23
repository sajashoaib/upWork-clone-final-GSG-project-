import Typography from "@/components/atoms/Typography";
import React, { useState, useEffect } from "react";
import { StyledDivhourlyrate } from "./style";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const HourlyRate = ({ onSave }) => {
  const [initialRate, setInitialRate] = useState("20");
  const [discountedRate, setDiscountedRate] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");

  const handleCalculate = () => {
    if (initialRate.trim() === "") {
      setDiscountedRate("");
      setDiscountAmount("");
    } else if (!isNaN(initialRate)) {
      const initialRateFloat = parseFloat(initialRate);
      const discountedRateFloat = initialRateFloat - initialRateFloat * 0.1;
      setDiscountedRate(discountedRateFloat.toFixed(2));
      setDiscountAmount((initialRateFloat - discountedRateFloat).toFixed(2));
    }
  };

  const handleSave = () => {
    if (discountedRate !== "") {
      onSave(discountedRate);
    }
  };

  useEffect(() => {
    handleCalculate();
  }, [initialRate]);

  return (
    <div>
      <Typography as="p">
        Please note that your new hourly rate will only apply to new contracts.
      </Typography>
      <Typography as="p">Your profile rate: $20.00/hr</Typography>
      <StyledDivhourlyrate>
        <div>
          <Typography as="h4">Hourly Rate</Typography>
          <Typography as="p">Total amount the client will see</Typography>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={initialRate}
              onChange={(e) => setInitialRate(e.target.value)}
              endAdornment={<InputAdornment position="end">/hr</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </div>
      </StyledDivhourlyrate>

      <StyledDivhourlyrate>
        <div>
          <Typography as="h4">10% Upwork Service Fee</Typography>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={discountAmount}
              readOnly
              endAdornment={<InputAdornment position="end">/hr</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </div>
      </StyledDivhourlyrate>

      <StyledDivhourlyrate>
        <div>
          <Typography as="h4">You'll Receive</Typography>
          <Typography as="p">
            The estimated amount you'll receive after service fees{" "}
          </Typography>
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={discountedRate}
              readOnly
              endAdornment={<InputAdornment position="end">/hr</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
        </div>
      </StyledDivhourlyrate>
      <Button variant="text" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default HourlyRate;
