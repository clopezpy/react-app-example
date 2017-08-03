import React, { Component } from 'react';

class App extends Component {
  constructor() {
      super();
      this.state = {
        name: "",
        terms: false
      }
  }
  render() {
    
    return (
      <div>
        <h1>hola mundo</h1>
        <input type="text" value={this.state.name} onChange={this.updateName.bind(this)}/>
        <div>
          <label>
            <input type="checkbox" checked={this.state.terms} onClick={this.updateTerms.bind(this)}/> Acepto los términos
          </label>
        </div>
        <button onClick={this.sayHi.bind(this)}>say hi</button>
      </div>
    );
  }
  sayHi(){
    if(this.state.terms){
      alert("Hola " + this.state.name);
    }else{
      alert("Debes aceptar los términos!!");
    }
    
  }
  updateName(event){
    this.setState({
      name : event.target.value
    })
  }
  updateTerms(event){
    this.setState({
      terms : event.target.checked
    })
  }
}

export default App;
