import React, { Component } from 'react';
// import {Provider} from 'react-redux';
// import store from './store'
import Navbar from './components/Navbar';
import JobPage from './components/JobPage';
import Footer from './components/Footer';

class App extends Component {
 render() {
   return (
     <div className="App">
       <Navbar />
       <JobPage />
       <Footer />
     </div>
   );
 }
}

export default App;
