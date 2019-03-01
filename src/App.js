import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/mainNavbar'
import Home from './components/Home'
import Experimentos from './components/Experimentos'
import Projetos from './components/Projetos'
import Textos from './components/Textos'
import Contato from './components/Contato'
import Footer from './components/mainFooter'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
         <Route exact path="/" component= {Home} />
         <Route  path="/contato" component= {Contato} />
         <Route  path="/experimentos" component= {Experimentos} />
         <Route  path="/projetos" component= {Projetos} />
         <Route  path="/textos" component= {Textos} />
         <Footer />
         </div>
      </Router> 
    );
  }
}

export default App;
