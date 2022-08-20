import React, { Component } from 'react'
import Button from '../button/Button'

export default class Calculator extends Component{
    render(){
        return (
            <div className='container p-1 calculator'>
                <h1 className='text-center'>Calculadora</h1>
                <div className="visor text-end pt-5">0</div>
                <Button type='op' label='C' span='double-span'/>
                <Button type='op' label='x²'/>
                <Button type='op' label='/'/>
                <Button type='digit' label='7'/>
                <Button type='digit' label='8'/>
                <Button type='digit' label='9'/>
                <Button type='op' label='X'/>
                <Button type='digit' label='4'/>
                <Button type='digit' label='5'/>
                <Button type='digit' label='6'/>
                <Button type='op' label='-'/>
                <Button type='digit' label='1'/>
                <Button type='digit' label='2'/>
                <Button type='digit' label='3'/>
                <Button type='op' label='+'/>
                <Button type='digit' label='0' span='double-span'/>
                <Button type='digit' label='.'/>
                <Button type='equal' label='='/>
            </div>
        )
    }
}