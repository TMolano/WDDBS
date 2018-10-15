import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
//import SimpleStorage from "react-simple-storage";

import Nav from './components/Nav';
import Main from './components/Main'

class App extends Component {
render(){
    return(
        <Router>
            <div className="container">
                <Nav />
                <Main />
            </div>
        </Router>
    )
}
}

export default App