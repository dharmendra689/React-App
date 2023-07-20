import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Dharmendra</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com"><FaFacebookF /></a>
        <a href="https://www.instagram.com"><FiInstagram /></a>
        <a href="https://www.linkedin.com"><AiOutlineLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dharmendra. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer;