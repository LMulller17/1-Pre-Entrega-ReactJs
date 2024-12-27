import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (

    <header>
  
  <h1> Drinkedin_ </h1>

        <nav>
            <ul>
                <li>Inicio</li>
                <li>Bebidas</li>
                <li>Informacion</li>
                <li>Locales</li>
            </ul>
        </nav>
        <CartWidget/>

    </header>
    

  )
}

export default NavBar