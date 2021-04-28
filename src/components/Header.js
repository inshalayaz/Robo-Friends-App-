import React, { Component } from 'react'

export default class Header extends Component {

    // We used this lifecycle to load the Header component just once

    shouldComponentUpdate(nextProps, nextState){
        return false 
    }

    render() {
        return (
            <div>
                <h1 className='white' >Robo Friends</h1>
            </div>
        )
    }
}
