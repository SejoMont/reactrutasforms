import React, { Component } from 'react'
import pelicula from "../assets/images/pelicula.png"

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Cine Component</h1>
        <img src={pelicula} style={{width:"250px"}}></img>
      </div>
    )
  }
}
