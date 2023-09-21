import Typography from "@/components/atoms/Typography";
import React from "react";
import OrLine from "@/components/atoms/OrLine";
import ButtonWithIcon from "@/components/atoms/ButtonWithIcon";
import { StyledDiv } from "../../Login/LoginForm/style";
import { ButtonWithIconMock2 } from "@/mock/ButtonWithIconMaock2";
import { StyledSpan } from "@/components/molecules/NavBarLogin&SignUp/style";
import SignupFormInputs from "../SignupFormInputs";
import { StyledLinks } from "../../Homepage/sections/DropDownList/style";

const SignUpForm = () => {
  return (
    <StyledDiv>
      <Typography as="h1"> Sign up to find work you love</Typography>
      {ButtonWithIconMock2.map((button, index) => (
        <ButtonWithIcon
          width="530px"
          key={index}
          label={button.label}
          backgroundColor={button.backgroundColor}
          textColor={button.textColor}
          icon={button.icon}
          onClick={() => console.log(`Button ${index + 1} clicked`)}
        />
      ))}
      <OrLine width="95%">Or</OrLine>
      <SignupFormInputs />
      <Typography as="p">
        Already hava an account?
        <StyledLinks href="/login">
          <StyledSpan> Log In</StyledSpan>
        </StyledLinks>
      </Typography>
    </StyledDiv>
  );
};

export default SignUpForm;
