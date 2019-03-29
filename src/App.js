import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: [],
      currentProduct: {}
    }
    this.getInventory = this.getInventory.bind(this)
    this.editSelect = this.editSelect.bind(this)
  }

  setId = id => {
    this.setState({
      id: id,
    })
  }
  editSelect(product) {
    this.setState({
      currentProduct: product
    })
  }




  createProduct = product => {
    axios.post('/api/product', product).then(res => {
      this.setState({
        inventory: res.data
      })
      this.getInventory()
    })
}
 
  updateProduct = product => {
    axios.put(`/api/inventory/${product.id}`, product).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }


  componentDidMount() {
    this.getInventory()
  }

  getInventory() {
    axios.get('/api/inventory')
      .then(res => this.setState({ inventory: res.data }))
  }


  
  render() {
    if(this.componentDidMount){
      return (
        <div className="App">
          <Header />
          <Dashboard inventory={this.state.inventory}
          setId={this.setId}
          deleteProduct={this.deleteProduct}
          getInventory={this.getInventory}/>
          <Form 
          product={this.state.currentProduct}
          getInventory={this.getInventory}
          createProduct={this.createProduct}
          editSelect={this.editSelect}/>
        </div>
      );
    }
    
  }
}

export default App;
