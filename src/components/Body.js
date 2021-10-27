import React, { Component } from 'react'
import no from '../images/no.jpeg'

export class Body extends Component {
    render() {
        console.log(this.props);
        return (
            <div style={{
                backgroundColor: 'red',
            }}>
                <img src={no} width="300" height ="150"/>
                <div >This is my well written paragraph describing the beauty contained in this picture. This picure can do more than my words. Thank you, and enjoy!</div>

                

            </div>
        )
    }
}



export default Body
