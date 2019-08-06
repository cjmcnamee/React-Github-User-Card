import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
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

  render() {
    return (
      <div className="App">
        <h1>Github Users</h1>
        <Card users={this.state.users}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
