import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import TransactionView from './TransactionView';
import { connect } from 'react-redux';
import { loadTransactions } from '../../../redux/actions/transactionActions';
import { showModal } from '../../../redux/actions/modalActions';
import { MODAL_TYPES } from '../../modals';
import { today } from '../../../utils/timeUtils';

const TransactionContainer = ({ currentBudget, loadTransactions, showModal }) => {
  const [newTransaction, setNewTransaction] = useState(null);

  useEffect(() => {
    loadTransactions(currentBudget._id);
  }, [loadTransactions, currentBudget]);

  const onAddTransaction = () => {
    setNewTransaction({
      id: null,
      key: '',
      date: today,
    });
  };

  const onTransfer = () => {
    showModal(MODAL_TYPES.TRANSFER_FUNDS);
  };

  return currentBudget ? (
    <Fragment>
      <TransactionView
        onAddTransaction={onAddTransaction}
        newTransaction={newTransaction}
        onTransfer={onTransfer}
      />
    </Fragment>
  ) : null;
};

TransactionContainer.propTypes = {
  currentBudget: PropTypes.object,
  loadTransactions: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentBudget: state.currentBudget,
  };
}

export default connect(mapStateToProps, { loadTransactions, showModal })(
  TransactionContainer
);
