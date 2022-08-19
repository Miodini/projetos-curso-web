import React from 'react'

export default function Button(props){
    const colClass = props.colClass || 'col'     // Segue o arranjo padrão das colunas caso não seja especificada a propriedade
    const typeClass = props.type || ''
    return (
        <button className={`${colClass} ${typeClass}`}>{props.label}</button>
    )
}