import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/AppNavBar';
import AppNavbar from './components/AppNavBar';
import ToDoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <ToDoList/>
      </div>
      </Provider>
    );
  }
}

export default App;
