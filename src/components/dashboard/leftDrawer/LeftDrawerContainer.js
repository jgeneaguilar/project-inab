import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftDrawerView from './LeftDrawerView';
import { showModal } from '../../../redux/actions/modalActions';
import { MODAL_TYPES } from '../../modals';
import { deleteAccount } from '../../../redux/actions/accountActions';
import {
  getBudgetAccounts,
  getTrackingAccounts,
} from '../../../redux/selectors/commonSelectors';

const LeftDrawerContainer = ({
  currentBudget,
  showModal,
  deleteAccount,
  budgetAccounts,
  trackingAccounts,
}) => {
  // Create a single handleClick function??
  function handleClick() {
    showModal(MODAL_TYPES.UPDATE_ACCOUNT, {});
  }
  const accounts = budgetAccounts.concat(trackingAccounts);

  function handleEditClick(id) {
    const acctData = accounts.find((acct) => acct._id === id);
    const { _id, name, type: accountType, balance } = acctData;
    showModal(MODAL_TYPES.UPDATE_ACCOUNT, {
      currentValue: { _id, name, accountType, balance },
    });
  }

  function handleDeleteClick(accountId) {
    deleteAccount(currentBudget._id, accountId);
  }

  const actions = {
    onClick: handleClick,
    onEditClick: handleEditClick,
    onDeleteClick: handleDeleteClick,
  };

  return (
    <LeftDrawerView accounts={{ budgetAccounts, trackingAccounts }} actions={actions} />
  );
};

LeftDrawerContainer.propTypes = {
  showModal: PropTypes.func.isRequired,
  currentBudget: PropTypes.object,
  deleteAccount: PropTypes.func.isRequired,
  budgetAccounts: PropTypes.array.isRequired,
  trackingAccounts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    currentBudget: state.currentBudget,
    budgetAccounts: getBudgetAccounts(state),
    trackingAccounts: getTrackingAccounts(state),
  };
}

export default connect(mapStateToProps, { showModal, deleteAccount })(
  LeftDrawerContainer
);
