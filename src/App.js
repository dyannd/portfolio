import './styles/index.scss';
import Hero from './Components/Hero.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
function App() {


    return (
        <Router>
            <div className="App" >
                    <Route exact path="/" component={Hero} />
            </div>
        </Router >
    );
}

export default App;