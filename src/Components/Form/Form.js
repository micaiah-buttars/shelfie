import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)

        this.state={
            id: null,
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    componentDidUpdate(prevProps){
        let {id, name, price, img} = this.props.product
        if(prevProps.product.id !== this.props.product.id){
            this.setState({
                id,
                name,
                price,
                img,
                edit: true
            })
        }
    }

    

    handleChange = e => {
        let {id, value} = e.target

        this.setState({
            [id]: value
        })
    }


    handleClickCancel = () => {
        document.getElementById("form").reset()

    }


    handleClickAdd = () => {
        let {name, price, img} = this.state
        let product = {
            name,
            price,
            img
        }
        this.props.createProduct(product)
        document.getElementById("form").reset()
        this.props.getInventory()
    }

    handleEdit(){
        let {name, price, img} = this.state
        let product = {
            name,
            price,
            img
        }
        this.props.editSelect(product)
    }
    

    
    render(){
        return (
            <div>
                <form className="form" id="form">
                <input type="text" placeholder="name"  id="name" onChange={this.handleChange}/>
                <input type="number" placeholder="price" id="price" onChange={this.handleChange}/>
                <input type="text" placeholder="image" id="imageUrl" onChange={this.handleChange}/>
                <button onClick={this.handleClickCancel}>Cancel</button>
                {this.state.id
            ? <button onClick={this.handleEdit}>Save Changes</button>
            : <button onClick={this.handleClickAdd}>Add to Inventory</button>
          }
                </form>
                

            </div>
            
        )
    }

}

export default Form