import { combineReducers } from 'redux';
import UiReducer from './reducer_ui';

export default combineReducers({
  ui: UiReducer,
});