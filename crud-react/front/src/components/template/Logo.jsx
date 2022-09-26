import React from 'react'
import logo from '../../assets/img/logo.jpg'
import './Logo.css'

export default function Logo(){
    return(
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
    )
}