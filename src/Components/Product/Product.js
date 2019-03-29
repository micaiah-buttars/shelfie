import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          id: props.product.id,
          name: props.product.name,
          price: props.product.price,
          imgurl: props.product.imgurl,
        }
      }


      handleSetId = () =>{
          this.props.setId(this.state.id)
      }
      handleDeleteProduct = () =>{
          this.props.deleteProduct(this.state.id)
      }

    render(){
        return (
            <div>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.price}</p>
                <img src={this.props.product.imgurl} alt="" width="200"/>
                <button onClick={this.handleDeleteProduct}>Delete</button>
                <button onClick={this.handleSetId}>Edit</button>



            </div>
        )
    }

}

export default Product