import Typography from '@/components/atoms/Typography'
import { StyledLinks } from '@/components/pages/Homepage/sections/DropDownList/style';
import React from 'react'

const OverViewDialog = () => {
    const items = ['Describe your strengths and skills',
     'Highlight projects, accomplishments and education',
     'Keep it short and make sure it is error-free',
     ];

  return (
    <div>
      <Typography as='p'>Use this space to show clients you have the skills and experience they are looking for.</Typography>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div><StyledLinks href='#'>Learn more</StyledLinks></div>
      <textarea
        rows="8" 
        cols="50" 
        style={{width:'100%'}}
        placeholder="Enter your text here..." 
      />
    </div>
  )
}

export default OverViewDialog
