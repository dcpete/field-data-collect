import { connect } from 'react-redux';
import ProjectsList from './ProjectsList';

const mapStateToProps = (state, ownProps) => {
  return {
    isDarkMode: state.ui.isDarkMode,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);