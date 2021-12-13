import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import faker from 'faker';
import Card from './Card';

//hot replacement
if (module.hot) {
    module.hot.accept();
}

const App = () => {
    return (
        <div className='container'>
            <Card
                imgUrl='https://picsum.photos/300/150?random=1'
                title={faker.commerce.productName()}
                descr={faker.commerce.productDescription()}
                link1={faker.internet.url()}
                link2={faker.internet.url()}
            />
            <Card
                imgUrl='https://picsum.photos/300/150?random=2'
                title={faker.commerce.productName()}
                descr={faker.commerce.productDescription()}
                link1={faker.internet.url()}
                link2={faker.internet.url()}
            />
            <Card
                imgUrl='https://picsum.photos/300/150?random=3'
                title={faker.commerce.productName()}
                descr={faker.commerce.productDescription()}
                link1={faker.internet.url()}
                link2={faker.internet.url()}
            />
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
