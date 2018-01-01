import {connect} from 'react-redux';
import sessionForm from './session_form';
import {withRouter} from 'react-router';
import { login, signup} from '../../actions/session_actions';



const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: ownProps.location.pathname.slice(1)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  switch (ownProps.location.pathname.slice(1)) {
    case 'login':
      return ({
        processForm: (user) => dispatch(login(user))
      });
    case 'signup':
      return ({
        processForm: (user) => dispatch(signup(user))
      });
    default:
      return ({
        processForm: (user) => dispatch(signup(user))
      });
  }
};

// const mapDispatchToProps = (dispatch, {location}) => {
//   const formType = location.pathname.slice(1);
//   const processForm = (formType === 'login') ? login : signup
//   return {
//     processForm: user => dispatch(processForm(user)),
//   };
// };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(sessionForm));
