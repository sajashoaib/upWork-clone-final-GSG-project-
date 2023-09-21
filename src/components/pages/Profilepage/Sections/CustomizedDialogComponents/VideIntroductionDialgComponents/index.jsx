import Typography from '@/components/atoms/Typography'
import React from 'react'
import TextField from '@mui/material/TextField';
import { StyledLinks } from '@/components/pages/Homepage/sections/DropDownList/style';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const VideIntroductionDialogComponents = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
      <Typography as='h4'>Link to your YouTube video</Typography>
      <TextField fullWidth  id="fullWidth"  />
      <StyledLinks href='#'>Does your video meet Upworks guidelines?</StyledLinks>
      <Typography as='h4'>Link to your YouTube video</Typography>
      <FormControl sx={{ m: 1, minWidth: 500 }}>
      <InputLabel htmlFor="age-placeholder">What type of video this?</InputLabel> {/* Placeholder label */}

        <Select
          
          value={age}
          label="ksmdc"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          fullWidth
          id="age-placeholder"
         
        >
          <MenuItem value={10}>Me talking about my skills and experience</MenuItem>
          <MenuItem value={20}>Visual samples of my work</MenuItem>
          <MenuItem value={30}>Something else</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default VideIntroductionDialogComponents
