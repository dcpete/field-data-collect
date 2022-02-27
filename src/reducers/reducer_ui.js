import {
  SET_IS_DARK_MODE, 
} from '../actions/actions_ui'

const initialState = {
  isDarkMode: false
};

export default function UiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload
      }
    default:
      return state
  }
};