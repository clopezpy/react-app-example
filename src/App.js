import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Template = (props) => {
  return(
    <div>
      <h2>Mi App</h2>
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="about"> About </Link></li>
      </ul>
      {props.children}
    </div>
  )
};
const NoMatch = () => <h2>404 not found</h2>;
const Messages = (props) => {
  return(
    <div>
      <h2>Mensaje {props.params.id}</h2>            
    </div>
  )
};
class App extends Component {
  render() {
    return (
      //actualizar las url de la aplicación a medida que se va navegando por las diferentes pantallas
      <Router history={browserHistory}>
        <Route path="/" component={Template} >
        <IndexRoute component={Home}/>
        <Route path="about" component={About} />        
        </Route>
        <Route path="messages/:id" component={Messages}/>
        <Route path="*" component={NoMatch}/>
      </Router>
    );
  }
}

export default App;
