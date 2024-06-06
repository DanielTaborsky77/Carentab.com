import React, { useEffect, useState } from 'react';
import "./Cookies.css"

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasGivenConsent = document.cookie.includes("cookieConsent=accepted") || localStorage.getItem("cookieConsent") === "accepted";
    if (!hasGivenConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-076J5FSGT0');
    gtag('consent', 'update', {
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
    });
    document.cookie = "cookieConsent=accepted; expires=Wed, 01 Jan 2030 00:00:00 UTC; path=/";
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
    
  };

  const handleReject = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
      });
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
    return(
        <div id="Cookies" className="Cookies">
            
    <div className="Cookies-Modal">
        <h1 className="Cookies-Title">Souhlasím s použitím Cookies</h1>
        <p className="Cookies-Description">Webová stránka používá Cookies pro zlepšení zákaznického rozhraní.</p>
        <div className="Cookies-Buttons">
            <button id="consent-button" className="Cookies-Accept" onClick={handleConsent}>Souhlasím</button>
            <button id="reject-button" className="Cookies-Decline" onClick={handleReject}>Nesouhlasím</button>
        </div>
    </div>
  </div>
    )
}

export default Cookies; 