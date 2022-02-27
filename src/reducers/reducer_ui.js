import { SET_MOTD } from '../actions/actions_ui'

const initialState = {
  motd: "Well...there it is."
};

export default function UiReducer (state = initialState, action) {
  switch (action.type) {
    case SET_MOTD:
      return {
        ...state,
        motd: action.payload
      }
    default:
      return state
  }
};