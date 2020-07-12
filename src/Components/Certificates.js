import React from "react"
import "./Certificates.css"
const Certificates = () => {
    return(
      <div>
        <div className="cert_tg">
        <h1 id="Cert1" className="cert_tit">Certificates</h1>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require("./images/pyth_cert.png")} class="d-block w-100" alt="python vcertificate"></img>
    </div>
    <div class="carousel-item">
      <img src={require("./images/cert1.png")} class="d-block w-100" alt="python vcertificate"></img>
    </div>
    <div class="carousel-item">
      <img src={require("./images/course_michi.png")} class="d-block w-100" alt="python vcertificate"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
    </div>

        
    )
}

export default Certificates;