import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import Routes from '../routes';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React By Seolhun
          </h1>
        </header>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <Link
                className='btn btn-primary'
                to='/'
              >
                Home
              </Link>
            </div>
            <div className='col-sm-4'>
              <Link
                className='btn btn-info'
                to='/pagination'
              >
                Table Pagination
              </Link>
            </div>
            <div className='col-sm-4'>
              <Link
                className='btn btn-success'
                to='/scroll'
              >
                Table Scroll
              </Link>
            </div>
          </div>
          <div className='row'>
            <main>
              <Routes />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
