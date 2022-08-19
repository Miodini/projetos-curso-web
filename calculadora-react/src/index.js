import React from 'react'
import ReactDom from 'react-dom/client'
import './style.scss'
import Calculator from './components/calculator/Calculator'

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<Calculator/>)