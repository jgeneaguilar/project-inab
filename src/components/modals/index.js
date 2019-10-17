import React from 'react';
import UpdateAccountForm from './UpdateAccountForm';
import { connect } from 'react-redux';
import CreateBudgetForm from './CreateBudgetForm';


export const MODAL_COMPONENTS = {
  UPDATE_ACCOUNT: UpdateAccountForm,
  CREATE_BUDGET: CreateBudgetForm
};

// to be used by the showModal() action creator
export const MODAL_TYPES = {
  UPDATE_ACCOUNT: 'UPDATE_ACCOUNT',
  CREATE_BUDGET: 'CREATE_BUDGET'
};


const ModalRoot = ({ modalType, modalProps }) => {

  if(!modalType) {
    return null;
  }
  
  const CurrentModal = MODAL_COMPONENTS[modalType];

  return <CurrentModal {...modalProps} />;
}


export default connect(state => state.modal)(ModalRoot);
