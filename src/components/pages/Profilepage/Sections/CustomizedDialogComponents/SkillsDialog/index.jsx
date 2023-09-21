import Typography from '@/components/atoms/Typography'
import React from 'react'

const SkillsDialog = () => {
  return (
    <div>
      <Typography> Skills</Typography>
      <textarea
        rows="8" 
        cols="1000" 
        style={{width:'100%'}}
      />
    </div>
  )
}

export default SkillsDialog
