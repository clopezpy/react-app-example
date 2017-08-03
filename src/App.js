import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    }
    //llamada http get
    axios.get("http://localhost:3001/names")
      .then( response =>{
        console.log(response);
        this.setState({
            names : response.data
          })
      }).catch( error => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
      <h1>hola mundo</h1>
      <ul>
        {this.state.names.map( name => 
          <li key={name}>{name}</li>
        )}
      </ul>
      </div>
    );
  }
}

export default App;
