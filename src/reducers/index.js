import { combineReducers } from 'redux';
import ProjectsReducer from './reducer_projects'
import UiReducer from './reducer_ui';

export default combineReducers({
  projects: ProjectsReducer,
  ui: UiReducer,
});