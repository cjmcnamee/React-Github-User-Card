import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Card from './components/Card';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchFollowers();
  }

  fetchUsers = () => {
    fetch(`https://api.github.com/users/cjmcnamee`)
      .then(res => {
        return res.json();
      })
      .then(git => this.setState({ users: git }))
      .catch(err => {
        console.log('you fucked up');
      })
  }

  fetchFollowers = () => {
    fetch(`https://api.github.com/users/cjmcnamee/followers`)
      .then(res => {
        return res.json();
      })
      .then(git => this.setState({ followers: git }))
      .catch(err => {
        console.log('you fucked up, again');
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Connor:</h1>
        <br />
        <Card users={this.state.users}/>
        <h2>and some other bitches:</h2>
        <FollowerCard followers={this.state.followers}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
