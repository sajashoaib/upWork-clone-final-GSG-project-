import Typography from '@/components/atoms/Typography'
import { Button, TextField } from '@mui/material'
import React,{useState} from 'react'

const TitleEditDialog = ({ onSaveChanges }) => {
    const [newTitle, setNewTitle] = useState('');

    const handleSaveChangesClick = () => {
      onSaveChanges(newTitle);
    };
  
  return (
    <div>
      <Typography as='h6'> Your title</Typography>
    
     <Typography as='p'>Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience)</Typography>
     <TextField fullWidth
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
     id="fullWidth" 
     placeholder='Front-End Developer || React Js || Next Js' ></TextField>
  <Button variant="contained" color="primary" onClick={handleSaveChangesClick}>
        Save Changes
      </Button>
    </div>
  )
}

export default TitleEditDialog
