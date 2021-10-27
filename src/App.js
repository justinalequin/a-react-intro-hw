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
    <div className="App">
     <Header></Header>
     <Sidebar></Sidebar>
     <Body></Body>
     <Box></Box>
     <Footer></Footer>
    </div>
  );
}
};

export default App;
