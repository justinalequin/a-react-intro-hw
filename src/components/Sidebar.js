import React, { Component } from 'react'


export class Sidebar extends Component {

    state = {
        sidebarColor: "",
    }

    sidebarColorChange = (color) => {
        this.setState({
            backgroundColor: color,
        });
    }

    render() {
        console.log(this.props);
        return (
            <div style={{backgroundColor: this.state.backgroundColor}}>


            <ul>

            <li onClick={() => this.sidebarColorChange("purple")}>PURPLE</li>

            <li onClick={() => this.sidebarColorChange("green")}>GREEN</li>

            <li onClick={() => this.sidebarColorChange("pink")}>PINK</li>

            </ul>
                

            </div>
        )
    }
}



export default Sidebar
