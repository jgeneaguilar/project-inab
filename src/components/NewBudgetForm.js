import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import FormDialog from '../elements/FormDialog';
import {
  TextField,
  Button,
  CircularProgress
} from '@material-ui/core';
import { createBudget } from '../api/budgetsAPI';

const NewBudgetForm = ({ open, handleDialogClose }) => {

  // Hold the value of the text field input
  const [budgetName, setBudgetName] = useState('');

  // Waiting for HTTP request
  const [loading, setLoading] = useState(false);

  const handleChange = event => {
    setBudgetName(event.target.value)
  }

  // on Form Submit
  const onCreateBudget = e => {
    e.preventDefault();
    setLoading(true);
    createBudget(budgetName)
      .then(res => console.log(res.data))
      .then(() => {
        setLoading(false);
        handleDialogClose();
        setBudgetName('');
      });
  }

  // Close the dialog and clear the form
  const onCancel = () => {
    handleDialogClose();
    setBudgetName('');
  }

  const budgetNameField = (
    <TextField
      autoFocus
      name='budgetName'
      label='Budget Name'
      value={budgetName}
      onChange={handleChange}
      variant='standard'
      margin='dense'
    />
  );

  const actionButtons = (
    <Fragment>
      <Button
        color='default'
        variant='outlined'
        disabled={loading}
        size='small' 
        onClick={onCancel}
      >Cancel</Button>
      <Button
        type='submit'
        color='default'
        variant='contained'
        disabled={loading}
        size='small' 
      >
        Create Budget
        {loading && <CircularProgress size={16} />}
      </Button>
    </Fragment>
  );

  return (
    <FormDialog 
      open={open}
      handleDialogClose={handleDialogClose}
      handleFormSubmit={onCreateBudget}
      title='Create New Budget'
      content={budgetNameField}
      actions={actionButtons}
    />
  );
}

NewBudgetForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDialogClose: PropTypes.func.isRequired,
}

export default NewBudgetForm;

