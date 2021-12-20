import React from 'react';
import './App.css';
import randomuser from './randomuser';
import AvatarList from './AvatarList';
import SearchBar from './SearchBar';

function Avatar(id, name, picture) {
    this.id = id;
    this.name = `${name.title} ${name.first} ${name.last}`;
    this.picture = picture.large;
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            avatars: [],
            isLoading: true,
            errorMsg: '',
            filter: '',
        };
    }

    componentDidMount() {
        this.setState(() => {
            return { isLoading: true };
        });
        this.initData();
    }

    initData = async () => {
        const promises = [];
        for (let i = 0; i < 20; i++) {
            promises.push(await randomuser.get('/api'));
        }
        Promise.all(promises);
        const avatars = promises.map(
            (res) =>
                new Avatar(
                    res.data.results[0].login.uuid,
                    res.data.results[0].name,
                    res.data.results[0].picture
                )
        );
        this.setState({
            avatars: avatars,
            isLoading: false,
        });
    };

    getInRange = (min, max) => {
        return Math.ceil(Math.random() * (max - min) + min);
    };

    searchHandler = (text) => {
        this.setState({ filter: text });
    };

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        } else {
            const { avatars, isLoading, errorMsg, filter } = this.state; //!destructuring TODO:understand this:)
            return (
                <div className='container'>
                    <h1>Avatars</h1>
                    {!isLoading && (
                        <SearchBar
                            label='Search avatars'
                            onSearchSubmit={this.searchHandler}
                        />
                    )}
                    {<p>{errorMsg || ' '}</p>}
                    {!isLoading && avatars && (
                        <AvatarList avatars={avatars} filter={filter} />
                    )}
                </div>
            );
        }
    }
}

export default App;
