import React, { useState, useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';

import './Homepage.css'
import PdfImage from '../assets/images/Pdf.png'
import Instagram from '../assets/images/Instagram.png'
import Facebook from '../assets/images/Facebook.png'
import Time from '../assets/images/Time.png'
import Tachometer from '../assets/images/Tachometer.png'
import Gas from '../assets/images/Gas.png'

const Homepage = () =>{
    const [type, setType] = useState('text');

    /* Animation */
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    },  [isInView]);
    /**/

    return(
        <div className="Homepage">
            <div className="Homepage-Left-Side">
                <p className="Reserve-Car-Title">Zarezervujte si vozidlo</p>

                <div className="Double-Input">
                    <input className="Classic-Input" type="text" id="" placeholder="Jméno *"/>
                    <input className="Classic-Input" type="text" id="" placeholder="Příjmení *"/>
                </div>
                <div className="Double-Input">
                    <input className="Classic-Input" type="text" placeholder="Datum nar *" onFocus={(e) => { e.target.type = 'date'; }}/>    
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
                    <input className="Classic-Input" type={type} id="" placeholder="Od *" onFocus={(e) => (setType("datetime-local"))}/>
                    <input className="Classic-Input" type={type} id="" placeholder="Do *" onFocus={(e) => { e.target.type = 'datetime-local';}}/>
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
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration: 1, 
                        delay: 0.25
                    }}
                >
                    <a href="https://www.facebook.com/p/Carentabcom-100075992629918/" target="_blank"><img src={Facebook} alt="" /></a>
                    <a href="https://www.instagram.com/carentab.com_info/" target="_blank"><img src={Instagram} alt="" /></a>
                </motion.div>
                </div>
                
                <div ref={ref} className="Main-Content"> 
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration: 1, 
                        delay: 0.25
                    }}
                >
                <p className="Main-Title">Autopůjčovna Karlovarského kraje</p>

                    <div className="Advantages">
                        <div className="Atributes">
                            <img className='Time' src={Time} alt="" />
                            <p>Půjčení do 15 minut</p>
                        </div>
                        <div className="Atributes">
                            <img className='Gas' src={Gas} alt="" />
                            <p>Plná nádrž</p>
                        </div>
                        <div className="Atributes">
                            <img className='Tachometer' src={Tachometer} alt="" />
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

                </motion.div>   
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