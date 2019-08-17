import React  from 'react';
import AddAccountForm from './AddAccountForm';
import { connect } from 'react-redux';
import CreateBudgetForm from './CreateBudgetForm';

export const MODAL_COMPONENTS = {
  ADD_ACCOUNT: AddAccountForm,
  CREATE_BUDGET: CreateBudgetForm
};

// to be used by the showModal() action creator
export const MODAL_TYPES = {
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  CREATE_BUDGET: 'CREATE_BUDGET'
};


const ModalRoot = ({ modalType, modalProps }) => {

  if(!modalType) {
    return null;
  }
  
  const CurrentModal = MODAL_COMPONENTS[modalType];

  return <CurrentModal {...modalProps} />
}


export default connect(state => state.modal)(ModalRoot);
