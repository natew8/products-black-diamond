import React, { Component } from 'react'

class CreateProduct extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            price: '',
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
        this.props.addProduct(body)
        setTimeout(() => {
            this.setState({
                name: '',
                description: '',
                price: 'price',
                first_image_url: '',
                second_image_url: '',
                value: [],
                visible: false
            })
        }, 1000);
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
            <div id='new-product' className={visibility}>
                <div className='new-product-container' >
                    <form value='' className='input-container'>
                        <h1>Name</h1>
                        <input value={this.state.name} onChange={this.handleName} className='new-product-input' type='text' placeholder='name' maxLength={40}></input>
                        <h1>Price</h1>
                        <input value={this.state.price} onChange={this.handlePrice} className='new-product-input' type='text' placeholder='price'></input>
                        <h1>Primary Image</h1>
                        <input value={this.state.first_image_url} onChange={this.handleFirstImage} className='new-product-input' type='text' placeholder='primary image url'></input>
                        <h1>Secondary Image</h1>
                        <input value={this.state.second_image_url} onChange={this.handleSecondImage} className='new-product-input' type='text' placeholder='secondary image url'></input>
                        <h1>Add a Description</h1>
                        <textarea value={this.state.description} onChange={this.handleDescription} id='description-input' className='new-product-input' type='textarea' placeholder='description' maxLength={80}></textarea>
                        <text className='character-counter'>{this.state.value.length}/80</text>
                    </form>
                    {(this.state.name && this.state.description) && (this.state.price && this.state.first_image_url) ? <button onClick={() => this.handleClick(this.state)} className='add-button-show'>Add Product</button> : <button className='add-button-hide'></button>}
                </div>
                <span onClick={this.toggleVisible} id='new-product-title-container' className={visibility}>
                    <h2 className='new-product-title' >New Product</h2>
                    <h2 id='plus-sign' className={visibility}>+</h2>
                </span>
            </div>
        )
    }
}
export default CreateProduct