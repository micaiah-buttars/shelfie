import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()

        this.state={
            imageUrl: '',
            productName: '',
            price: ''
        }
    }

    handleChange = e => {
        let {value} = e.target
        let name = e.target.name

        this.setState({
            [name]: value
        })
    }


    // Doesn't actually clear input boxes, but sets state of them to be blank.
    handleClickCancel = () => {
        let value = ''

        this.setState({
            imageUrl: value,
            productName: value,
            price: value

        })
    }

    
    render(){
        return (
            <div>
                <div>Form</div>
                <input name="imageUrl" onChange={this.handleChange}/>
                <input name="productName" onChange={this.handleChange}/>
                <input name="price" onChange={this.handleChange}/>

                <button onClick={this.handleClickCancel}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
            
        )
    }

}

export default Form