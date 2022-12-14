import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Name from './Name'
import Email from './Email'
import Gender from './Gender'
import Phone from './Phone'

const blankUser = {
    name: '',
    email: '',
    gender: '',
    phone: '',
}
const baseURL = 'http://localhost:3001/users'

export default function Registration(props){
    // The actual data inside each input
    let [user, setUser] = useState(props.user)
    // For bootstrap form verification
    let [formClass, setFormClass] = useState(null)

    useEffect(() => {
        setUser(props.user)
    }, [props.user])

    function clear(event){
        if(event)
            event.preventDefault()
        setUser({...blankUser})
        setFormClass(null)

    }

    async function save(event){
        if(event)
            event.preventDefault()
        setFormClass('was-validated')
        // If there are no empty fields, save them
        if(!Object.values(user).some(value => value === '')){
            const method = user.id ? 'put' : 'post'    // Puts if id is defined (editing user), post otherwise
            const url = user.id ? baseURL + '/' + user.id : baseURL
            try{
                const resp = await axios[method](url, user)
                // Success
                if(resp.status === 201 || resp.status === 204){
                    props.onSend(method, false, resp.data)
                    clear()
                }
                // Error
                else{
                    props.onSend(method, true, resp.data)
                }
            }
            catch(e){
                props.onSend(method, true)
            }
        }
    }

    function updateInput(event){
        const newUserData = {...user}
        newUserData[event.target.name] = event.target.value
        setUser(newUserData)
    }

    function handleKeyPress(event){
        if(event.key === 'Enter')
            save()
    }

    return(
        <div className='container-fluid mb-0'>
            <form className={formClass}
                noValidate
                onKeyUp = {handleKeyPress}
            >
                <div className='row'>
                    <div className='col-12 col-md-6 mb-2'>
                        <Name
                            value={user.name}
                            inputId = 'formName'
                            onChange = {updateInput}
                        />
                    </div>
                    <div className='col-12 col-md-6 mb-2'>
                        <Email
                            value = {user.email}
                            inputId = 'formEmail'
                            onChange={updateInput}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 mb-2'>
                        <Gender 
                            value={user.gender}
                            inputId = 'formGender'
                            onChange = {updateInput}
                        />
                    </div>
                    <div className='col-12 col-md-6 mb-2'>
                        <Phone 
                            value = {user.phone}
                            inputId = 'formPhone'
                            onChange={updateInput}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className="col">
                        <button className='btn btn-primary float-end' onClick={e => save(e)}>
                            Enviar
                        </button>
                        <button className='btn btn-secondary float-end mx-1' onClick={clear}>
                            Limpar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

