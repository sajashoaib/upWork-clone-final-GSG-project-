import Input from "@/components/atoms/Input";
import Typography from "@/components/atoms/Typography";
import React from "react";
import { StyledDiv } from "./style";
import OrLine from "@/components/atoms/OrLine";
import Buttons from "@/components/atoms/Button";
import { ButtonWithIconMock } from "@/mock/ButtonWithIconMaock";
import ButtonWithIcon from "@/components/atoms/ButtonWithIcon";
import OrLineAccount from "../OrLineAccount";


const LoginForm = () => {
  return (
    <StyledDiv>
      <Typography as="h1"> Log in to Upwork</Typography>
      <Input />
      <Buttons
        label="Continue with Email"
        backgroundColor="green"
        width="350px"
        textColor="white"
      />
      <OrLine>Or</OrLine>
      {ButtonWithIconMock.map((button, index) => (
        <ButtonWithIcon
          width='350px'
          key={index}
          label={button.label}
          backgroundColor={button.backgroundColor}
          textColor={button.textColor}
          icon={button.icon}
          onClick={() => console.log(`Button ${index + 1} clicked`)}
        />
      ))}
      <OrLineAccount> Dont have an Upwork account? </OrLineAccount>
      <Buttons
        variant="outlined"
        label="Sign Up"
        width="250px"
        backgroundColor="transparent"
        textColor="#108a00"
        border="2px solid #108a00"
      />
    </StyledDiv>
  );
};

export default LoginForm;
