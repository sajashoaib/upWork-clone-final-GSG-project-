
import { ButtonWithIconMock } from "@/mock/ButtonWithIconMaock";
import OrLine from "@/components/atoms/OrLine";
import React, { useState, useEffect } from "react";
import { StyledDiv, StyledForm } from "./style";
import Typography from "@/components/atoms/Typography";
import Input from "@/components/atoms/Input";
import ButtonWithIcon from "@/components/atoms/ButtonWithIcon";
import OrLineAccount from "../OrLineAccount";
import Link from "next/link";
import { BiSolidUser } from "react-icons/bi";
import { Button } from "@mui/material";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import Buttons from "@/components/atoms/Button";

const formSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const LoginForm = () => {
    const { login, isLoading } = useAuth() || {};

  const [data, setData] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const router = useRouter(); 

  const handelSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await formSchema.validate(
        {
          email: data.email.value,
          password: data.password.value,
        },
        { abortEarly: false }
      );
      await login({ email: data.email.value, password: data.password.value });
      router.push('/main');

    } catch (error) {
      if (error.name === "ValidationError") {
        const errors = {};
        error.inner.forEach((validationError) => {
          errors[validationError.path] = validationError.message;
        });
  
        setData((prev) => ({
          ...prev,
          ...errors,
        }));
      } else {
        console.error("Login error:", error);
      }
    }
  };
 
  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: { value: e.target.value, error: "" },
    }));
  };

  return (
    <StyledDiv>
      <Typography as="h1"> Log in to Upwork</Typography>
      <StyledForm onSubmit={handelSubmit}>
        <Input
          type="email"
          name="email" 
          value={data.email.value}
          onChange={handleChange}
          placeholder="UserName Or Email"
          icon={<BiSolidUser />} 
        />
        {data.email.error && <span>{data.email.error}</span>}

        <Input
          type="password"
          name="password" 
          value={data.password.value}
          onChange={handleChange}
          placeholder="Password"
        />
        {data.password.error && <span>{data.password.error}</span>}

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          sx={{
            width:'350px',
            background:'green',
               borderRadius:'30px',
              border:'1px solid green',
            '&:hover':{
              background:'green',
            

            }
          }}
        >
          {isLoading ? "Loading..." : "Log In"}
        </Button>
        <OrLine>Or</OrLine>
       {ButtonWithIconMock.map((button, index) => (
          <ButtonWithIcon
            width="350px"
            key={index}
            label={button.label}
            backgroundColor={button.backgroundColor}
            textColor={button.textColor}
            icon={button.icon}
            onClick={() => console.log(`Button ${index + 1} clicked`)}
          />
        ))}
        <OrLineAccount> Dont have an Upwork account? </OrLineAccount>
        <Link href="/signup">
           <Buttons
            variant="outlined"
            label="Sign Up"
            width="250px"
            backgroundColor="transparent"
            textColor="#108a00"
            border="2px solid #108a00"
          ></Buttons>
        </Link>
      </StyledForm>
    </StyledDiv>
  );
};

export default LoginForm;
