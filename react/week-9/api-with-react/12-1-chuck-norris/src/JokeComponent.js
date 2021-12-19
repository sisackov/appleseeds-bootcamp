import React from 'react';

class JokeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.label,
            joke: props.joke,
            imgUrl: props.img,
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps.joke !== this.props.joke) {
            this.setState({
                title: this.props.label,
                joke: this.props.joke,
            });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <img src={this.state.imgUrl} alt='The mighty Chuck' />
                <p>{this.state.joke}</p>
            </div>
        );
    }
}

export default JokeComponent;
