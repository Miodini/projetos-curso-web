import React, { Component } from 'react'
import Button from '../button/Button'

export default class Calculator extends Component{
    render(){
        return (
            <div className="container p-1 calculator">
                <div className="row">
                    <div className="col text-end">0</div>
                </div>
                <div className="row">
                    <Button type='op' label='C' colClass='col-6'/>
                    <Button type='op' label='^2'/>
                    <Button type='op' label='/'/>
                </div>
                <div className="row">
                    <Button type='digit' label='7'/>
                    <Button type='digit' label='8'/>
                    <Button type='digit' label='9'/>
                    <Button type='op' label='X'/>
                </div>
                <div className="row">
                    <Button type='digit' label='4'/>
                    <Button type='digit' label='5'/>
                    <Button type='digit' label='6'/>
                    <Button type='op' label='-'/>
                </div>
                <div className="row">
                    <Button type='digit' label='1'/>
                    <Button type='digit' label='2'/>
                    <Button type='digit' label='3'/>
                    <Button type='op' label='+'/>
                </div>
                <div className="row">
                    <Button type='digit' label='0' colClass='col-6'/>
                    <Button type='digit' label='.'/>
                    <Button type='equal' label='='/>
                </div>
            </div>
        )
    }
}