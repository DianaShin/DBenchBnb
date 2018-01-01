import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
const prevState = {
  currentUser: null
};

const sessionReducer = (state = prevState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    return {currentUser: action.currentUser};
        // currentUser: action.currentUser,
    default:
      return state;
  }
};

export default sessionReducer;
