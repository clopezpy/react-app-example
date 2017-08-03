import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks : ["Tarea 1","Tarea 2"]
    }
  }
  render() {
    return (
       <div>
        <h1>hola mundo</h1>
        <ul>
          {this.state.tasks.map(name =>
            {
              return <li>{name}</li>;
            }
          )}
        </ul>
         <button onClick={this.addTaks.bind(this)}>agregar elemento</button>
         <button onClick={this.updateTaks.bind(this)}>modificar tarea 2</button>
      </div> 
    );
  }
  addTaks(){
    this.setState({
      //con el concat no cambia el arreglo original, permite dar trazabilidad
      tasks : this.state.tasks.concat("Tarea 3") 
    });
  }
  updateTaks(){
    //const index = 2;
    const index = this.state.tasks.findIndex(
      task => task === "Tarea 2"
    );
    this.setState({
      //con el concat no cambia el arreglo original, permite dar trazabilidad
      tasks : this.state.tasks.map((task,i)=>
        i === index ? "Actualizar" : task
      )
    });
  }
}

export default App;
