import React, { useState } from 'react';
import FormDialog from '../../commons/FormDialog';
import './modals.styles.scss';
import { Input, Select } from 'antd';
import { connect } from 'react-redux';
import { BudgetAccounts, TrackingAccounts } from './formConstants';
import { hideModal } from '../../redux/actions/modalActions';
import { addAccount } from '../../redux/actions/accountActions';


const AddAccountForm = ({ hideModal, currentBudget, addAccount }) => {

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
      }).catch(() => {
        setConfirmLoading(false); 
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
        className='accountFormSelectType'
        placeholder='Select an Account type'
        style={{ width: '100%' }}
        onChange={handleSelect}
      >
        <OptGroup label='Budget'>
          {BudgetAccounts.map(account => (
            <Option key={account.id} value={account.id}>{account.name}</Option>
          ))}
        </OptGroup>
        <OptGroup label='Tracking'>
          {TrackingAccounts.map(account => (
            <Option key={account.id} value={account.id}>{account.name}</Option>
          ))}
        </OptGroup>
      </Select>
      <Input 
        className='accountFormInputNickname'
        placeholder='Account Nickname'
        name='name'
        onChange={handleChange}
      />
      <Input
        className='accountFormInputBalance' 
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
)(AddAccountForm);