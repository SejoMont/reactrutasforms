import React, { Component } from 'react'
import musica from "../assets/images/musica.png"

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Musica Component</h1>
        <img src={musica} style={{width:"250px"}}></img>
      </div>
    )
  }
}
