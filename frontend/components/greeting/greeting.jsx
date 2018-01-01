import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.handleClick.bind(this);
  }

  handleClick(type){
    switch(type){
      case 'logout':
        return this.props.logout;
    }
  }

  render(){
    if (this.props.currentUser === null) {
      return (
        <div>
          <Link to="/signup"> Sign Up</Link>
          <br />
          <Link to="/login">Login</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h2> Welcome {this.props.currentUser.username}</h2>
        </div>
      );
    }
  }
}

export default Greeting;
