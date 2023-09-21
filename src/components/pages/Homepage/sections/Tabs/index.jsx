import React, { useEffect ,useState} from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { StyledTab } from "./style";
import Typography from "@/components/atoms/Typography";
import Jobs from "../Jobs";
import SavedJobs from "../SavedJobs";
import EachJob from "../Jobs/EachJob";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsJob = ({ savedJobs }) => {
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <StyledTab label="Best Matches" {...a11yProps(0)} />
          <StyledTab label="Most Recent" {...a11yProps(1)} />
          <StyledTab label="Saved Jobs" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
         <Jobs /> 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SavedJobs />

      </CustomTabPanel>
    </Box>
  );
};

export default TabsJob;
