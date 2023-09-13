import React from 'react'
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useState } from 'react';

  

const Selects = ({options,onChange,label}) => {
  const [value, setValue] = useState(options.length > 0 ? options[0].value : '');
const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div >
      
<FormControl variant="standard"sx={{ m: 1, minWidth: 20,color:'white' }}>
        <Select
        sx={{borderBottom:'none'}}
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label'}}>
                 {options.map((option)=>(
            <MenuItem key={option.value} value={option.value}>
               {option.label}
            </MenuItem>
          ))}
     
       
        </Select>
          </FormControl>
    </div>
  )
}

export default Selects
