import React, { Component } from 'react';

class App extends Component {
  render() {
    const names = ["Clara","Diana", "Gaby"];
    return (
      <div>
      <h1>hola mundo</h1>
      <ul>
        {names.map(name =>
          {
            return <li>{name}</li>;
          }
        )}
      </ul>
      </div> 
    );
  }
}

export default App;
