// CustomizedDialog.js
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const CustomizedDialog = ({ open, onClose, title, children }) => {
 
    return (
    <Dialog
     onClose={onClose} 
     open={open} 
   
        >
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers  >
        {children} 
      </DialogContent>
      <DialogActions>
      <Button autoFocus onClick={onClose}>
        Cancel
        </Button>
        </DialogActions>
    </Dialog>
  );
};

export default CustomizedDialog;
