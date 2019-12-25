import React from 'react';
import PropTypes from 'prop-types';
import FormDialog from '../../commons/FormDialog';
import { connect } from 'react-redux';
import { hideModal } from '../../redux/actions/modalActions';


const UpdateTransactionForm = ({ hideModal }) => {

  const formDialogProps = {
    visible: true,
    title: 'Add a Transaction',
    okText: 'Add Transaction',
    onCancel: hideModal,
    // onOk: handleSubmit,
    // confirmLoading: confirmLoading
  };

  return (
    <FormDialog {...formDialogProps}>
      This part will contain the forms
    </FormDialog>
  );
}

UpdateTransactionForm.propTypes = {
  hideModal: PropTypes.func.isRequired,
};

export default connect(null, { hideModal })(UpdateTransactionForm);
