import "./Navigation.css"
import Image1 from "../assets/images/Logo.png";

const Navigation = () => {
    return (
        <div className="Nav">
            
            <div className="Nav-Left">
                
                <img className="Logo" src={Image1} width="50px" alt="" />
                <a href="" className="Nav-Link">Carentab</a>            
                
            </div>
            <div className="Nav-Right">
                <a href="" className="Nav-Link Nav-Link-Animated">Naše vozy</a>
                <a href="" className="Nav-Link Nav-Link-Animated">Vaše dotazy</a>
                <button className="Nav-Button">REZERVOVAT</button>
            </div>
        </div>
    )
        
    
} 

export default Navigation