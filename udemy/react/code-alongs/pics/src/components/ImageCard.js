import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        //setSpans needs to run only after the image has been loaded
        // this.imageRef.current.addEventListener('load', this.setSpans);
        // console.log('componentDidMount');
    }

    setSpans = () => {
        // console.log('setSpans');
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    };

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                    onLoad={this.setSpans}
                />
            </div>
        );
    }
}

export default ImageCard;
