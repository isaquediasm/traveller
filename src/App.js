import React, { Component } from 'react';
import './App.css';
import { Dropdown, Header, Input } from './components'
import offers from './resources/offers.json'

class App extends Component {
  render() {
    console.log(offers)

    return (
      <div className="App">
        <Header>
          <Input />
          <Dropdown />
        </Header>
      </div>
    );
  }
}

export default App;
