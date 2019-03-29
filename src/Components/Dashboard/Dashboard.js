import React, { Component } from 'react'
import axios from 'axios'
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.deleteProduct = this.deleteProduct.bind(this)
    }
    deleteProduct(id){
        axios.delete(`/api/inventory/${id}`).then(res => {
          this.props.getInventory()
          })
      }
    

    render(){
        return (
            <div>
                <div>Dashboard</div>
                {this.props.inventory.map(product => {
                    return <Product
                    key={product.id}
                    product={product}
                    deleteProduct={this.deleteProduct}
                    setId={this.props.setId}/>
                })}
            </div>

            
        )
    }

}
export default Dashboard