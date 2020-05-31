import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Select } from 'antd';
import FormDialog from '../../commons/FormDialog';
import { hideModal } from '../../redux/actions/modalActions';
import { BudgetAccounts, TrackingAccounts } from './formConstants';
import './modals.styles.scss';

function TransferFundsForm({ hideModal }) {
  const { Option, OptGroup } = Select;

  let initialValue = {
    /**
     * https://github.com/ant-design/ant-design/issues/16417
     * both accounts' default value is undefined so that the placeholder will show.
     * It won't show if the value is null or ''
     */
    _id: '',
    fromAccount: undefined,
    toAccount: undefined,
    amount: '',
  };

  const [values, setValues] = useState(initialValue);

  const [confirmLoading, setConfirmLoading] = useState(false);

  function handleChange({ target: { name, value } }) {
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSelect(value, _, name) {
    setValues({
      ...values,
      [name]: value,
    });
  }

  function handleSubmit() {
    console.log(values);
    // setConfirmLoading(true);
    // onsubmit()
    // setConfirmLoading(false);
  }

  function filteredAccounts(accountSelected, accountsArray) {
    return accountsArray.filter((account) => account.id !== accountSelected);
  }

  const formDialogProps = {
    visible: true,
    title: 'Transfer Funds',
    okText: 'Transfer',
    onCancel: hideModal,
    onOk: handleSubmit,
    confirmLoading: confirmLoading,
  };

  return (
    <FormDialog {...formDialogProps}>
      <Select
        className="formModalSelectType"
        placeholder="Which account would like to transfer from?"
        style={{ width: '100%' }}
        onChange={(value, option) => handleSelect(value, option, 'fromAccount')}
        value={values.fromAccount}
      >
        <OptGroup label="Budget">
          {BudgetAccounts.map((account) => (
            <Option key={account.id} value={account.id}>
              {account.name}
            </Option>
          ))}
        </OptGroup>
        <OptGroup label="Tracking">
          {TrackingAccounts.map((account) => (
            <Option key={account.id} value={account.id}>
              {account.name}
            </Option>
          ))}
        </OptGroup>
      </Select>
      <Select
        className="formModalSelectType"
        placeholder="Which account would like to transfer to?"
        style={{ width: '100%' }}
        onChange={(value, option) => handleSelect(value, option, 'toAccount')}
        value={values.toAccount}
        disabled={!Boolean(values.fromAccount)}
      >
        <OptGroup label="Budget">
          {filteredAccounts(values.fromAccount, BudgetAccounts).map((account) => (
            <Option key={account.id} value={account.id}>
              {account.name}
            </Option>
          ))}
        </OptGroup>
        <OptGroup label="Tracking">
          {filteredAccounts(values.fromAccount, TrackingAccounts).map((account) => (
            <Option key={account.id} value={account.id}>
              {account.name}
            </Option>
          ))}
        </OptGroup>
      </Select>
      <Input
        className="formModalInputType"
        placeholder="Amount to transfer"
        name="amount"
        onChange={handleChange}
        value={values.amount}
      />
    </FormDialog>
  );
}

TransferFundsForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default connect(null, { hideModal })(TransferFundsForm);
