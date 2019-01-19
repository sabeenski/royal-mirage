import React, { Component } from 'react';
import './App.css'
// import {Provider} from 'react-redux';
// import store from './store'
import { Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import JobPage from './components/JobPage';
import Footer from './components/Footer';
import JobForm from './components/JobForm';
import ThankYouPage from './components/ThankYouPage';

class App extends Component {
 render() {
   return (
    <div className="App">
      <Navbar />
      <main className="container">
        <Route exact path='/' component={ JobPage } />
        <Route exact path='/careers/purchasing-assistant' component={ JobForm } />
        <Route exact path='/careers/purchasing-assistant/application-successful' component={ ThankYouPage } />
      </main>

       <Footer />
     </div>
   );
 }
}

export default App;
