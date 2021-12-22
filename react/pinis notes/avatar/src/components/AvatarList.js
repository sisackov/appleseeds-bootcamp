import React from 'react';
import Avatar from './Avatar';

class AvatarList extends React.Component {
  state = { avatars: [] };

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.userValue !== this.props.userValue) {
      this.setState({
        avatars: this.filterData(this.props.avatars, this.props.userValue),
      });
    } else if (prevProps.avatars !== this.props.avatars) {
      this.setState({
        avatars: this.props.avatars,
      });
    }
  }

  filterData = (arrOfData, userInput) => {
    return arrOfData.filter((avatar) => {
      return avatar.name.toLowerCase().includes(userInput.toLowerCase());
    });
  };

  mapping = () => {
    return this.state.avatars.map((e) => {
      return <Avatar key={e.id} name={e.name} img={e.imgUrl} />;
    });
  };
  render() {
    return <div>{this.mapping()}</div>;
  }
}

export default AvatarList;
