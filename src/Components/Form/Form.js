import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()

        this.state={
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    

    handleChange = e => {
        let {id, value} = e.target
        // let id = e.target.id

        this.setState({
            [id]: value
        })
    }


    // Doesn't actually clear input boxes, but sets state of them to be blank.
    handleClickCancel = () => {

        this.setState({
            name: '',
            price: 0,
            imgurl: ''

        })
    }
 // Doesn't actually clear input boxes, but does other intended purposes.
    handleClickAdd = () => {
        let product = this.state
        this.props.createProduct(product)
    }

    
    render(){
        return (
            <div>
                <div>Form</div>
                <input type="text" id="name" onChange={this.handleChange}/>
                <input type="number" id="price" onChange={this.handleChange}/>
                <input type="text" id="imageUrl" onChange={this.handleChange}/>

                <button onClick={this.handleClickCancel}>Cancel</button>
                <button onClick={this.handleClickAdd}>Add to Inventory</button>
            </div>
            
        )
    }

}

export default Form