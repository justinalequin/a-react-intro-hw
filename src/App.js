import React, { Component } from "react";
import Box from "./components/Box";
import Body from "./components/Body";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export class App extends Component {
  render(){
  return (
    <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
     <Header></Header>
    <div style={{display: "flex"}}>

     <Sidebar></Sidebar>
      <div style={{width: "75%"}}>
     <Body></Body>
     <Box></Box>
      </div>
    </div>
     <Footer></Footer>
    </div>
  );
}
};

export default App;
