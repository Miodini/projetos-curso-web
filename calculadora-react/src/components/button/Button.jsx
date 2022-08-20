import React from 'react'

export default function Button(props){
    const typeClass = props.type || ''
    const spanClass = props.span || ''
    return (
        <button className={`${spanClass} ${typeClass}`}>{props.label}</button>
    )
}