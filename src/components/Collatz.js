import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNumero = React.createRef();

    state = {
        numeros: []
    }

    mostrarCollatz = (e) => {
        e.preventDefault();

        var numero = parseInt(this.cajaNumero.current.value)
        var aux = [];

        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }
            aux.push(numero);
        }
        this.setState({
            numeros: aux
        }
        )

    }

    render() {
        return (
            <div>
                <h1>Collatz</h1>
                <form onSubmit={this.mostrarCollatz}>
                    <label>Introduzca un numero</label>
                    <input type="number" ref={this.cajaNumero}></input>
                    <button>Ejecutar</button>
                </form>
                <ul>
                    {
                        this.state.numeros.map((numero, index) => {
                            return (<li key={index}>{numero}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
