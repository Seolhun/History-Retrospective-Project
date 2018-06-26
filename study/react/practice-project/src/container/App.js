import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import routes from '../routes/schema';
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
						{
							routes.map((route) => {
								return (
									<div
										key={route.path}
										className='ml-2'
									>
										<Link
											className={`btn btn-${route.color} router`}
											to={route.path}
										>
											{route.label}
										</Link>
									</div>
								);
							})
						}
					</div>
				</div>
				<div className='container'>
					<main className='m-5'>
						<Routes />
					</main>
				</div>
			</div>
    );
  }
}

export default App;
