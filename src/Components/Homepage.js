import './Homepage.css'
import PdfImage from '../assets/images/Pdf.png'
import Instagram from '../assets/images/Instagram.png'
import Facebook from '../assets/images/Facebook.png'
import Time from '../assets/images/Time.png'
import Tachometer from '../assets/images/Tachometer.png'
import Gas from '../assets/images/Gas.png'
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
                    <select className="Classic-Input" name="" id="">
                        <option value="" selected disabled>Vyberte vozidlo *</option>
                    </select>
                    <input className="Classic-Input" type="text" id="" placeholder="Město vyzvednutí *"/>
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
                    <button className="Conditions-Button"><img src={PdfImage} alt="" />Smluvní podmínky</button>
                    <button className="Reserve-Button">Rezervovat</button>
                </div>
            </div>
            <div className="Homepage-Right-Side">
                <div className="Social-Media">
                    <a href="https://www.facebook.com/p/Carentabcom-100075992629918/" target="_blank"><img src={Facebook} alt="" /></a>
                    <a href="https://www.instagram.com/carentab.com_info/" target="_blank"><img src={Instagram} alt="" /></a>
                </div>

                <div className="Main-Content"> 
                <p className="Main-Title">Autopůjčovna Karlovarského kraje</p>

                    <div className="Advantages">
                        <div className="Atributes">
                            <img src={Time} alt="" />
                            <p>Půjčení do 15 minut</p>
                        </div>
                        <div className="Atributes">
                            <img src={Gas} alt="" />
                            <p>Plná nádrž</p>
                        </div>
                        <div className="Atributes">
                            <img src={Tachometer} alt="" />
                            <p>250 Km v ceně</p>
                        </div>
                    </div>

                    <p className="Paragraph">
                    Vše sepíšeme a vyřídíme v jednom z našich vozů,
                    Stačí si v levém formuláři vůz zarezervovat a my se vám 
                    do 12 hodin telefonicky ozveme.
                    </p>

                    <p className="Paragraph">
                    Pokud vůz potřebujete rychleji neváhejte volat
                    na telefonní číslo v dolní části.
                    </p>

                    
                </div>
                <div className="Contact">
                        <p className="Line-Between">info@carentab.com</p>
                        <p>+420 775 612 484</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage