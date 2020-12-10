import React from 'react'

function Product(props) {

    return (
        <div onClick={() => props.handleStateChange(props.product)} className='product-container'>
            <div onClick={() => props.deleteProduct(props.product.product_id)} className='delete-key'>X</div>
            <img className='product-image' key={props.key} src={props.product.first_image_url} alt='Product' />
            <h2 className='product-name'>{props.product.name}</h2>
            {/* <h3 className='product-price'>${props.product.price}.00</h3> */}
            {/* <p className='product-description'>{props.product.description}</p> */}
        </div>
    )
}

export default Product