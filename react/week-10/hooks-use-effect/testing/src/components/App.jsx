import './App.css';
import React from 'react';
import fantasyAPI from '../api/yahoo';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            errorMsg: 'No error',
        };
    }

    async componentDidMount() {
        try {
            // const response = await fantasyAPI.get('/game/nfl/players');
            // const response = await fantasyAPI.get('/players;position=QB');
            const url =
                'https://intense-mesa-62220.herokuapp.com/https://fantasysports.yahooapis.com/fantasy/v2/game/nfl/';
            const key =
                '/tmp/oauth_data_token_storage_dj0yJmk9YmNWV2ZFUWs3QWgzJmQ9WVdrOVZGWnVkbTVNVVVnbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTVk.out';
            const response = await axios.get(
                'https://intense-mesa-62220.herokuapp.com/' + url + key
            );
            console.log(response);
            this.setState({
                data: response.data,
            });
        } catch (error) {
            console.log(error);
            this.setState({
                errorMsg: error.message,
            });
        }
    }

    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <p>
                        {this.state.data
                            ? this.state.data
                            : this.state.errorMsg}
                    </p>
                </header>
            </div>
        );
    }
}
export default App;
