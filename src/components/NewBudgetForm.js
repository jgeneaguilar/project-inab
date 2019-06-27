import React, { useState } from 'react';
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';
import { createBudget } from '../api/budgetsAPI';

const NewBudgetForm = ({ open, handleClose }) => {

  const [budgetName, setBudgetName] = useState('');

  const handleChange = event => {
    setBudgetName(event.target.value)
  }

  const onCreateBudget = () => {
    createBudget(budgetName)
      .then(res => console.log(res.data))
  }

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
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button
          onClick={onCreateBudget}
        >Create Budget</Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewBudgetForm;
