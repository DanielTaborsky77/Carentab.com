import Yellow from "../assets/images/zlutasek.png";
import Kugstr from "../assets/images/kugstr.png";
import "./Vehicle.css"

import React, {useState} from "react";

const Vehicle = (props) => {

    const openPriceYellow = () => {
       document.getElementById("Price-Window-Background-Yellow").style.display= 'flex'; 
       document.body.style.overflow = "hidden";
    }
    const closePriceYellow = () => {
        document.getElementById("Price-Window-Background-Yellow").style.display= 'none'; 
        document.body.style.overflow = "visible";

    }

    const openPriceKugstr = () => {
        document.getElementById("Price-Window-Background-Kugstr").style.display= 'flex'; 
        document.body.style.overflow = "hidden";
     }
    const closePriceKugstr = () => {
        document.getElementById("Price-Window-Background-Kugstr").style.display= 'none'; 
        document.body.style.overflow = "visible";
    }
    if(props.model == "Yellow"){
        return(
            <div>
                <div className="Vehicle-Card">
                    <div>
                    
                    <p className="Vehicle-Name">{"Volkswagen golf IV"}</p>
        
                    <div className="Vehicle-Atributes">
                        <p className="Vehicle-Atribute">Motor: {"1.9 TDI"}</p>
                        <p className="Vehicle-Atribute">Výkon: {"74 KW"}</p>
                        <p className="Vehicle-Atribute">Rok výroby: {"2002"}</p>
                        <p className="Vehicle-Atribute">Druh karosérie: {"Kombi"}</p>
                    </div>
                    <div className="Vehicle-Links">
                        <a href="#HomepageLeftSide"><button className="Vehicle-Button">Rezervovat</button></a>
                        <button onClick={openPriceYellow} className="Vehicle-Price">Ceník</button>
                    </div>
                    </div>
                    
                    <div className="Vehicle-IMG">
                        <img src={ Yellow } alt="" />
                    </div>

                    
                    
                </div>
                <div id="Price-Window-Background-Yellow">
                    <div className="Price-Window">
                        <span id="Close-Price-Window" onClick={closePriceYellow}>×</span>
                        <div className="Prices">
                            <div>
                                <p className="Days">1 - 3 dny</p>
                                <p className="Price">800 Kč</p>
                            </div>
                                
                            <div>
                                <p className="Days">4 - 7 dnů</p>
                                <p className="Price">700 Kč</p>
                            </div>

                            <div>
                                <p className="Days">8 - 14 dnů</p>
                                <p className="Price">600 Kč</p>
                            </div>

                            <div>
                                <p className="Days">15 - 30 dnů</p>
                                <p className="Price">500 Kč</p>
                            </div>
                        </div>
                        <p className="Price-Info"><b>31 a více</b> dní se bude řešit individuálně.</p>
                        <p className="Price-Info">Denní limit je <b>250 Km</b> (Každý další ujetý kilometr je za <b>3 Kč</b>)</p>
                        <p className="Price-Info">Před půjčením vozidla se platí vratná kauce <b>5 000 Kč</b></p>
                    </div>
                </div>
                
            </div>
            )
    }
    else if (props.model == "Kugstr") {
        return(
            <div>
                <div className="Vehicle-Card">
                    <div>
                    
                    <p className="Vehicle-Name">{"Ford Kuga"}</p>
        
                    <div className="Vehicle-Atributes">
                        <p className="Vehicle-Atribute">Motor: {"2.0 TDCi"}</p>
                        <p className="Vehicle-Atribute">Výkon: {"103 KW"}</p>
                        <p className="Vehicle-Atribute">Rok výroby: {"2011"}</p>
                        <p className="Vehicle-Atribute">Druh karosérie: {"SUV"}</p>
                    </div>
                    <div className="Vehicle-Links">
                        <a href="#HomepageLeftSide"><button className="Vehicle-Button">Rezervovat</button></a>
                        <button onClick={openPriceKugstr} className="Vehicle-Price">Ceník</button>
                    </div>
                    </div>
                    
                    <div className="Vehicle-IMG">
                        <img width="500px" src={ Kugstr } alt="" />
                    </div>
                    
                </div>
                <div id="Price-Window-Background-Kugstr">
                    <div className="Price-Window">
                        <span id="Close-Price-Window" onClick={closePriceKugstr}>×</span>
                        <div className="Prices">
                            <div>
                                <p className="Days">1 - 3 dny</p>
                                <p className="Price">1100 Kč</p>
                            </div>
                                
                            <div>
                                <p className="Days">4 - 7 dnů</p>
                                <p className="Price">1000 Kč</p>
                            </div>

                            <div>
                                <p className="Days">8 - 14 dnů</p>
                                <p className="Price">900 Kč</p>
                            </div>

                            <div>
                                <p className="Days">15 - 30 dnů</p>
                                <p className="Price">800 Kč</p>
                            </div>
                        </div>
                        <p className="Price-Info"><b>31 a více</b> dní se bude řešit individuálně.</p>
                        <p className="Price-Info">Denní limit je <b>250 Km</b> (Každý další ujetý kilometr je za <b>3 Kč</b>)</p>
                        <p className="Price-Info">Před půjčením vozidla se platí vratná kauce <b>7 000 Kč</b></p>
                    </div>
                </div>
            </div>
            )
    }
    
}

export default Vehicle