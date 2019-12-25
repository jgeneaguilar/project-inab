import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { showModal } from '../../../../redux/actions/modalActions';
import { MODAL_TYPES } from '../../../modals';


const AddTransactionBtn = ({ showModal }) => {

  function handleClick() {
    showModal(MODAL_TYPES.UPDATE_TRANSACTION, {});
  }

  return (
    <Button
      type='primary'
      size='small'
      ghost
      icon='plus-circle'
      className='transactionToolbarAddBtn'
      onClick={handleClick}
    >
      Add Transaction
    </Button>
  );
}

AddTransactionBtn.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default connect(null, { showModal })(AddTransactionBtn);
