import "./Vehicle.css"

const Vehicle = () => {
    return(
    <div>
        <div className="Vehicle-Card">
            <p className="Vehicle-Name">{"Volkswagen golf IV"}</p>
            <div className="Vehicle-Atributes">
                <p className="Vehicle-Atribute">Motor: {"1.9 TDI"}</p>
                <p className="Vehicle-Atribute">Výkon: {"74 KW"}</p>
                <p className="Vehicle-Atribute">Rok výroby: {"2002"}</p>
                <p className="Vehicle-Atribute">Druh karosérie: {"Kombi"}</p>
            </div>
            <div className="Vehicle-Links">
                <button className="Vehicle-Button">Rezervovat</button>
                <a href="" className="Vehicle-Price">Ceník</a>
            </div>


            <div className="Vehicle-IMG">
                <img src="" alt="" />
            </div>
            
        </div>
    </div>
    )
}

export default Vehicle