import React, { useState, useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import './Homepage.css'
import PdfImage from '../assets/images/Pdf.png'
import Instagram from '../assets/images/Instagram.png'
import Facebook from '../assets/images/Facebook.png'
import Time from '../assets/images/Time.png'
import Tachometer from '../assets/images/Tachometer.png'
import Gas from '../assets/images/Gas.png'
import axios from 'axios';


import Conditions from '../assets/Documents/Smlouva_o_najmu_dopravniho_prostredku.pdf'

import Logo from "../assets/images/Logo.png"

import { useFormik } from 'formik';
import { basicSchema } from "../schemas";


const Homepage = () =>{
    const [type, setType] = useState('text');

    /* Animation */
    const ref = useRef(null);
    const isInView = useInView(ref);
  
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
        console.log(isInView);
      }
      else{
        mainControls.start("hidden", {once: false});
       }
    },  [isInView]);
    /**/

    
    
    const sendMail = async (e) => {
        // e.preventDefault();
        try {
          await axios.post('https://carentab.com/api.php', { 
            firstName: values.firstName,
            lastName: values.lastName,
            birthday: values.birthday,
            phone: values.phone,
            email: values.email,
            car: values.car,
            town: values.town,
            from: values.from,
            to: values.to,
            groupB: values.groupB,
            gdpr: values.gdpr
          }); // Odeslat data na serverové API
          alert('E-mail byl úspěšně odeslán');
        } catch (error) {
          console.error('Chyba při odesílání e-mailu:', error);
          alert('Nepodařilo se odeslat e-mail');
        }
      };

    const onSubmit = (e) => {
        sendMail(e);
    }
      
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            birthday: "",
            phone: "",
            email: "",
            car: "",
            town: "",
            from: "",
            to: "",
            groupB: "",
            gdpr: ""
        },
        validationSchema: basicSchema,
        onSubmit,
        
    });
    
    return(
        <div className="Homepage" id="Homepage"> 
            <div className="Homepage-Left-Side" id="HomepageLeftSide">
                <p className="Reserve-Car-Title">Zarezervujte si vozidlo</p>
                <form autocomplete="off" className='Form-Reserve' onSubmit={handleSubmit}>

                    <div className="Double-Input">
                        <div className='Input-Field'>
                            <input value={values.firstName} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="text" id="firstName" placeholder="Jméno *"/>
                            {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                        </div>
                        <div className='Input-Field'>
                            <input value={values.lastName} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="text" id="lastName" placeholder="Příjmení *"/>
                            {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                    </div>
                    
                    <div className="Double-Input">
                        <div className='Input-Field'>
                            <input value={values.birthday} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="text" id="birthday" placeholder="Datum nar *" onFocus={(e) => { e.target.type = 'date'; }}/>
                            {errors.birthday && touched.birthday && <p className="error">{errors.birthday}</p>}
                        </div>
                        <div className='Input-Field'>
                            <input value={values.phone} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="tel" id="phone" placeholder="Tel *"/>
                            {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
                        </div>    
                    </div>

                    <div className="Single-Input">
                        <input value={values.email} onChange={handleChange} onBlur={handleBlur} className='Long-Input' type="email" id="email" placeholder="E-mail *"/>
                        {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="Double-Input">
                        <div className="Input-Field">
                            <select value={values.car} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" id="car">
                                <option value="" defaultValue disabled>Vyberte vozidlo *</option>
                                <option value={"VW Golf IV"}>VW Golf IV</option>
                                <option value={"Ford Kuga"}>Ford Kuga</option>
                            </select>
                            {errors.car && touched.car && <p className="error">{errors.car}</p>}
                        </div>
                        <div className="Input-Field">
                            <input value={values.town} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="text" id="town" placeholder="Město vyzvednutí *"/>
                            {errors.town && touched.town && <p className="error">{errors.town}</p>}
                        </div>
                    </div>
                    <div className="Double-Input">
                        <div className='Input-Field'>
                            <input value={values.from} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type={type} id="from" placeholder="Od *" onFocus={(e) => (setType("date"))}/>
                            {errors.from && touched.from && <p className="error">{errors.from}</p>}
                        </div>
                        <div className='Input-Field'>
                            <input value={values.to} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type={type} id="to" placeholder="Do *" onFocus={(e) => { e.target.type = 'date';}}/>
                            {errors.to && touched.to && <p className="error">{errors.to}</p>}
                        </div>
                        
                        
                    </div>
                    <div className="Checkbox-Input">
                        <input value={values.groupB} onChange={handleChange} onBlur={handleBlur} className="Classic-Checkbox" type="Checkbox" id="groupB"/>
                        <label className={(errors.groupB && touched.groupB ? "Label-Error" : "") || "Classic-Label"} for="groupB">Mám platný řidičský průkaz skupiny B *</label>
                    </div>
                    <div className="Checkbox-Input">
                        <input value={values.gdpr} onChange={handleChange} onBlur={handleBlur} className="Classic-Checkbox" type="Checkbox" id="gdpr"/>
                        <label className={(errors.gdpr && touched.gdpr ? "Label-Error" : "") || "Classic-Label"} for="gdpr">Souhlasím se zpracováním osobních údajů *</label>
                    </div>
                    <div className="Double-Buttons">
                        <a href={Conditions} className="Conditions-Button" download><img src={PdfImage} alt="" />Smluvní podmínky</a>
                        <button className="Reserve-Button" type='submit'>Rezervovat</button>
                    </div>
                </form>
            </div>
            <div className="Homepage-Right-Side">
                
                <div className="Social-Media">

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -75 },
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
                <div className='Responsive-Logo'>
                    <img width="75px" src={Logo} alt="" />
                    <p>Carentab</p>
                </div>
                <motion.div
                    className='Homepage-Right-Content'
                    variants={{
                        hidden: { opacity: 0, y: -75 },
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

                    <div className='Socials-Responzive'>
                        <a href="https://www.instagram.com/carentab.com_info/"><img src={Instagram} /></a>
                        <a href="https://www.facebook.com/p/Carentabcom-100075992629918/"><img src={Facebook} /></a>

                    </div>
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