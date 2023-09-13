import Typography from "@/components/atoms/Typography";
import React from "react";
import OrLine from "@/components/atoms/OrLine";
import Buttons from "@/components/atoms/Button";
import ButtonWithIcon from "@/components/atoms/ButtonWithIcon";
import { StyledDiv } from "../../Login/LoginForm/style";
import { ButtonWithIconMock2 } from "@/mock/ButtonWithIconMaock2";
import { StyledSpan } from "@/components/molecules/NavBarLogin&SignUp/style";
import SignupFormInputs from "../SignupFormInputs";

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
      <OrLine width ="95%">Or</OrLine>
      <SignupFormInputs/>

      <Buttons
        variant="outlined"
        label="Create my account"
        width="530px"
        backgroundColor="#108a00"
        textColor="White"
        border="2px solid #108a00"
      />
      <Typography as="p">
        Already hava an account?<StyledSpan> Log In</StyledSpan>
      </Typography>
    </StyledDiv>
  );
};

export default SignUpForm;
