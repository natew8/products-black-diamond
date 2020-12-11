import React, { Component } from 'react'
import EditDescription from './EditDescription'

class Details extends Component {
    constructor(props) {
        super()
        this.state = {
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            second_image_url: props.second_image_url
        }
    }


    render(props) {
        return (
            <span>
                {!this.props.product ? <h1 id='details-display-landing'>Select A Product to View Details</h1> :
                    <div id='details-display' >
                        <img className='product-image-details' src={this.props.secondImage !== '' ? this.props.secondImage : this.props.firstImage} alt='guitar' />
                        <h1 className='details-header'>{this.props.name}</h1>
                        <h2 className='details-price'>{`$${this.props.price}`}</h2>
                        <p className='details-description'>{this.props.description}</p>
                        <EditDescription
                            product={this.props.product}
                            description={this.props.description}
                            id={this.props.id}
                            updateProduct={this.props.updateProduct}
                            toggleVisible={this.props.toggleVisible} />
                    </div>}
            </span>
        )
    }
}

export default Details