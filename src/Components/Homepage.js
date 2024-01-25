import './Homepage.css'

const Homepage = () =>{
    return(
        <div className="Homepage">
            <div className="Homepage-Left-Side">
                <p className="Reserve-Car-Title">Zarezervujte si vozidlo</p>

                <div className="Double-Input">
                    <input className="Classic-Input" type="text" id="" placeholder="Jméno *"/>
                    <input className="Classic-Input" type="text" id="" placeholder="Příjmení *"/>
                </div>
                <div className="Double-Input">
                    <input className="Classic-Input" type="date" id="" placeholder="Datum nar *"/>
                    <input className="Classic-Input" type="tel" id="" placeholder="Tel *"/>
                </div>
                <div className="Single-Input">
                    <input className="Long-Input" type="email" id="" placeholder="E-mail *"/>
                </div>
                <div className="Double-Input">
                    <input className="Classic-Input" type="date" id="" placeholder="Od *"/>
                    <input className="Classic-Input" type="date" id="" placeholder="Do *"/>
                </div>
                <div className="Checkbox-Input">
                    <input className="Classic-Checkbox" type="Checkbox" id="Group-B"/>
                    <label className="Classic-Label" for="Group-B">Mám řidičský průkaz skupiny B</label>
                </div>
                <div className="Checkbox-Input">
                    <input className="Classic-Checkbox" type="Checkbox" id="Gdpr" />
                    <label className="Classic-Label" for="Gdpr">Souhlasím se zpracováním osobních údajů</label>
                </div>
                <div className="Double-Buttons">
                    <button className="Conditions-Button"><img src="" alt="" />Smluvní podmínky</button>
                    <button className="Reserve-Button">Rezervovat</button>
                </div>
            </div>
            <div className="Homepage-Right-Side">
                
            </div>
        </div>
    )
}

export default Homepage