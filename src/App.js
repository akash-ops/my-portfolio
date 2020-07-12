import React, { Component } from 'react';
import Navbar from "./Components/Navbar"
import Carousel from "./Components/Carousel"
import Title from "./Components/Title"
import Edu_cont from "./Components/Edu_cont"
import './App.css';
import Contacts from './Components/Contacts';
import Certificates from "./Components/Certificates"
import Extracur from "./Components/Extracur"
const App = () => {
  
    return (
      <div>
        <div className="App">
        <Navbar></Navbar>  
        <Title></Title>
        </div>
        <Edu_cont></Edu_cont>
        <Carousel></Carousel>
        <Certificates></Certificates>
        <Extracur></Extracur>
        <Contacts></Contacts>
        
      </div>
    );
}

export default App;
