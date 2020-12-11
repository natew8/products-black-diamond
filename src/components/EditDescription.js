import React, { Component } from 'react'

export default class EditDescription extends Component {
    constructor(props) {
        super()
        this.state = {
            id: props.id,
            description: '',
            visible: false,
            value: [],
            alert: false
        }
    }


    handleState = (e) => {
        this.setState({
            description: e.target.value,
            value: e.target.value,
            alert: false
        })
    }
    handleClick = (id, body) => {
        if (this.state.description === '') {
            alert('Dont leave me blank!')
            this.setState({
                alert: true
            })
        } else {
            this.props.updateProduct(id, body)
            setTimeout(() => {
                this.setState({
                    description: '',
                    visible: false,
                    alert: false
                })
            }, 500);
        }
    }
    toggleVisible = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        let visibility = 'hide'
        if (this.state.visible) {
            visibility = 'show'
        }
        let alert = null
        if (this.state.alert) {
            alert = 'alert'
        }
        const { description } = this.props.product
        return (
            <div>
                {this.state.visible ? <img className='down-arrow' src='https://assets.stickpng.com/images/58f8bd170ed2bdaf7c128308.png' alt='down arrow' onClick={this.toggleVisible} /> : <button onClick={this.toggleVisible} className='edit-button'>Edit Comment</button>}
                < div id='edit-container' className={visibility} >
                    <input onChange={this.handleState} id='edit-description-input' className={visibility, alert} type='text' placeholder={description} maxLength={80} />
                    <text className='character-counter'>{this.state.value.length}/80</text>
                    <button onClick={() => this.handleClick(this.props.id, this.state)} className='submit-button'>submit</button>
                </ div >
            </div>
        )
    }
}