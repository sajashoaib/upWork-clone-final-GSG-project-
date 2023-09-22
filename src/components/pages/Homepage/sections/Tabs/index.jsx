import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Jobs from "../Jobs";
import { useSavedJobData } from "@/context/SavedJobContext";
import EachJob from "../Jobs/EachJob";

export default function TabsJob() {
  const [value, setValue] = React.useState("1");
  const { savedJobs } = useSavedJobData();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Best Matches" value="1" />
            <Tab label="Most Recent" value="2" />
            <Tab label="Saved Jobs" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Jobs />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">
          {savedJobs.map((savedJob, index) => (
            <EachJob
              key={index}
              id={savedJob.id}
              isSelected={true}
              toggleSelection={() => toggleSelection(savedJob)}
              {...savedJob}
            />
          ))}
        </TabPanel>
      </TabContext>
    </Box>
  );
}

