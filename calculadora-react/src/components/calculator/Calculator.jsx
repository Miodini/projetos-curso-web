import React, { Component } from 'react'
import Button from '../button/Button'

export default class Calculator extends Component{
    constructor(props){
        super(props)
        this.state = {
            result: '0',
            disableButton: false   // Define se o atributo 'disabled' deve ser atribuido aos botões
        }
        this.memory = null
        this.lastOperation = null
        this.lastButtonType = 'clear'
    }

    reset(){
        this.memory = null
        this.lastOperation = null
        this.lastButtonType = 'clear'
        this.setState({
            result: '0',
            disableButton: false
        })
    }
    click(type, value){
        console.log(this.state.result, this.lastButtonType, this.lastOperation)
        // Clear
        if(value === 'C' || this.state.disableButton){
            this.reset()
            return
        }
        // Digito
        if(type === 'digit'){
            if(this.lastButtonType === 'op'){    // Substituir resultados mostrados
                this.memory = this.state.result
                this.setState({result: value})
            }
            else if((this.state.result === '0' && value !== '.') || this.lastOperation === '='){   // Substituir zeros sozinhos ou o resultado final
                this.lastOperation = null
                this.setState({result: value})
            }
            else if(value !== '.' || (value === '.' && !this.state.result.includes('.')))  // Impede a ocorrência de 2 pontos no mesmo número
                this.setState({result: this.state.result + value})
        }
        // Operações ou igual
        else if(type === 'op' || type === 'equals'){     // Impede o clique de duas operações seguidas
            // Troca de operação
            if(type === 'op' && this.lastButtonType === 'op'){
                this.lastOperation = value
            }
            // Operação com memória vazia
            else if(this.memory === null && type !== 'equals'){    // Primeiro número do par (num1 operação num2)
                this.memory = this.state.result
                this.lastOperation = value
            }
            // Operação ou igual
            else{
                let numResult
                switch(this.lastOperation){
                    case '+':
                        numResult = parseFloat(this.memory) + parseFloat(this.state.result)
                        break            
                    
                    case '-':
                        numResult = parseFloat(this.memory) - parseFloat(this.state.result)
                        break            
                    
                    case 'X':
                        numResult = parseFloat(this.memory) * parseFloat(this.state.result)
                        break            
                        
                    case '/':
                        if(this.state.result === '0'){
                            this.setState({
                                result: 'Erro!',
                                disableButton: true
                            })
                            return
                        }
                        else{
                            numResult = parseFloat(this.memory) / parseFloat(this.state.result)
                        }
                        break
                    default:
                        numResult = 0
                }
                this.setState({result: Number(numResult.toFixed(12)).toString()})

                this.memory = null
                this.lastOperation = value
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
                <Button type='op' label='C' click={click} span='triple-span'/>
                <Button type='op' click={click} label='/' disabled={this.state.disableButton}/>
                <Button type='digit' click={click} label='7'/>
                <Button type='digit' click={click} label='8'/>
                <Button type='digit' click={click} label='9'/>
                <Button type='op' click={click} label='X' disabled={this.state.disableButton}/>
                <Button type='digit' click={click} label='4'/>
                <Button type='digit' click={click} label='5'/>
                <Button type='digit' click={click} label='6'/>
                <Button type='op' click={click} label='-' disabled={this.state.disableButton}/>
                <Button type='digit' click={click} label='1'/>
                <Button type='digit' click={click} label='2'/>
                <Button type='digit' click={click} label='3'/>
                <Button type='op' click={click} label='+' disabled={this.state.disableButton}/>
                <Button type='digit' click={click} label='0' span='double-span'/>
                <Button type='digit' click={click} label='.' disabled={this.state.disableButton}/>
                <Button type='equals' click={click} label='=' disabled={this.state.disableButton}/>
            </div>
        )
    }
}