import React, { useState, useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import './Homepage.css'
import Check from '../assets/images/Check.png'
import Cross from '../assets/images/Cross.png';
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
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
    const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

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
          resetForm();
          setIsSuccessModalVisible(true);
        } catch (error) {
          console.error('Chyba při odesílání e-mailu:', error);
          setIsErrorModalVisible(true);
        }
      };
      const formRef = useRef(null);
    useEffect(() => {
        
        if (isSuccessModalVisible) {
          const timer = setTimeout(() => {
            setIsSuccessModalVisible(false);
          }, 5000);
          
          // Vyčištění časovače při odmountování komponenty nebo při skrytí modalu
          return () => clearTimeout(timer);
        }
    }, [isSuccessModalVisible]);

    useEffect(() => {
        if (isErrorModalVisible) {
          const timer = setTimeout(() => {
            setIsErrorModalVisible(false);
          }, 5000);
          
          // Vyčištění časovače při odmountování komponenty nebo při skrytí modalu
          return () => clearTimeout(timer);
        }
    }, [isErrorModalVisible]);

    const onSubmit = (e) => {
        sendMail(e);
    }
      
    const {values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm} = useFormik({
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
            groupB: false,
            gdpr: false,
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    return(
        <div>
            {isSuccessModalVisible && (
            <div className="Modal-Reservation" style={{ display: isSuccessModalVisible ? 'fixed' : 'none' }}>
                <div className="Modal-Reservation-Box">
                    <p className="Modal-Reservation-Tittle">Rezervace proběhla úspěšně</p>
                    <img className='Modal-Check' src={Check} alt="Check"/>
                </div>
            </div>
            )}

            {isErrorModalVisible && (
            <div className="Modal-Reservation" style={{ display: isErrorModalVisible ? 'fixed' : 'none' }}>
                <div className="Modal-Reservation-Box">
                    <p className="Modal-Reservation-Tittle">Rezervace se nepovedla</p>
                    <img className='Modal-Check' src={Cross} alt="Cross"/>
                </div>
            </div>
            )}
        <div className="Homepage" id="Homepage"> 
            
            <div className="Homepage-Left-Side" id="HomepageLeftSide">
                <p className="Reserve-Car-Title">Zarezervujte si vozidlo</p>
                <form className='Form-Reserve' ref={formRef} onSubmit={handleSubmit}>

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
                            <input value={values.birthday} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="text" id="birthday" placeholder="Datum nar. *" onFocus={(e) => {e.target.type = 'date';}}/> 
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
                            <input value={values.from} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type={type} id="from" placeholder="Od *" onFocus={(e) => {e.target.type = 'date';}}/>
                            {errors.from && touched.from && <p className="error">{errors.from}</p>}
                        </div>
                        <div className='Input-Field'>
                            <input value={values.to} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type={type} id="to" placeholder="Do *" onFocus={(e) => { e.target.type = 'date';}} />
                            {errors.to && touched.to && <p className="error">{errors.to}</p>}
                        </div>
                    </div>
                    <div className="Checkbox-Input">
                        <input checked={values.groupB} onChange={handleChange} onBlur={handleBlur} className="Classic-Checkbox" type="Checkbox" id="groupB"/>
                        <label className={(errors.groupB && touched.groupB ? "Label-Error" : "") || "Classic-Label"} for="groupB">Mám platný řidičský průkaz skupiny B *</label>
                    </div>
                    <div className="Checkbox-Input">
                        <input checked={values.gdpr} onChange={handleChange} onBlur={handleBlur} className="Classic-Checkbox" type="Checkbox" id="gdpr"/>
                        <label className={(errors.gdpr && touched.gdpr ? "Label-Error" : "") || "Classic-Label"} for="gdpr">Souhlasím se zpracováním osobních údajů *</label>
                    </div>
                    <div className="Double-Buttons">
                        <a href={Conditions} className="Conditions-Button" download><img src={PdfImage} alt="" />Smluvní podmínky</a>
                        <button className="Reserve-Button" type='submit'>Rezervovat</button>
                    </div>
                </form>

                <form autocomplete="off" className='Form-Reserve-Mobile' ref={formRef} onSubmit={handleSubmit}>

                    <div className="Double-Input">
                        <div className='Input-Field'>
                            <label>Jméno *</label>
                            <input value={values.firstName} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="text" id="firstName"/>
                            {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                        </div>
                        <div className='Input-Field'>
                        <label>Příjmení *</label>
                            <input value={values.lastName} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="text" id="lastName"/>
                            {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                    </div>
                    
                    <div className="Double-Input">
                        <div className='Input-Field'>
                            <label>Datum narození *</label>
                            <input value={values.birthday} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="date" id="birthday"/> 
                            {errors.birthday && touched.birthday && <p className="error">{errors.birthday}</p>}
                        </div>
                        <div className='Input-Field'>
                        <label>Tel *</label>
                            <input value={values.phone} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="tel" id="phone"/>
                            {errors.phone && touched.phone && <p className="error">{errors.phone}</p>}
                        </div>    
                    </div>

                    <div className="Single-Input">
                        <label>E-mail *</label>
                        <input value={values.email} onChange={handleChange} onBlur={handleBlur} className='Long-Input' type="email" id="email"/>
                        {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="Double-Input">
                        <div className="Input-Field">
                        <label>Vozidlo *</label>
                            <select value={values.car} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" id="car">
                                <option value="" defaultValue disabled>Vyberte vozidlo *</option>
                                <option value={"VW Golf IV"}>VW Golf IV</option>
                                <option value={"Ford Kuga"}>Ford Kuga</option>
                            </select>
                            {errors.car && touched.car && <p className="error">{errors.car}</p>}
                        </div>
                        <div className="Input-Field">
                            <label>Město vyzvednutí *</label>
                            <input value={values.town} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type="text" id="town"/>
                            {errors.town && touched.town && <p className="error">{errors.town}</p>}
                        </div>
                    </div>
                    <div className="Double-Input">
                        <div className='Input-Field'>
                            <label>Rezervuji Od *</label>
                            <input value={values.from} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type='date' id="from"/>
                            {errors.from && touched.from && <p className="error">{errors.from}</p>}
                        </div>
                        <div className='Input-Field'>
                            <label>Rezervuji Do *</label>
                            <input value={values.to} onChange={handleChange} onBlur={handleBlur} className="Classic-Input" type='date' id="to"/>
                            {errors.to && touched.to && <p className="error">{errors.to}</p>}
                        </div>
                    </div>
                    <div className="Checkbox-Input">
                        <input checked={values.groupB} onChange={handleChange} onBlur={handleBlur} className="Classic-Checkbox" type="Checkbox" id="groupB"/>
                        <label className={(errors.groupB && touched.groupB ? "Label-Error" : "") || "Classic-Label"} for="groupB">Mám platný řidičský průkaz skupiny B *</label>
                    </div>
                    <div className="Checkbox-Input">
                        <input checked={values.gdpr} onChange={handleChange} onBlur={handleBlur} className="Classic-Checkbox" type="Checkbox" id="gdpr"/>
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
        </div>
    )
}

export default Homepage