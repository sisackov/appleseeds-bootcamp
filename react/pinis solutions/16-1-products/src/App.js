import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.Component';
import LandingPage from './pages/LandingPage.component';
import Products from './pages/Products.component';
import ProductDetail from './pages/ProductDetail.component';
import NotFound from './pages/NotFound.component';

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                {/* switches purpose renders the first match only */}
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/products' component={Products} />
                    <Route
                        exact
                        path='/products/:id'
                        component={ProductDetail}
                    />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
