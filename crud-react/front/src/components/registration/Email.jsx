import React from 'react'

/** Renders label and input for email entry
 * @props value - The value to be displayed
 * @props inputId - Standard HTML id
 * @props onChange - onChange handler function
*/
export default function Email(props){
    return(
        <>
            <label htmlFor={props.inputId} className='form-label'>E-mail</label>
            <input 
                value = {props.value}
                id = {props.inputId}
                onChange = {props.onChange}
                type = 'email' 
                name = 'email'
                className = 'form-control'
                required
            />
            <div className='invalid-feedback'>Preencha este campo.</div>
        </>
    )
}