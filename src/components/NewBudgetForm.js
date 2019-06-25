import React, { useState } from 'react';
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';

const NewBudgetForm = ({ open, handleClose }) => {

  const [budgetName, setBudgetName] = useState('');

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>Create a New Budget</DialogTitle>
      <DialogContent>
        <TextField 
          autoFocus
          margin='dense'
          name='budgetName'
          label='Budget Name'
          value={budgetName}
          onChange={event => setBudgetName(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Create Budget</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewBudgetForm;
