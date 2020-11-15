import React from 'react'
import '../styles/floatingMenu.css'
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'

export default function FloatingMenu() {

  return (
    <div className="floating-menu">
      <span>
        <FiInfo size="30px"/>
      </span>
      <span className="icons-hidden">
        <FaInstagram size="30px" />
      </span>
      <span className="icons-hidden">
        <FaInstagram size="30px" />
      </span>
      <span className="icons-hidden">
        <FaInstagram size="30px" />
      </span>
      <span className="icons-hidden">
        <FaInstagram size="30px" />
      </span>
    </div>
  )
}