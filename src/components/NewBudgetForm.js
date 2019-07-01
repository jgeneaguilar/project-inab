import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import FormDialog from '../elements/FormDialog';
import {
  TextField,
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

  const budgetNameField = (
    <TextField
      autoFocus
      margin='dense'
      name='budgetName'
      label='Budget Name'
      value={budgetName}
      onChange={handleChange}
    />
  );

  const actionButtons = (
    <Fragment>
      <Button>Cancel</Button>
      <Button
        onClick={onCreateBudget}
      >Create Budget</Button>
    </Fragment>
  );

  return (
    <FormDialog 
      open={open}
      handleClose={handleClose}
      title='Create New Budget'
      content={budgetNameField}
      actions={actionButtons}
    />
  );
}

NewBudgetForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default NewBudgetForm;

