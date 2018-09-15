import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/AppNavBar';
import AppNavbar from './components/AppNavBar';
import ToDoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppNavbar></AppNavbar>
          <ToDoList></ToDoList>
        </header>
      </div>
    );
  }
}

export default App;
