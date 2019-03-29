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
        let {value} = e.target
        let id = e.target.id

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

    
    render(){
        return (
            <div>
                <div>Form</div>
                <input id="imageUrl" onChange={this.handleChange}/>
                <input id="productName" onChange={this.handleChange}/>
                <input id="price" onChange={this.handleChange}/>

                <button onClick={this.handleClickCancel}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
            
        )
    }

}

export default Form