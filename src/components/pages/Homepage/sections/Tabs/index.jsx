import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { StyledTab } from './style';

const TabsJob = () => {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      aria-label="secondary tabs example"
    >
      <StyledTab value="one" label="Best Matches" />
      <StyledTab  value="two" label="Most Recent" />
      <StyledTab  value="three" label="Saved Jobs" />
    </Tabs>
  </Box>
  )
}

export default TabsJob
