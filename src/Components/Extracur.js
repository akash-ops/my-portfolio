import React from "react"
import "./Extracur.css"
const Extracur = () => {
    return(
        <div>
            <h1 id="Extraactiv" className="extra_tit">Extra curricular activities</h1>
            <a id="extra_nav" className="extra_name">Chess</a>
            <div className="extracur_sec">
                <img className="extra_img" src="https://st2.depositphotos.com/1669785/5340/i/450/depositphotos_53402271-stock-photo-close-up-of-king-chess.jpg" alt=""></img>
                <h3 className="extra_cont">I am a chess player.I have a FIDE Chess Rating of 1492.
                As a team we have acheived second place in VTU interzonals held at Chitradurga.</h3>
            </div>
            <a className="extra_name">Athletics</a>
            <div className="extracur_sec">
                <img className="extra_img" src="https://image.freepik.com/free-vector/running-man-logo-symbol_31941-29.jpg" alt=""></img>
                <h3 className="extra_cont">I have participated in VTU interzonal athletics competition held at Belgaum VTU.</h3>
            </div>
        </div>
    )
}
export default Extracur;
