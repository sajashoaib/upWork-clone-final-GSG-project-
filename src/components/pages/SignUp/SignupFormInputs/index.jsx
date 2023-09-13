import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { StyledFormControlLabel, StyledTypo, StyledDivTypo } from "./style.js";
import { StyledSpan } from "@/components/molecules/NavBarLogin&SignUp/style.js";
import { countries } from "@/mock/Countries.js";

const SignupFormInputs = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <TextField
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          placeholder="FirstName"
          InputProps={{ sx: { height: "42px" } }}
        />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder="Last Name"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
              sx: { height: "10px" },
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "52ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder="Email"
            type="email"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
              sx: { height: "10px" },
            }}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "52ch" }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            placeholder="Password(8 or more Characters"
            inputProps={{
              sx: { height: "10px" },
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          id="filled-select-currency-native"
          select
          defaultValue="Palestinian Territories"
          SelectProps={{
            native: true,
            sx: { width: "59ch", height: "50px" },
          }}
          variant="outlined"
        >
          {countries.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <StyledDivTypo>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label={
              <StyledTypo as="p">
                Send me helpful emails to find rewardingwork and job
              </StyledTypo>
            }
          />
          <StyledFormControlLabel
            control={<Checkbox />}
            label={
              <StyledTypo as="p">
                Yes, I understand and agree to the{" "}
                <StyledSpan>Upwork Terms of Services </StyledSpan> , including
                the User Agreement and{" "}
              </StyledTypo>
            }
          />
        </StyledDivTypo>
      </div>
    </Box>
  );
};

export default SignupFormInputs;
