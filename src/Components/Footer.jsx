import React from 'react'
import imgLogo from '../../public/images/DH.png'

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img className='dh' src={imgLogo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
