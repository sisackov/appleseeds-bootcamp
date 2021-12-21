import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import store from '../store';
import ProductDetails from './ProductDetail';

class Products extends React.Component {
    state = { data: [] };

    componentDidMount() {
        this.setState({
            data: store,
        });
    }

    render() {
        const { data } = this.state;
        return (
            <BrowserRouter>
                <div className='link-container'>
                    {data.map((product) => {
                        return (
                            <Link
                                key={`Link-to-/products/${product.id}`}
                                to={`/products/${product.id}/${product.id}`}
                                className='link-item'
                            >
                                {product.title}
                            </Link>
                        );
                    })}
                </div>
                {data.map((product) => {
                    return (
                        <Route
                            key={`Route-to-/products/${product.id}`}
                            path={`/products/${product.id}/:id`}
                            component={ProductDetails}
                        />
                    );
                })}
            </BrowserRouter>
        );
    }
}

export default Products;
