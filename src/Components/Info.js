import "./Info.css"
import Keys from "../assets/images/Keys.jpg";

import React, { useEffect, useRef } from  "react";
import { motion, useInView, useAnimation } from  "framer-motion";

const Info = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();
    useEffect(() => {
       if (isInView) {
        mainControls.start("visible", {once: false});
       }
       else{
        mainControls.start("hidden", {once: false});
       }
    }, [isInView])

    return(
        <div className="Info" id="Info">
            <p className="Info-Title">Jak to funguje?</p>
            <div ref={ref} className="Info-Content">
                
            <motion.div 
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 1 }}
                className="Info-Steps">
                    <p>1) Zarezervujete si vozidlo pomocí e-mailového formuláře nebo telefonní domluvou.</p>
                    <p>2) Vyzvednete si nebo Vám bude přistaveno (přistavení mimo cheb za 500 Kč) požadované vozidlo na místo předem domluvené.</p>
                    <p>3) Ve vozidle Vám vše vysvětlíme a sepíšeme smlouvu pro zapůjčení.</p>
                    <p>4) Zaplatíte požadovanou vratnou kauci a můžete směle vyrazit.</p>

                    <a href="#HomepageLeftSide"><button className="Info-Reserve">Rezervovat</button></a>
                </motion.div>

                <img className="Info-Ilustration" src={Keys} alt="keys" />
            </div>
            
        </div>
    )
        
}
export default Info;