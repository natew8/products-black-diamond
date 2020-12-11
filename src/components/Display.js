import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product'
import CreateProduct from './CreateProduct'

import Details from './Details'

class Display extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            product: '',
            visible: false,
            loading: true
        }
        this.addProduct = this.addProduct.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
        this.updateProduct = this.updateProduct.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
        this.toggleVisible = this.toggleVisible.bind(this)
    }

    componentDidMount() {
        axios.get('/api/products').then(res => {
            this.setState({
                products: res.data,
                loading: false
            })
        })
    }

    addProduct(name, description, price, first_image_url) {
        axios.post('/api/products', name, description, price, first_image_url).then(res => {
            this.setState({
                products: res.data,
                loading: false
            })
        })
    }
    updateProduct(id, description) {
        console.log(id, description)
        axios.put(`/api/products/${id}`, description).then(res => {
            this.setState({
                products: res.data
            })
        })

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
    toggleVisible() {
        this.setState({
            visible: !this.state.visible
        })
        console.log(this.state.visible)
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
                {this.state.loading ? <h1>Fetching Products...</h1> : <div className='product-display'>
                    {productsMap}

                </div>}
                <Details
                    product={this.state.product}
                    name={this.state.product.name}
                    description={this.state.product.description}
                    price={this.state.product.price}
                    firstImage={this.state.product.first_image_url}
                    secondImage={this.state.product.second_image_url}
                    toggleVisible={this.toggleVisible}
                    updateProduct={this.updateProduct}
                    id={this.state.product.product_id} />
            </div>
        )
    }
}

export default Display