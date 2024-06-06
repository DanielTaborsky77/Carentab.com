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

    const openAtributesYellow = () => {
        document.getElementById("Open-Car-Atributes-Yellow").style.display= 'flex';
        document.body.style.overflow = "hidden";
    }
    const closeCarYellow = () => {
        document.getElementById("Open-Car-Atributes-Yellow").style.display= 'none';
        document.body.style.overflow = "visible";
    }

    const openAtributesKugstr = () => {
        document.getElementById("Open-Car-Atributes-Kugstr").style.display= 'flex';
        document.body.style.overflow = "hidden";
    }
    const closeCarKugstr = () => {
        document.getElementById("Open-Car-Atributes-Kugstr").style.display= 'none';
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
                    
                    <p className="Vehicle-Name">{"VW golf IV"}</p>
        
                    <div className="Vehicle-Atributes">
                        <p className="Vehicle-Atribute">Motor: {"1.9 TDI"}</p>
                        <p className="Vehicle-Atribute">Výkon: {"74 KW"}</p>
                        <p className="Vehicle-Atribute">Rok výroby: {"2002"}</p>
                        <p className="Vehicle-Atribute">Druh karosérie: {"Kombi"}</p>
                        <button onClick={openAtributesYellow} className="Vehicle-Info-Button">Další parametry...</button>
                    </div>
                    <div className="Vehicle-Links">
                        <a href="#HomepageLeftSide"><button className="Vehicle-Button">Rezervovat</button></a>
                        <button onClick={openPriceYellow} className="Vehicle-Price">Ceník</button>
                    </div>
                    </div>
                    
                    <div className="Vehicle-IMG-Yellow">
                        <img src={ Yellow } alt="" />
                    </div>

                    
                    
                </div>
                <div id="Open-Car-Atributes-Yellow">
                    <div className="Car-Window">
                        <span id="Close-Car-Window" onClick={closeCarYellow}>×</span>
                        <h1 className="Car-Title">Volkswagen Golf IV</h1>
                        <div className="Car-Atributes-Top">
                        
                            <div className="Car-Atributes">
                                <div className="Car-Left-Atributes">
                                    <p className="Car-Atribute"><b>Motor: </b>1.9 TDI</p>
                                    <p className="Car-Atribute"><b>Obsah: </b>1896 CCM</p>
                                    <p className="Car-Atribute"><b>Převodovka: </b>Manuální</p>
                                    <p className="Car-Atribute"><b>Rok výroby: </b>2002</p>
                                    <p className="Car-Atribute"><b>Druh Karosérie: </b>Kombi</p>
                                </div>
                                <div className="Car-Right-Atributes">
                                    <p className="Car-Atribute"><b>Výkon: </b>74 KW</p>
                                    <p className="Car-Atribute"><b>Palivo: </b>Nafta</p>
                                    <p className="Car-Atribute"><b>Počet převodových stupňů: </b>5</p>
                                    <p className="Car-Atribute"><b>Spotřeba: </b>5l / 100Km</p>
                                    <p className="Car-Atribute"><b>Počet míst: </b>5</p>
                                </div>
                            </div>
                            
                            <div>
                                <img className="Car-Atribute-Image" src={Yellow} alt="" />
                            </div>
                        </div>
                        <div className="Car-Descriptions">
                            <p className="Car-Description">
                                Dále má vozidlo: ABS, Čelní a boční airbagy, Imobilizér, Litá kola, Posilovač řízení, 
                                Centrální zamykání, Elektricky vyhřívaná sedadla,Isofix (Ukotvení dětské sedačky), 
                                Náhon na přední nápravu a další...
                            </p>
                            <p className="Car-Description">
                                Nejedná se o žádné sportovní vozidlo, ale velmi praktické.
                                Díky karoserii Kombi a možnosti sklopení zadních sedadel získáváte ohromný prostor
                                pro naložení nemalého nákladu. Nemusíte se ale bát, vozidlo zvládne jet i svižným tempem.
                            </p>
                        </div>
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
                        <button onClick={openAtributesKugstr} className="Vehicle-Info-Button">Další parametry...</button>
                    </div>
                    <div className="Vehicle-Links">
                        <a href="#HomepageLeftSide"><button className="Vehicle-Button">Rezervovat</button></a>
                        <button onClick={openPriceKugstr} className="Vehicle-Price">Ceník</button>
                    </div>
                    </div>
                    
                    <div className="Vehicle-IMG-Kugstr">
                        <img width="500px" src={ Kugstr } alt="" />
                    </div>
                    
                </div>
                <div id="Open-Car-Atributes-Kugstr">
                    <div className="Car-Window">
                        <span id="Close-Car-Window" onClick={closeCarKugstr}>×</span>
                        <h1 className="Car-Title">Ford Kuga</h1>
                        <div className="Car-Atributes-Top">
                        
                            <div className="Car-Atributes">
                                <div className="Car-Left-Atributes">
                                    <p className="Car-Atribute"><b>Motor: </b>2.0 TDCi</p>
                                    <p className="Car-Atribute"><b>Obsah: </b>1997 CCM</p>
                                    <p className="Car-Atribute"><b>Převodovka: </b>Manuální</p>
                                    <p className="Car-Atribute"><b>Rok výroby: </b>2011</p>
                                    <p className="Car-Atribute"><b>Druh Karosérie: </b>SUV</p>
                                </div>
                                <div className="Car-Right-Atributes">
                                    <p className="Car-Atribute"><b>Výkon: </b>103 KW</p>
                                    <p className="Car-Atribute"><b>Palivo: </b>Nafta</p>
                                    <p className="Car-Atribute"><b>Počet převodových stupňů: </b>6</p>
                                    <p className="Car-Atribute"><b>Spotřeba: </b>8l / 100Km</p>
                                    <p className="Car-Atribute"><b>Počet míst: </b>5</p>
                                </div>
                            </div>
                            
                            <div>
                                <img className="Car-Atribute-Image-Kugstr" width="500px" src={Kugstr} alt="" />
                            </div>
                        </div>
                        <div className="Car-Descriptions">
                            <p className="Car-Description">
                                Dále má vozidlo: ABS, Multifunkční volant, Dvoufázovou klimatizaci, Tempomat, Palubní počítač, 
                                Dálkové centrální ovládání, pohon 4x4, Ližiny, Hliníková kola, 6x Airbag, Koženné sedačky, Tažné zařízení
                            </p>
                            <p className="Car-Description">
                                Karoserie SUV nabízí jízdu v komfortu, auto je mohutné a působí elegantně. 
                                Na to, že auto je těžší, jízní vlastnosti jsou velmi dobré a jízda dokáže být svižná.
                                Rezervací určitě nauděláte chybu.
                            </p>
                        </div>
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