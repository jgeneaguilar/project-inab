import React from 'react';
import { connect } from 'react-redux';
import FormDialog from '../../commons/FormDialog';
import { hideModal } from '../../redux/actions/modalActions';
import { Input, Select } from 'antd';
import { AccountTypes } from './formDictionaries';

const AddAccountView = ({ hideModal }) => {

  const { Option, OptGroup } = Select;
  const formDialogProps = {
    visible: true,
    title: 'Add New Account',
    okText: 'Add Account',
    onCancel: hideModal,
    // onOk: '',
    // confirmLoading: ''
  };

  function handleChange(value) {
    console.log(value);
  }

  return (
    <FormDialog
      {...formDialogProps}
    >
      <Select
        placeholder='Select an Account type'
        style={{ width: '100%' }}
        onChange={handleChange}
        name='accountType'
      >
        <OptGroup label='Budget'>
          <Option value={AccountTypes.CHECKING}>Checking</Option>
          <Option value={AccountTypes.SAVINGS}>Savings</Option>
          <Option value={AccountTypes.CREDIT_CARD}>Credit Card</Option>
          <Option value={AccountTypes.CASH}>Cash</Option>
          <Option value={AccountTypes.LINE_OF_CREDIT}>Line of Credit</Option>
        </OptGroup>
        <OptGroup label='Tracking'>
          <Option value={AccountTypes.ASSET_OTHER}>Asset (Other)</Option>
          <Option value={AccountTypes.LIABILITY_OTHER}>Liability (Other)</Option>
        </OptGroup>
      </Select>
      <Input 
        placeholder='Account Nickname'
        name='name'
      />
      <Input 
        placeholder='Current Account Balance'
        name='balance'
      />

    </FormDialog>
  );
}


export default connect(null, { hideModal })(AddAccountView);