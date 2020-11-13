import '../styles/header2.css'
import {FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Header2() {

  function callMenu() {
    var menu = document.querySelector('.btn')
    var background = document.querySelector('.background')

    var transform = window.getComputedStyle(menu).transform;

    if(transform == 'matrix(1, 0, 0, 1, 0, 0)') {

      menu.style.transform = 'scaleX(0)'
      background.style.opacity = '1'
      document.querySelector('html').style.overflow = 'hidden'
      
    } else {
      menu.style.transform = 'scaleX(1)'
      document.querySelector('html').style.overflow = 'scroll'  
      background.style.opacity = '0'
    }
  }

  return (
    <header className='header'>
      <div className="logo">
        <a href="">Odimar imóveis</a>
      </div>

      <div className="btn">
        <Link to='/'>Contato</Link>
        <a href='/'>Sobre mim</a>
      </div>

      <div className="btn-responsivo">
        <button onClick={callMenu}>
          <FiMenu size={30} color='#ffffff'/>
        </button>
      </div>

      <div className="background"></div>

    </header>
  )
}