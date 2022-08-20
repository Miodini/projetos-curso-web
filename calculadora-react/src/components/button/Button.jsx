import React from 'react'

export default function Button(props){
    let className = props.type ? props.type + ' ' : ''
    className += props.span || ''
    return (
        <button 
            className={className}
            onClick={() => props.click(props.type, props.label)}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    )
}