import React, { Component } from 'react';
import axios from 'axios';
import AvatarList from './components/AvatarList';
import Input from './components/Input';

export default class App extends Component {
  state = { data: [], value: '' };

  async componentDidMount() {
    //spinner on
    await this.getData();
    //spinner off
  }

  getData = async () => {
    const res = await axios.get('https://randomuser.me/api/?results=10');
    const dataLite = res.data.results.map((e) => {
      return {
        name: `${e.name.first} ${e.name.last}`,
        imgUrl: e.picture.medium,
        id: e.login.uuid,
      };
    });
    this.setState({ data: dataLite, originalData: dataLite });
  };

  handleInput = ({ target: { value } }) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div>
        <Input handleInput={this.handleInput} userValue={this.state.value} />
        <AvatarList avatars={this.state.data} userValue={this.state.value} />
      </div>
    );
  }
}
