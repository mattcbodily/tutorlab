import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import store from './ducks/store';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <HashRouter>
          <div className="App">
            <Nav />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
