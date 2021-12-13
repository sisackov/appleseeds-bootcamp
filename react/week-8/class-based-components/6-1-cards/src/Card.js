import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <img alt='random' src={this.props.imgUrl}></img>
                <h1>{this.props.title}</h1>
                <p>{this.props.descr}</p>
                <a className='link' href={this.props.link1}>
                    SHARE
                </a>
                <a className='link' href={this.props.link2}>
                    EXPLORE
                </a>
            </div>
        );
    }
}

export default Card;
