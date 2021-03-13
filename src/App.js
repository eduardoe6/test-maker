import React from 'react';
import './App.css';

import { BrowserRouter, Link } from 'react-router-dom'

import AppRouter from './ui/router/AppRouter'

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <h1>Test Maker</h1>

                    <Link to="/tests">Testes</Link> 

                </div>

                <AppRouter />
            
            </BrowserRouter>
        )
    }
}

export default App;
