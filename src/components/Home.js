import React, { Component } from 'react'
import hogar from "../assets/images/hogar.png"

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Component</h1>
        <img src={hogar} style={{width:"250px"}}></img>
      </div>
    )
  }
}
