import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import Page from './pages/page';
import Projects from './pages/projects';
import Home from './pages/home';

// so proxy base api url works outside of development stage // sol to problem with live-server in production build
axios.defaults.baseURL = 'https://us-central1-personal-website-541f9.cloudfunctions.net/api'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path="/" component={Page}/>
              {/* <Route exact path='/Projects' component={Projects} />
              <Route exact path='/About' component={About} /> */}
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App;
