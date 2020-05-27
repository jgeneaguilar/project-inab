import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function modal(state = initialState.modal, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps,
      };
    case types.HIDE_MODAL:
      return initialState.modal;
    default:
      return state;
  }
}
