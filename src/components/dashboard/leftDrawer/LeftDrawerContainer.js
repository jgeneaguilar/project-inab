import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftDrawerView from './LeftDrawerView';
import { showModal } from '../../../redux/actions/modalActions';
import { MODAL_TYPES } from '../../modals';
import { deleteAccount } from '../../../redux/actions/accountActions';

const LeftDrawerContainer = ({ accounts, currentBudget, showModal, deleteAccount }) => {

  // Create a single handleClick function??
  function handleClick() {
    showModal(MODAL_TYPES.UPDATE_ACCOUNT, {})
  }

  function handleEditClick(id) {
    const acctData = accounts.find(acct => acct._id === id);
    const { name, type: accountType, balance } = acctData;
    showModal(MODAL_TYPES.UPDATE_ACCOUNT, {
      currentValue: { name, accountType, balance }
    });
  }

  function handleDeleteClick(accountId) {
    deleteAccount(currentBudget._id, accountId);
  }

  return (
    <LeftDrawerView 
      handleClick={handleClick}
      handleEditClick={handleEditClick}
      handleDeleteClick={handleDeleteClick}
      accounts={accounts}
    />
  );
}

LeftDrawerContainer.propTypes = {
  showModal: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  currentBudget: PropTypes.object,
  deleteAccount: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { 
    accounts: state.accounts,
    currentBudget: state.currentBudget,
  };
}

export default connect(mapStateToProps, { showModal, deleteAccount })(LeftDrawerContainer);

