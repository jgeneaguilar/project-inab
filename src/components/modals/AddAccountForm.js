import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormDialog from '../../commons/FormDialog';
import { Input, Select } from 'antd';
import { BudgetAccounts, TrackingAccounts } from './formConstants';
import { hideModal } from '../../redux/actions/modalActions';
import { addAccount } from '../../redux/actions/accountActions';


const AddAccountView = ({ hideModal, currentBudget, addAccount }) => {

  const { Option, OptGroup } = Select;

  const [accountData, setAccountData] = useState({
    name: '',
    accountType: '',
    balance: ''
  });

  const [confirmLoading, setConfirmLoading] = useState(false);

  function handleChange({ target: { name, value }}) {
    setAccountData({
      ...accountData,
      [name]: value
    });
  }

  // TODO: only 1 onChange function for all fields
  function handleSelect(value) {
    setAccountData({
      ...accountData,
      accountType: value
    });
  }

  function handleSubmit() {
    setConfirmLoading(true);
    addAccount(currentBudget._id, accountData)
      .then(() => {
        setConfirmLoading(false);
        hideModal();
      });
  }

  const formDialogProps = {
    visible: true,
    title: 'Add New Account',
    okText: 'Add Account',
    onCancel: hideModal,
    onOk: handleSubmit,
    confirmLoading: confirmLoading
  };

  return (
    <FormDialog
      {...formDialogProps}
    >
      <Select
        placeholder='Select an Account type'
        style={{ width: '100%' }}
        onChange={handleSelect}
      >
        <OptGroup label='Budget'>
          {BudgetAccounts.map(account => (
            <Option key={account.id} alue={account.id}>{account.name}</Option>
          ))}
        </OptGroup>
        <OptGroup label='Tracking'>
          {TrackingAccounts.map(account => (
            <Option key={account.id} value={account.id}>{account.name}</Option>
          ))}
        </OptGroup>
      </Select>
      <Input 
        placeholder='Account Nickname'
        name='name'
        onChange={handleChange}
      />
      <Input 
        placeholder='Current Account Balance'
        name='balance'
        onChange={handleChange}
      />
    </FormDialog>
  );
}

function mapStateToProps(state) {
  return { currentBudget: state.currentBudget };
}

export default connect(
  mapStateToProps, 
  { hideModal, addAccount }
)(AddAccountView);