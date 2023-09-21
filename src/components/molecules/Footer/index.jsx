import {
  FooterIcons,
  FooterIcons2,
  FooterLinks1,
  FooterLinks2,
  FooterLinks3,
  FooterLinks4,
} from "@/mock/FooterLinks";
import React from "react";
import {
  StyledDivFooter,
  StyledEachDivFooter,
  StyledLink,
  StyledParentDivFooter,
  StyledDivFootericons,
  StyledIcon,
  StyledDivFooterParenticons,
  StyledCopyRight,
} from "./style";
import Typography from "@/components/atoms/Typography";

const Footer = ({ icon }) => {
  return (
    <StyledParentDivFooter>
      <StyledDivFooter>
        <StyledEachDivFooter>
          {FooterLinks1.map((item) => (
            <StyledLink href={item.url} key={item.id}>
              {item.text}
            </StyledLink>
          ))}
        </StyledEachDivFooter>

        <StyledEachDivFooter>
          {FooterLinks2.map((item) => (
            <StyledLink href={item.url} key={item.id}>
              {item.text}
            </StyledLink>
          ))}
        </StyledEachDivFooter>
        <StyledEachDivFooter>
          {FooterLinks3.map((item) => (
            <StyledLink href={item.url} key={item.id}>
              {item.text}
            </StyledLink>
          ))}
        </StyledEachDivFooter>

        <StyledEachDivFooter>
          {FooterLinks4.map((item) => (
            <StyledLink href={item.url} key={item.id}>
              {item.text}
            </StyledLink>
          ))}
        </StyledEachDivFooter>
      </StyledDivFooter>
      <StyledDivFooterParenticons>
        <StyledDivFootericons style={{ marginLeft: "11%" }}>
          <Typography as="p"> Follow Us</Typography>
          {FooterIcons.map((item) => (
            <StyledIcon key={item.id}>{item.icon}</StyledIcon>
          ))}
        </StyledDivFootericons>
        <StyledDivFootericons>
          <Typography as="p"> Mobile App</Typography>
          {FooterIcons2.map((item) => (
            <StyledIcon key={item.id}>{item.icon}</StyledIcon>
          ))}
        </StyledDivFootericons>
      </StyledDivFooterParenticons>
      <StyledCopyRight as="p">
        {" "}
        &copy; 2015 - 2023 Upwork&reg; Global Inc.
      </StyledCopyRight>
    </StyledParentDivFooter>
  );
};

export default Footer;
