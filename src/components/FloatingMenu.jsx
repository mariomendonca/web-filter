import React, { useRef, useState } from 'react'
import '../styles/floatingMenu.css'
import { FaInstagram, FaWhatsapp, FaFacebookF, FaPhone } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function FloatingMenu() {

  const menu = useRef(null);
  const [menuWidth, setMenuWidth] = useState(true)
  
  function handlerMenu() {  
    if(menuWidth) {
      menu.current.style.width = '320px'
      menu.current.style.justifyContent = 'space-evenly'
      setMenuWidth(false)
      
    } else {
      menu.current.style.width = '60px'
      menu.current.style.justifyContent = 'unset'
      setMenuWidth(true)
    }
  }

  return (
    <div className="floating-menu" ref={menu}>
      <Link to="#" onClick={handlerMenu}>
        <FiInfo size="40px"/>
      </Link>
      <a className="icons-hidden">
        <FaPhone size="40px" />
      </a>
      <a className="icons-hidden">
        <FaInstagram size="40px" />
      </a>
      <a className="icons-hidden">
        <FaWhatsapp size="40px" />
      </a>
      <a className="icons-hidden">
        <FaFacebookF size="40px" />
      </a>
    </div>
  )
}