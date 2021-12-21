import React from 'react';
import { BrowserRouter, Route /* Link */ } from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import Homepage from './Homepage';

const App = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={Homepage} />
                <Route path='/products' component={Products} />
            </BrowserRouter>
        </div>
    );
};

export default App;
