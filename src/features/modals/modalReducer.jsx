import { MODAL_OPEN, MODAL_CLOSE } from './modalConstants';
import { createReducer } from '../../app/common/util/reducerUtil';

const initalState = null;

export const openModal = (state, payload) => {
  const {modalType, modalProps} = payload;
  return {modalType, modalProps}
}

export const closeModal = (state, payload) => {
  return null;
}

export default createReducer(initalState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
})
