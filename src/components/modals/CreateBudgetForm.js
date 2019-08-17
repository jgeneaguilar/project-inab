import React, { useState } from 'react'
import { connect } from 'react-redux';
import FormDialog from '../../commons/FormDialog';
import { hideModal } from '../../redux/actions/modalActions';
import { Input } from 'antd';
import { createBudget } from '../../redux/actions/budgetsActions';

const CreateBudgetForm = ({ hideModal, createBudget }) => {

  const [confirmLoading, setConfirmLoading] = useState(false);

  const [budgetData, setBudgetData] = useState({ name: '' });

  const handleSubmit = () => {
    setConfirmLoading(true);
    createBudget(budgetData)
      .then(() => {
        setConfirmLoading(false);
        hideModal();
      }).catch(() => {
        setConfirmLoading(false); 
      });
  }

  const handleChange =  ({ target: { name, value }}) => {
    setBudgetData({
      ...budgetData,
      [name]: value
    });
  }

  const formDialogProps = {
    visible: true,
    title: 'Create Budget',
    okText: 'Save',
    onCancel: hideModal,
    onOk: handleSubmit,
    confirmLoading: confirmLoading
  };

  return (
    
    <FormDialog
      {...formDialogProps}>
      <Input 
        placeholder='Budget Name'
        name='name'
        onChange={handleChange}
      />
    </FormDialog>
  )
}

export default connect(
  null,
  { hideModal, createBudget }
)(CreateBudgetForm);
