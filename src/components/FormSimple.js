import React, { Component } from 'react'

export default class Ejempo extends Component {
    // necesitamos crear variables de referencia
    // para poder capturar la informacion de los formularios
    cajaNombre = React.createRef();
    cajaEdad = React.createRef();
    state = {
        user: null
    }

    // necesitamos un metodo para recibir los datos del formulario
    // al realizar submit. dicho metodo tendra que recibir event(e)
    peticionForm = (e) => {
        // la primera instruccion siempre seara detener la propagacion del evento
        e.preventDefault();
        console.log("Datos recibidos")

        // en las referencias de objeto(React.createRef) para capturar el calor se utiliza objeto.current.value
        this.setState({
            user: {
                nombre: this.cajaNombre.current.value,
                edad: this.cajaEdad.current.value
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Form Simple</h1>
                {
                    this.state.user && (
                        <div>
                            <h2 style={{color:"blue"}}>
                                Usuario: {this.state.user.nombre},
                                Edad: {this.state.user.edad}
                            </h2>
                        </div>
                    )
                }
                <form onSubmit={this.peticionForm}>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajaNombre}></input>
                    <label>Edad: </label>
                    <input type="number" ref={this.cajaEdad}></input>
                    <button>Enviar Datos</button>
                </form>
            </div>
        )
    }
}
