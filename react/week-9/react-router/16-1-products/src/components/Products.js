import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store';

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
            <div className='link-container'>
                {data.map((product) => {
                    return (
                        <Link
                            key={`Link-to-${product.id}`}
                            to={`${this.props.location.pathname}/${product.id}`}
                            className='link-item'
                        >
                            {product.title}
                        </Link>
                    );
                })}
            </div>
        );
    }
}

export default Products;
