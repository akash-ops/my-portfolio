import React from "react"
import "./Carousel.css"
const Carousel = () => {
    return(
        <div className="lop">
        <h1 id="Project1" className="project_heading">Projects</h1>
        <div className="bd-example">
  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={require("./images/tic.png")} className="d-block w-100" alt="Tic tac toe"></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Tic Tac Toe</h5>
          <p>Tic-Tac-Toe is done using React.This is available on my linkedin page</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={require("./images/WhatsApp Image 2020-07-06 at 19.46.14.jpeg")} className="d-block w-100" alt="..."></img>
        <div className="carousel-caption d-none d-md-block">
          <h5>Simulation of space re-entry Capsule</h5>
          <p>It is to show the simulation during space Re-entry Capsule.</p>
        </div>
      </div>
      <div className="carousel-item">
      <video width="1300" height="600" controls>
        <source src={require("./images/WhatsApp Video 2020-05-27 at 09.33.15.mp4")} type="video/mp4"></source>
        <source src="movie.ogg" type="video/ogg"></source>
        Your browser does not support the video tag.
    </video>
        <div className="carousel-caption d-none d-md-block">
          <h5>IOT Based Remote Dental Surgical Robot</h5>
          <p>The robot is controlled using Joystick.Using IOT the robot surgery can be done remotely</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
        </div>    
    ) 
}
export default Carousel;
{/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require("./images/WhatsApp Image 2020-07-06 at 19.46.14.jpeg") } className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
    <video width="1300" height="800" controls>
        <source src={require("./images/WhatsApp Video 2020-05-27 at 09.33.15.mp4")} type="video/mp4"></source>
        <source src="movie.ogg" type="video/ogg"></source>
        Your browser does not support the video tag.
    </video>
    </div>
    <div className="carousel-item">
      <img src={require("./images/tic.png") } className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
     */}