import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>Sobre</Link>
        <Link to='/projects'>Trabalhos</Link>
        <Link to='#contact'>Contato</Link>
    </nav>
  )
}

export default Navbar