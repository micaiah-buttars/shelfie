import React, { Component } from 'react'
import Product from '../Product/Product';

class Dashboard extends Component {

    render(){
        return (
            <div>
                <div>Dashboard</div>
                {this.props.inventory.map(product => {
                    return <Product
                    key={product.id}
                    product={product}/>
                })}
            </div>

            
        )
    }

}
export default Dashboard