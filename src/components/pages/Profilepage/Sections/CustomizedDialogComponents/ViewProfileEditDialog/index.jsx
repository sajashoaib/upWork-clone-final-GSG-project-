import Typography from '@/components/atoms/Typography'
import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
'Your mothers maiden name',
'Your first pets name',
'The name of your elementary schoolselected',
'Your elementary school mascot',
'Your best friends nickname',
'Your favorite sports team',
'Your favorite writer',
'Your favorite actor',
'Your favorite singer',
'Your favorite song',
'The name of the street you grew up on',
'Make and model of your first car',
'The city where you first met your spouse',
'Other...'
  ];


const ViewProfileEditDialog = () => {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <Typography as='p'>You’ll be prompted to answer your security question when we need to verify your identity, so be sure to choose a question only you know the answer to.</Typography>
     <Typography as='h5'>Question</Typography>
      <FormControl sx={{ m: 1, width: 500, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>The name of your elementary school</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box
      sx={{
        width: 500,
      }}
    >
           <Typography as='h5'>Answer</Typography>

      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
    <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="

I understand my account will be locked if I am unable to answer this question" />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me logged in on this device" />
</FormGroup>

    </div>
  )
}

export default ViewProfileEditDialog
