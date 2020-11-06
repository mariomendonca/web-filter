import React from 'react'
import '../styles/header.css'
import {FiMenu} from 'react-icons/fi'

export default function Header() {
  return (
    <div className='header'>
      <input type='checkbox' id='check'/>
      <label for='check' className='checkbtn'>
        <FiMenu size={30} color='#ffffff'/>
      </label>
      <label className='logo'>Odimar imóveis</label>
      <ul>
        <li><a href='/'>Contato</a></li>
        <li><a href='/'>Sobre mim</a></li>
      </ul>
    </div>
  )
}