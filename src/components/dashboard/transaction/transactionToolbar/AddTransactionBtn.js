import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { showModal } from '../../../../redux/actions/modalActions';
import { addTransaction } from '../../../../redux/actions/transactionActions';
import { NEW_ROW } from '../transactionTable/TransactionTableContainer';


const AddTransactionBtn = ({addTransaction}) => {

  function handleClick() {
    const today = moment().format('MM/DD/YYYY');
    addTransaction({
      id: NEW_ROW,
      key: NEW_ROW, 
      date: today,
      });
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
  addTransaction: PropTypes.func.isRequired,
};

export default connect(null, { showModal, addTransaction })(AddTransactionBtn);
