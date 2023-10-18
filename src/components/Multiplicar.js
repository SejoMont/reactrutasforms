import React, { Component } from 'react'

export default class Multiplicar extends Component {
    cajaNumero = React.createRef();

    state = {
        numeros: []
    }

    mostrarCollatz = (e) => {
        e.preventDefault();

        var numero = parseInt(this.cajaNumero.current.value)
        var aux = [];
        var mult = 0;

        for (let i = 1; i <= 10; i++) {
            mult = numero * i
            aux.push(mult);
        }

        this.setState({
            numeros: aux,
            numero: numero
        }
        )

    }

    render() {
        return (
            <div>
                <h1>Multiplicar</h1>
                <form onSubmit={this.mostrarCollatz}>
                    <label>Introduzca un numero</label>
                    <input type="number" ref={this.cajaNumero}></input>
                    <button>Ejecutar</button>
                </form>
                <table>
                    <thead>
                        <th>Multiplicacion</th>
                        <th>Resultado</th>
                    </thead>
                    <tbody>
                        {
                            this.state.numeros.map((mult, index) => {
                                return (
                                    <div>
                                        <td key={index}>{this.state.numero} * {index+1} = </td>
                                        <td>{mult}</td>
                                    </div>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
