import React, { Component } from 'react';
import "./styles.css";

import TodoList from './todoList';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
//https://reactrouter.com/web/example/url-params


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      response: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/todo", {
      headers: {
        "Authorization": "Basic YWRtaW46YWRtaW4xMjM0"
      }
    })
    .then(res => res.json())
    .then(jsonResponse => {
      console.log(jsonResponse);

      this.setState({
        response: jsonResponse
      });
    });
  }

  render() {

    // const response = this.state.response;
    const { response } = this.state; //  Object destructuring
      
      return (
    <Router>
        <div className="App">

          <Link to="/" >Home</Link>
          <br></br>
          <Link to="/about" >About</Link>

          <Switch>
            <Route path="/" exact={true}>
            <h1>Todo app</h1>
            {
              response && response.map(topic => {
              return <TodoList tasks={topic.tasks} /> 
              })
            }
              </Route>
          
          <Route path="/about">
          <div>
            About Us
          </div>
              </Route>
          </Switch>
        </div>
      </Router>
  );
  }
}

