import React from 'react';

class NameComponent extends React.Component {
    render() {
        return (
            <div className='card-container'>
                <h2>All Names</h2>
                <p>{this.props.data.join('   ')}</p>
            </div>
        );
    }
}

export default NameComponent;
