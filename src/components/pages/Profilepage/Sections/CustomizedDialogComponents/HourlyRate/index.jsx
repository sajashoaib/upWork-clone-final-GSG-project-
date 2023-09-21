import Typography from '@/components/atoms/Typography'
import React from 'react'
import { StyledDivhourlyrate } from './style';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const HourlyRate = () => {
  return (
    <div>
      <Typography as='p'>Please note that your new hourly rate will only apply to new contracts.
</Typography>
<Typography as='p'>Your profile rate: $18.00/hr</Typography>
<StyledDivhourlyrate>
<div>
<Typography as='h4'>Hourly Rate
</Typography>
<Typography as='p'>Total amount the client will see
</Typography></div>
<div>
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
          
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">/hr</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
        </div>
</StyledDivhourlyrate>

<StyledDivhourlyrate>
<div>
<Typography as='h4'>10% Upwork Service Fee
</Typography>
</div>
<div>
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">/hr</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
        </div>
        </StyledDivhourlyrate>
<StyledDivhourlyrate>
<div>
<Typography as='h4'>Youll Receive

</Typography>
<Typography as='p'>The estimated amount youll receive after service fees 

</Typography></div>
<div>
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">/hr</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
        </div>
</StyledDivhourlyrate>



    </div>
  )
}

export default HourlyRate

