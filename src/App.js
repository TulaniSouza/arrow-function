import React, { Component } from 'react'

export default class flecha extends Component{
  chuchu = () => {
    return(
      <h1> Chuchu é aguado demais!</h1>
    )
  }

soma=() => 28 + 3
  render(){
    return(
      <p>{this.chuchu()}</p>
      <p>{this.soma()}</p>
    )
  }
}