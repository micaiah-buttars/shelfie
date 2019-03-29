import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          name: props.product.name,
          price: props.product.price,
          imgurl: props.product.imgurl,
        }
      }

    render(){
        return (
            <div>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.price}</p>
                <img src={this.props.product.imgurl} alt="" width="200"/>



            </div>
        )
    }

}

export default Product