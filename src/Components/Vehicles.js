import Vehicle from "./Vehicle";
import "./Vehicles.css";
import Carousel, { consts } from 'react-elastic-carousel';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import React, { useEffect, useRef } from  "react";
import { motion, useInView, useAnimation } from  "framer-motion";

const Vehicles = () => {
  
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

  // Custom arrow component
  const customArrow = ({ type, onClick }) => {
    const Icon = type === 'PREV' ? BsChevronCompactLeft : BsChevronCompactRight;

    return (
      <button
        className={'custom-arrow'}
        onClick={onClick}
      >
        <Icon />
      </button>
    );
  };

  return (
    <div ref={ref} id="Vehicles">
      <motion.div 
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.25, delay: 0.25 }}
      
      
      className="Vehicles-All">
      
        <p className="Vehicles-Title">Naše vozy</p>
        <Carousel
          pagination={false}
          renderArrow={customArrow}
        >
          
            <Vehicle model="Yellow"/>
          
          <Vehicle model="Kugstr"/>
        </Carousel>
      </motion.div>
    </div>

  );
};

export default Vehicles;