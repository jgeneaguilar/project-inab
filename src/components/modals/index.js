import React from 'react';
import UpdateAccountForm from './UpdateAccountForm';
import { connect } from 'react-redux';
import CreateBudgetForm from './CreateBudgetForm';
import UpdateTransactionForm from './UpdateTransactionForm';
import OpenBudgetForm from './OpenBudgetForm';


export const MODAL_COMPONENTS = {
  UPDATE_ACCOUNT: UpdateAccountForm,
  CREATE_BUDGET: CreateBudgetForm,
  OPEN_BUDGET: OpenBudgetForm,
  UPDATE_TRANSACTION: UpdateTransactionForm
};

// to be used by the showModal() action creator
export const MODAL_TYPES = {
  UPDATE_ACCOUNT: 'UPDATE_ACCOUNT',
  CREATE_BUDGET: 'CREATE_BUDGET',
  OPEN_BUDGET: 'OPEN_BUDGET',
  UPDATE_TRANSACTION: 'UPDATE_TRANSACTION'
};


const ModalRoot = ({ modalType, modalProps }) => {

  if(!modalType) {
    return null;
  }
  
  const CurrentModal = MODAL_COMPONENTS[modalType];

  return <CurrentModal {...modalProps} />;
}


export default connect(state => state.modal)(ModalRoot);
