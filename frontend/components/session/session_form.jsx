import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn){
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.setState({
      username: '',
      password: ''
    });
    this.props.processForm({'user': user});
  }

  handleChange(type){
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  render() {
    let title;
    let linkTo;
    switch (this.props.formType) {
      case('login'):
        title = 'Log In';
        linkTo = <Link to='/signup'> Sign Up</Link>;
        break;
      case ('signup'):
        title = 'Sign Up';
        linkTo = <Link to='/login'> Log In</Link>;
    }
    let errors = '';
    if (this.props.errors.length !== 0){
      errors = <h3> {this.props.errors[0]}</h3>;
    }
   return (
     <form onSubmit = {this.handleSubmit}>
       <h1> {title}</h1>
       {errors}
       {linkTo}
          <br />
       <input onChange = {this.handleChange('username')}
          placeholder='username' value={this.state.username}/>
          <br />
       <input onChange = {this.handleChange('password')}
         placeholder='password' value={this.state.password}/>
         <br />
      <input type='submit' value="Submit" />
     </form>
   );
  }
}

export default withRouter(SessionForm);
