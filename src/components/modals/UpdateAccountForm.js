import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormDialog from '../../commons/FormDialog';
import './modals.styles.scss';
import { Input, Select } from 'antd';
import { connect } from 'react-redux';
import { BudgetAccounts, TrackingAccounts } from './formConstants';
import { hideModal } from '../../redux/actions/modalActions';
import { addAccount } from '../../redux/actions/accountActions';


const UpdateAccountForm = ({ hideModal, currentBudget, addAccount, currentValue }) => {
  const { Option, OptGroup } = Select;

  let initialValue = currentValue || 
    // accountType's default value is undefined so that the placeholder will
    // show. It won't show if the value is null or ''.
    // https://github.com/ant-design/ant-design/issues/16417
    { name: '', accountType: undefined, balance: '' };

  const [accountData, setAccountData] = useState(initialValue);

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

  // temporary function for edit, until PATCH has been added
  // don't forget to add 'updateAccount' action creator
  function handleEditSubmit() {
    console.log('Hello from Edit Submit function');
    console.log(accountData);
  }

  const formDialogProps = {
    visible: true,
    title: 'Add New Account',
    okText: 'Add Account',
    onCancel: hideModal,
    onOk: handleSubmit,
    confirmLoading: confirmLoading
  };

  if (currentValue) {
    formDialogProps.title = 'Edit Account';
    formDialogProps.okText = 'Save';
    formDialogProps.onOk = handleEditSubmit;
  }

  return (
    <FormDialog
      {...formDialogProps}
    >
      <Select
        className='accountFormSelectType'
        placeholder='Select an Account type'
        style={{ width: '100%' }}
        onChange={handleSelect}
        value={accountData.accountType}
        disabled={Boolean(currentValue)}
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
        value={accountData.name}
      />
      <Input
        className='accountFormInputBalance' 
        placeholder='Current Account Balance'
        name='balance'
        onChange={handleChange}
        value={accountData.balance}
      />
    </FormDialog>
  );
}

UpdateAccountForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
  currentBudget: PropTypes.object.isRequired,
  addAccount: PropTypes.func.isRequired,
  currentValue: PropTypes.object,
};

function mapStateToProps(state) {
  return { currentBudget: state.currentBudget };
}

export default connect(
  mapStateToProps, 
  { hideModal, addAccount }
)(UpdateAccountForm);