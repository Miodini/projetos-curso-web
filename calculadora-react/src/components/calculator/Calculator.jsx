import React, { Component } from 'react'
import Button from '../button/Button'

export default class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {result: '0'}
        this.memory = null
        this.lastOperation = null
        this.lastButtonType = 'clear'
    }

    click(type, value){
        // Clear
        if(value === 'C'){
            this.memory = null
            this.lastOperation = null
            this.lastButtonType = 'clear'
            this.setState({result: '0'})
        }
        // Digito
        else if(type === 'digit'){
            if(this.lastButtonType === 'op'){    // Substituir resultados mostrados
                this.memory = this.state.result
                this.setState({result: value})
            }
            else if((this.state.result === '0' && value !== '.'))   // Substituir zeros sozinhos
                this.setState({result: value})
            else if(value !== '.' || !this.state.result.includes('.'))  // Impede a ocorrência de 2 pontos no mesmo número
                this.setState({result: this.state.result + value})
        }
        // Operações ou igual
        else if((type === 'op' && this.lastButtonType !== 'op') || type === 'equals'){     // Impede o clique de duas operações seguidas
            // Operação
            console.log(this.memory)
            if(this.memory === null && type !== 'equals'){    // Primeira operação
                this.memory = this.state.result
                this.lastOperation = value
            }
            // Operação ou igual
            else{
                console.log(this.lastOperation)
                let numResult
                switch(this.lastOperation){
                    case '+':
                        numResult = parseFloat(this.memory) + parseFloat(this.state.result)
                        this.setState({result: numResult.toString()})
                        break            
                    
                    case '-':
                        numResult = parseFloat(this.memory) - parseFloat(this.state.result)
                        this.setState({result: numResult.toString()})
                        break            
                    
                    case 'X':
                        numResult = parseFloat(this.memory) * parseFloat(this.state.result)
                        this.setState({result: numResult.toString()})
                        break            
                    case '/':
                        if(this.state.result === '0')
                            this.setState({result: 'Erro!'})
                        else{
                            numResult = parseFloat(this.memory) / parseFloat(this.state.result)
                            this.setState({result: numResult.toString()})
                        }
                        break            
                    default:
                }
                this.memory = null
                this.lastOperation = null
            }
        }
        this.lastButtonType = type
    }

    render(){
        const click = this.click.bind(this)
        return (
            <div className='container p-1 calculator'>
                <h1 className='text-center'>Calculadora</h1>
                <div className="visor text-end pt-5">{this.state.result}</div>
                <Button type='op' label='C' click={click} span='double-span'/>
                <Button type='op' click={click} label='x²'/>
                <Button type='op' click={click} label='/'/>
                <Button type='digit' click={click} label='7'/>
                <Button type='digit' click={click} label='8'/>
                <Button type='digit' click={click} label='9'/>
                <Button type='op' click={click} label='X'/>
                <Button type='digit' click={click} label='4'/>
                <Button type='digit' click={click} label='5'/>
                <Button type='digit' click={click} label='6'/>
                <Button type='op' click={click} label='-'/>
                <Button type='digit' click={click} label='1'/>
                <Button type='digit' click={click} label='2'/>
                <Button type='digit' click={click} label='3'/>
                <Button type='op' click={click} label='+'/>
                <Button type='digit' click={click} label='0' span='double-span'/>
                <Button type='digit' click={click} label='.'/>
                <Button type='equals' click={click} label='='/>
            </div>
        )
    }
}