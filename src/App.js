import React, { Component } from 'react';

class App extends Component {
  //definir un constructor apara manejar el estado
  constructor(){
    super();
    this.changeTitle=this.changeTitle.bind(this);
    this.state = {
      title: "Hola mundo desde estado"
    }
  }
  render() {
    return (
      <div>
      <h1>{this.state.title}</h1>
      <button onClick={this.changeTitle}>Cambie el Titulo</button>
      </div>
    );
  }
  changeTitle(){
    this.setState({
      title : "Nuevo Titulo" 
    });
  }
}

export default App;
