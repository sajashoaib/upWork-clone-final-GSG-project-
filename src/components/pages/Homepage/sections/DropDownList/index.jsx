import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { dropdownData } from "../../../../../mock/DropDownListData";
import {
  DropDownListWrapper,
  DropdownButton,
  DropdownContent,
  ListPreferences,
  StyledLinks,
} from "./style";
import Typography from "../../../../atoms/Typography";

const DropDownList = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (buttonName) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  return (
    <DropDownListWrapper>
      {Object.keys(dropdownData).map((buttonName, i) => (
        <div key={i}>
          <div style={{ borderBottom: "1px solid  #beccbe",padding:'8px 0' }}>
            <DropdownButton onClick={() => toggleDropdown(buttonName)}>
              {buttonName}
              {openDropdowns[buttonName] ? (
                <AiOutlineUp style={{ fontSize: "18px", color: "black" }} />
              ) : (
                <AiOutlineDown style={{ fontSize: "18px", color: "black" }} />
              )}
            </DropdownButton>
            {openDropdowns[buttonName] && (
              <DropdownContent>
                {buttonName === "Connects" && (
                  <div style={{ padding:' 0 25px' }}>
                  <Typography as="p">
                      Available: 42{" "}
                      <StyledLinks href="/connects">(View details)</StyledLinks>{" "}
                    </Typography>
                    <StyledLinks href="/connects">Buy connects</StyledLinks>
                  </div>
                )}

                {buttonName === "Preferences" && (
                  <div style={{ padding:' 0 25px' }}>
                  {dropdownData[buttonName].map((preference) => (
                      <ListPreferences
                        key={preference.id}
                      >
                        <p>{preference.text}</p>
                        {preference.icon}
                      </ListPreferences>
                    ))}
                    <StyledLinks href="/connects">Web Development</StyledLinks>
                  </div>
                )}

                {buttonName === "Proposals" && (
                  <div style={{ padding:' 0 25px' }}>
                  <StyledLinks href="/connects">My Proposals</StyledLinks>
                    <br />
                    <br />
                    <StyledLinks href="/connects">
                      1 submitted proposal
                    </StyledLinks>
                  </div>
                )}

                {buttonName === "ProjectCatalog" && (
                  <div style={{ padding:' 0 25px' }}>
                 
                    <StyledLinks href="/connects">
                      My Project Dashboard
                    </StyledLinks>
                    <Typography>
                      {" "}
                      <StyledLinks href="/connects">
                        Create a Catalog project{" "}
                      </StyledLinks>{" "}
                      for clients to purchase instantly
                    </Typography>
                  </div>
                )}
              </DropdownContent>
            )}
          </div>
        </div>
      ))}
    </DropDownListWrapper>
  );
};

export default DropDownList;
