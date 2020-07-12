import React from "react"

import "./Title.css"
const Title = () => {
    return(
    <div className="main-page">
    <div className="main-pg-cont">
    <h2 className="title">Akash.K.Shetty</h2>
    <p className="title_2">This is my personal blog that describes about me</p>
    </div>
   <div className="container">
   <img src={require("./images/IMG_20200616_183137.jpg") } alt="Avatar" className="image"></img>
    <div className="overlay">
    </div> 
   </div>
  </div>
    )
}
export default Title