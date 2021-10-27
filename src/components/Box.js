import React, { Component } from 'react'


export class Box extends Component {
    render() {
        console.log(this.props);
        return (
            <div style={{
               
            }}>
                <div style={{ display: "flex", justifyContent: "space-around", padding: "25px", border: "solid 10px blue"}}>

            <div style={{backgroundImage: `url(https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1183822926.jpg)`,border: 'green solid 5px', height: "150px", width: "150px", color: 'white'}}>BOX 1</div>
            <div style={{backgroundImage: `url(https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/cat-behaviour.jpg)`,border: 'red solid 5px' , height: "150px", width: "150px", color: "white"}}>BOX 2</div>
            <div style={{backgroundImage: `url(https://static01.nyt.com/images/2014/07/23/upshot/23UP-cat/23UP-cat-superJumbo.jpg)` ,border: 'orange solid 5px', height: "150px", width: "150px", color:"white"}}>BOX 3</div>

                </div>

                

            </div>
        )
    }
}

const styles = {
backgroundColor: 'blue',
}

export default Box
