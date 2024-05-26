
import "./Navigation.css"
import Logo from "../assets/images/Logo.png";
import Hamburger from "./Hamburger";

const Navigation = () => {
    return (
        <div>
            
            <div className="Nav">
                <div className="Nav-Left">
                    <a href="#Homepage" className="Nav-Link"><img className="Logo" src={Logo} width="50px"  alt="" />Carentab</a>                           
                </div>
                <div className="Nav-Right">
                    <a href="#Vehicles" className="Nav-Link Nav-Link-Animated">Naše vozy</a>
                    <a href="#Info" className="Nav-Link Nav-Link-Animated">Jak to funguje?</a>
                    <a href="#Homepage"><button className="Nav-Button">REZERVOVAT</button></a>
                </div>
            </div>

            <Hamburger />
        </div>



    )
        
    
} 

export default Navigation