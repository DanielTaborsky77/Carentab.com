import Vehicle from "./Vehicle";
import "./Vehicles.css";

const Vehicles = () => {
    return(
        <div className="Vehicles-All">
            <p className="Vehicles-Title">Naše vozy</p>
            <Vehicle />
        </div>
    )
}  

export default Vehicles;