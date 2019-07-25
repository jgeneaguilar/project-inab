import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import FormDialog from '../elements/FormDialog';
import {
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  CircularProgress
} from '@material-ui/core';

const accountTypes = [
  {
    value: 'checking',
    label: 'Checking'
  },
  {
    value: 'savings',
    label: 'Savings'
  },
  {
    value: 'creditcard',
    label: 'Credit Card'
  },
  {
    value: 'cash',
    label: 'Cash'
  },
  {
    value: 'lineofcredit',
    label: 'Line of Credit'
  },
];

const AddAccountForm = ({ loading, onCancel }) => {

  const [accountDetails, setAccountDetails] = useState({
    accountType: '',
    accountName: '',
    accountBalance: ''
  });

  const handleChange = field => event => {
    setAccountDetails({ ...accountDetails, [field]: event.target.value });
  };

  const addAccountFields = (
    <Fragment>
      <TextField
        select
        dense
        
        variant='outlined'
        label='Select an Account Type'
        value={accountDetails.accountType}
        onChange={handleChange('accountType')}
      >
        {accountTypes.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField 
          dense
          variant='outlined'
          label='Account Nickname'
          value={accountDetails.accountName}
          onChange={handleChange('accountName')}
      />
      <TextField
        dense
        variant='outlined'
        label='Account Balance'
        value={accountDetails.accountBalance}
        onChange={handleChange('accountBalance')}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Fragment>
  );

  const actionButtons = (
    <Fragment>
      <Button
        color='default'
        variant='outlined'
        // disabled={loading}
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
      open={true}
      title='Add an Account'
      content={addAccountFields}
      actions={actionButtons}
    />
  );
}

AddAccountForm.propTypes = {

};

export default AddAccountForm;
