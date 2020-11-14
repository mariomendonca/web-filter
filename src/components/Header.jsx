import React from 'react'
import '../styles/header.css'
// import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa'

export default function Header() {

  return (
    <header className='header'>
      <div className="logo">
        <a href="">Logo</a>
      </div>

      <div className="btn">
        
        <a href='/'>
          <FaInstagram size="2rem" />
        </a>
        
        <a href='/'>
          <FaWhatsapp size="2rem" />
        </a>
        
        <a href='/'>
          <FaFacebookF size="2rem" />
        </a>
      </div>

    </header>
  )
}