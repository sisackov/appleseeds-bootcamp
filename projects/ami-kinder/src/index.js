import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import kinder1 from './images/kinder1.png';
import kinder2 from './images/kinder2.jpg';
import kinder3 from './images/kinder3.png';
// import faker from 'faker';
// import Kinder from './Kinder';

//hot replacement
if (module.hot) {
    module.hot.accept();
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0, surprise: '' };
        this.handleClick = this.handleClick.bind(this);
        this.getRandomSurpriseImage = this.getRandomSurpriseImage.bind(this);
    }

    componentDidMount() {
        this.setState({
            surprise:
                'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        });
    }

    getRandomSurpriseImage() {
        return 'https://picsum.photos/300/150?random=' + this.state.clicks;
    }

    getImage() {
        switch (this.state.clicks) {
            case 0:
                return <img alt='Kinder' src={kinder1} />;
            case 1:
                return <img alt='Kinder' src={kinder2} />;
            case 2:
                return <img alt='Kinder' src={kinder3} />;
            default:
                return (
                    <img
                        alt='Kinder'
                        src={`https://picsum.photos/500/500?random=${this.state.clicks}`}
                    />
                );
        }
    }

    handleClick() {
        this.setState((prevState) => ({
            clicks: prevState.clicks + 1,
        }));
    }

    // React says we have to define render!!
    render() {
        return (
            <div className='container' onClick={this.handleClick}>
                <h1>Aminadav's game</h1>
                <div>{this.getImage()}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
