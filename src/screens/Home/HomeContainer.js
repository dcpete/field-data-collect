import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state, ownProps) => {
  return {
    motd: state.ui.motd
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);