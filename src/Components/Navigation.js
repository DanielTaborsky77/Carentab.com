import "./Navigation.css"
import Image1 from "../assets/images/Logo.png";

const Navigation = () => {
    return (
        <div className="Nav">
            
            <div className="Nav-Left">
                
                <a href="" className="Nav_Link"><img src={Image1} alt="" /></a>
                <a href="" className="Nav_Link"><h1>Carentab</h1></a>            
                
            </div>
            <div className="Nav-Right">
                <a href="" className="Nav_Link"><h1>Naše vozy</h1></a>
                <a href="" className="Nav_Link"><h1>Vaše dotazy</h1></a>
                <a href="" ><button className="Nav_Button">Rezervovat</button></a>
            </div>
        </div>
    )
        
    
} 

export default Navigation