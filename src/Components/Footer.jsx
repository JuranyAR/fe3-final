import React from 'react'
import logo from '/images/DH.png';
import facebook from '/images/facebook.png';
import instagram from '/images/instagram.png';
import tiktok from '/images/tiktok.png';
import whatsapp from '/images/whatsapp.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt='DH-logo' />
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank">
            <img src={facebook} alt='facebook' />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src={instagram} alt='instagram' />
          </a>
          <a href="https://tiktok.com" target="_blank">
            <img src={tiktok} alt='tiktok' />
          </a>
          <a href="https://whatsapp.com" target="_blank">
            <img src={whatsapp} alt='whatsapp' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
