import React from 'react';
import './Spinner.css';

class Spinner extends React.Component {
    state = { className: '' };

    componentDidMount() {
        const rand = Math.floor(Math.random() * 3) + 1;
        switch (rand) {
            case 1:
                this.setState({
                    className: 'spinner-1',
                });
                break;
            case 2:
                this.setState({
                    className: 'spinner-2',
                });
                break;
            case 3:
                this.setState({
                    className: 'spinner-3',
                });
                break;
            default:
                break;
        }
    }

    renderContent() {
        console.log(this.state.className);
        if (this.state.className === 'spinner-3') {
            return (
                <div className={this.state.className}>
                    <div className='dot-1'></div>
                    <div className='dot-2'></div>
                    <div className='dot-3'></div>
                </div>
            );
        }
        return <div className={this.state.className}></div>;
    }

    render() {
        return (
            <div className='background-pini-spinner'>
                {this.renderContent()}
            </div>
        );
    }
}

Spinner.defaultProps = {
    message: 'Loading...',
};

export default Spinner;
