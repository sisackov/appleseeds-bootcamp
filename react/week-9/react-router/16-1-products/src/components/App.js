import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import Homepage from './Homepage';
import ProductDetails from './ProductDetail';

const App = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <Header />
                <Switch>
                    {/* Switch renders the first match only */}
                    <Route path='/' exact component={Homepage} />
                    <Route path='/products' exact component={Products} />
                    <Route
                        path='/products/:id'
                        exact
                        component={ProductDetails}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
