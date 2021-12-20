import React from 'react';

class JokeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatars: props.avatars,
            filter: props.filter,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this.setState({
                filter: this.props.filter,
            });
        }
    }

    getAvatarCards = () => {
        const { avatars, filter } = this.state;
        return avatars.map((avatar) => {
            if (!filter || avatar.name.includes(filter)) {
                return (
                    <div key={`avatar-${avatar.id}`} className='card'>
                        <h3>{avatar.name}</h3>
                        <img src={avatar.picture} alt={avatar.name} />
                    </div>
                );
            }
            return null;
        });
    };

    render() {
        return <div className='avatar-container'>{this.getAvatarCards()}</div>;
    }
}

export default JokeComponent;
