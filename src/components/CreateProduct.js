import React, { Component } from 'react'

class CreateProduct extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            price: 0,
            first_image_url: '',
            second_image_url: '',
            value: [],
            visible: false
        }
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleDescription = (e) => {
        this.setState({
            description: e.target.value,
            value: e.target.value
        })
    }
    handlePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }
    handleFirstImage = (e) => {
        this.setState({
            first_image_url: e.target.value
        })
    }
    handleSecondImage = (e) => {
        this.setState({
            second_image_url: e.target.value
        })
    }
    handleClick = (body) => {
        this.setState({
            name: '',
            description: '',
            price: 0,
            firs_image_url: '',
            second_image_url: '',
            value: [],
            visible: false
        })
        this.props.addProduct(body)
    }
    toggleVisible = () => {
        this.setState({
            visible: !this.state.visible
        })
        // console.log(this.state.visible)
    }
    render() {
        let visibility = 'hide'
        if (this.state.visible) {
            visibility = 'show'
        }
        return (
            <div id='new-product-container' className={visibility}>
                <span onClick={this.toggleVisible} id='new-product-title-container' className={visibility}>
                    <h2 className='new-product-title' >New Product</h2>
                    <h2 id='plus-sign' className={visibility}>+</h2>
                </span>
                <form className='input-container'>
                    <input onChange={this.handleName} className='new-product-input' type='text' placeholder='name' maxLength={40}></input>
                    <input onChange={this.handlePrice} className='new-product-input' type='text' placeholder='price'></input>
                    <input onChange={this.handleFirstImage} className='new-product-input' type='text' placeholder='primary image url'></input>
                    <input onChange={this.handleSecondImage} className='new-product-input' type='text' placeholder='secondary image url'></input>
                    <textarea onChange={this.handleDescription} id='description-input' className='new-product-input' type='textarea' placeholder='description' maxLength={80}></textarea>
                    <text className='character-counter'>{this.state.value.length}/80</text>
                    {(this.state.name && this.state.description) && (this.state.price && this.state.first_image_url) ? <button onClick={() => this.handleClick(this.state)} className='add-button-show'>Add Product</button> : <button className='add-button-hide'></button>}
                </form>
            </div>
        )
    }
}
export default CreateProduct