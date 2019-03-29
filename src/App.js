import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';


class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: [{
        name: 's',
        price: 0,
        imgurl: 'a'
      }, {
        name: 's',
        price: 0,
        imgurl: 'a'
      }, {
        name: 'sa',
        price: 0,
        imgurl: 's'
      }]
    }
  }
  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory}/>
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
