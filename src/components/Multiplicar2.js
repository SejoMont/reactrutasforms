import React, { Component } from 'react';



export default class MultiplicationTable extends Component {

    selectNumero = React.createRef();

    state = {
        numeros: [],
    };

    peticionForm = (e) => {

        e.preventDefault();
        console.log("Datos recibidos");
        var numero = parseInt(this.selectNumero.current.value);
        var tablaMultiplicar = [];



        for (let i = 1; i <= 10; i++) {
            tablaMultiplicar.push({
                multiplicando: numero,
                multiplicador: i,
                resultado: numero * i,
            });
        }

        this.setState({
            numeros: tablaMultiplicar,
        });
    };


    // Función para generar un array de números aleatorios del 1 al 10

    generarNumerosAleatorios = () => {

        let numerosAleatorios = [];

        while (numerosAleatorios.length < 10) {
            const numero = Math.floor(Math.random() * 10) + 1;
            if (!numerosAleatorios.includes(numero)) {
                numerosAleatorios.push(numero);
            }
        }
        return numerosAleatorios;
    };

    render() {
        const numerosAleatorios = this.generarNumerosAleatorios();

        return (
            <div>
                <h1>Tabla de Multiplicar</h1>
                <form onSubmit={this.peticionForm}>
                    <label>Seleccione un número: </label>
                    <select ref={this.selectNumero}>
                        {numerosAleatorios.map((numero, index) => (
                            <option key={index} value={numero}>
                                {numero}
                            </option>
                        ))}
                    </select>
                    <button>Calcular tabla de multiplicar</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Multiplicación</th>
                            <th>Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.numeros.map((numero, index) => (
                            <tr key={index}>
                                <td>
                                    {numero.multiplicando} * {numero.multiplicador}
                                </td>
                                <td>{numero.resultado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}