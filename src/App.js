// packages
import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

// redux
import { Provider } from 'react-redux';
import store from './store';

// import components
import PostsPage from './components/PostsPage';
import LoginForm from './components/LoginForm';
import Alert from './components/Alert';
import NavBar from './components/Navbar';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <NavBar />
        <Route path="/posts" component={PostsPage}/>
        <Route path="/login" component={LoginForm}/>
        <Alert />
      </div>
    </Provider>
  );
}

export default App;
