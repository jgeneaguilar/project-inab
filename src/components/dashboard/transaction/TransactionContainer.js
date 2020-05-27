import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import TransactionView from './TransactionView';
import moment from 'moment';
import { connect } from 'react-redux';
import { loadTransactions } from '../../../redux/actions/transactionActions';

const TransactionContainer = ({ currentBudget, payees, loadTransactions }) => {
  const [newTransaction, setNewTransaction] = useState(null);

  useEffect(() => {
    loadTransactions(currentBudget._id);
  }, [loadTransactions, currentBudget]);

  const onAddTransaction = () => {
    setNewTransaction({
      id: null,
      key: '',
      date: moment().format('MM/DD/YYYY'),
    });
  };

  return currentBudget ? (
    <Fragment>
      <TransactionView
        onAddTransaction={onAddTransaction}
        newTransaction={newTransaction}
      />
    </Fragment>
  ) : null;
};

TransactionContainer.propTypes = {
  currentBudget: PropTypes.object,
  loadTransactions: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currentBudget: state.currentBudget,
    payees: state.payees,
  };
}

export default connect(mapStateToProps, { loadTransactions })(TransactionContainer);
