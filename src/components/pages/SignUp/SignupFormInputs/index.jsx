import React, { useState, useEffect } from "react";
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
import * as Yup from "yup";
import useAuth from "@/hooks/useAuth.js";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupFormInputs = () => {
  const { signup, isLoading, token } = useAuth() || {};
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    country: "Palestinian Territories",
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    country: Yup.string().required("Country is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      await signup({
        name: formData?.name,
        lastName: formData?.lastName,
        email: formData?.email,
        password: formData?.password,
      });
      toast.success("Signup successful!", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log("Form data is valid:", formData);
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
    }
  };

  useEffect(() => {
    if (token) {
      console.log("Before router.push");
    }
  }, [token, router]);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="First Name"
            InputProps={{ sx: { height: "42px" } }}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
                sx: { height: "10px" },
              }}
              error={!!errors.lastName}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "52ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
                sx: { height: "10px" },
              }}
              error={!!errors.email}
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "52ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Password (8 or more Characters)"
              inputProps={{
                sx: { height: "10px" },
              }}
              error={!!errors.password}
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
            name="country"
            value={formData.country}
            onChange={handleChange}
            SelectProps={{
              native: true,
              sx: { width: "59ch", height: "50px" },
            }}
            variant="outlined"
            error={!!errors.country}
            helperText={errors.country}
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
                  Send me helpful emails to find rewarding work and job
                </StyledTypo>
              }
            />
            <StyledFormControlLabel
              control={<Checkbox />}
              label={
                <StyledTypo as="p">
                  Yes, I understand and agree to the{" "}
                  <StyledSpan>Upwork Terms of Services</StyledSpan>, including
                  the User Agreement and{" "}
                </StyledTypo>
              }
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading}
              sx={{
                width: "530px",
                background: "green",
                borderRadius: "30px",
                border: "1px solid green",
                "&:hover": {
                  background: "green",
                },
              }}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </Button>
            <ToastContainer />
          </StyledDivTypo>
        </form>
      </div>
    </Box>
  );
};

export default SignupFormInputs;
