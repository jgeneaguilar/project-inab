import * as types from '../actions/actionTypes';

export function showModal(modalType, modalProps) {
  return {
    type: types.SHOW_MODAL,
    modalType: modalType,
    modalProps: modalProps
  };
}

export function hideModal() {
  return { type: types.HIDE_MODAL };
}