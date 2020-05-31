import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormDialog from '../../commons/FormDialog';
import { Input, Select } from 'antd';
import { connect } from 'react-redux';
import { BudgetAccounts, TrackingAccounts } from './formConstants';
import { hideModal } from '../../redux/actions/modalActions';
import { addAccount, updateAccount } from '../../redux/actions/accountActions';
import './modals.styles.scss';

const UpdateAccountForm = ({
  hideModal,
  currentBudget,
  addAccount,
  updateAccount,
  currentValue,
}) => {
  const { Option, OptGroup } = Select;

  let initialValue = currentValue || {
    /**
     * https://github.com/ant-design/ant-design/issues/16417
     * accountType's default value is undefined so that the placeholder will show.
     * It won't show if the value is null or ''
     */
    _id: '',
    name: '',
    accountType: undefined,
    balance: '',
  };

  const [accountData, setAccountData] = useState(initialValue);

  const [confirmLoading, setConfirmLoading] = useState(false);

  function handleChange({ target: { name, value } }) {
    setAccountData({
      ...accountData,
      [name]: value,
    });
  }

  function handleSelect(value) {
    setAccountData({
      ...accountData,
      accountType: value,
    });
  }

  function handleSubmit() {
    const onSubmit = accountData._id ? updateAccount : addAccount;
    const currentBalance = currentValue ? currentValue.balance : 0;

    const data = {
      ...accountData,
      balance: accountData.balance * 100 - currentBalance,
      date: new Date()
    };

    setConfirmLoading(true);
    onSubmit(currentBudget._id, data)
      .then(() => {
        setConfirmLoading(false);
        hideModal();
      })
      .catch(() => {
        setConfirmLoading(false);
      });
  }

  const formDialogProps = {
    visible: true,
    title: 'Add New Account',
    okText: 'Add Account',
    onCancel: hideModal,
    onOk: handleSubmit,
    confirmLoading: confirmLoading,
  };

  if (currentValue) {
    formDialogProps.title = 'Edit Account';
    formDialogProps.okText = 'Save';
  }

  return (
    <FormDialog {...formDialogProps}>
      <Select
        className="formModalSelectType"
        placeholder="Select an Account type"
        style={{ width: '100%' }}
        onChange={handleSelect}
        value={accountData.accountType}
        disabled={Boolean(currentValue)}
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
      <Input
        className="formModalInputType"
        placeholder="Account Nickname"
        name="name"
        onChange={handleChange}
        value={accountData.name}
      />
      <Input
        className="formModalInputType"
        placeholder="Current Account Balance"
        name="balance"
        onChange={handleChange}
        value={accountData.balance}
      />
    </FormDialog>
  );
};

UpdateAccountForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
  currentBudget: PropTypes.object.isRequired,
  addAccount: PropTypes.func.isRequired,
  updateAccount: PropTypes.func.isRequired,
  currentValue: PropTypes.object,
};

function mapStateToProps(state) {
  return { currentBudget: state.currentBudget };
}

export default connect(mapStateToProps, {
  hideModal,
  addAccount,
  updateAccount,
})(UpdateAccountForm);
