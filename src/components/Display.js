import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product'
import CreateProduct from './CreateProduct'
// import Details from './Details'

class Display extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            product: ''
        }
        this.addProduct = this.addProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
    }

    componentDidMount() {
        axios.get('/api/products').then(res => {
            this.setState({
                products: res.data,
            })
        })
    }

    addProduct(name, description, price, first_image_url) {
        axios.post('/api/products', name, description, price, first_image_url).then(res => {
            this.setState({
                products: res.data
            })
        })
    }
    updateProduct(id) {
        console.log(id)
    }
    deleteProduct(id) {
        axios.delete(`/api/products/${id}`).then(res => {
            this.setState({
                products: res.data
            })
        })
    }
    handleStateChange(e) {
        this.setState({
            product: { ...e }
        })
        // console.log(this.state.product)
    }

    render() {
        // console.log(this.state.products)
        const productsMap = this.state.products.map((e, index) => {
            return (
                <Product
                    key={index}
                    product={e}
                    products={this.state.products}
                    deleteProduct={this.deleteProduct}
                    handleStateChange={this.handleStateChange} />
            )
        })
        return (
            <div className='display'>
                <CreateProduct
                    products={this.state.products}
                    addProduct={this.addProduct} />
                <div className='product-display'>
                    {productsMap}

                </div>
                {!this.state.product ? <h1 id='details-display'>Select A Product to View Details</h1> :
                    <div id='details-display' >
                        <img className='product-image-details' src={this.state.product.second_image_url} />
                        <h1 className='details-header'>{this.state.product.name}</h1>
                        <h2 className='details-price'>{`$${this.state.product.price}`}</h2>
                        <p className='details-description'>{this.state.product.description}</p>
                        <button>Edit Info</button>
                    </div>}
                {/* <Details
                    updateProduct={this.updateProduct}
                    products={this.state.products} /> */}
            </div>
        )
    }
}

export default Display