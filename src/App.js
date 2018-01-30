import React from 'react';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class Profile extends React.Component {
  //Define the state of the app
  state = {
    username: 'perusoa@gmail.com'
  };

  //Typing event handler to change the username dependign on what is being typed
  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="site-container">
        <h1>Login</h1>
        <UserInput userchange={ this.onUsernameChange.bind(this) } username={this.state.username} />
        <div className="site-body">
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
        </div>
      </div>
    );
  }
}

export default Profile;