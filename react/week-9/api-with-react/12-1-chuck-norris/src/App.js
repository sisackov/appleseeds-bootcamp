import React from 'react';
import './App.css';
import chucknorrisapi from './chucknorrisapi';
import JokeComponent from './JokeComponent';
import SearchBar from './SearchBar';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
            isLoading: true,
            imgUrl: '',
            joke: '',
            jokeTitle: '',
            errorMsg: '',
        };
    }

    componentDidMount() {
        this.setState(() => {
            return { isLoading: true, options: ['random'] };
        });
        this.initData();
    }

    initData = async () => {
        const categories = await chucknorrisapi.get('/jokes/categories');
        const newOptions = categories.data.map((category) => category);
        newOptions.unshift('random');
        this.setState({
            options: newOptions,
            isLoading: false,
        });
    };

    getInRange = (min, max) => {
        return Math.ceil(Math.random() * (max - min) + min);
    };

    searchHandler = async (text) => {
        const response = await chucknorrisapi.get('/jokes/search', {
            params: { query: text },
        });
        const { total, result } = response.data;
        if (total > 0) {
            const randomIndex = this.getInRange(0, total - 1);
            this.setState({
                joke: result[randomIndex].value,
                jokeTitle: ` ${text} Chuck`,
                imgUrl: result[randomIndex].icon_url,
                errorMsg: '',
            });
        } else {
            this.setState({
                errorMsg: `No jokes found for ${text}`,
            });
        }
    };

    getJoke = async (category) => {
        const params = category === 'random' ? {} : { category: category };
        //!below call is equivalent to: https://api.chucknorris.io/jokes/random?category={category}
        const response = await chucknorrisapi.get('/jokes/random', {
            params: params,
        });
        this.setState({
            imgUrl: response.data.icon_url,
            joke: response.data.value,
            jokeTitle: response.data.categories[0] || 'random',
            errorMsg: '',
        });
    };

    renderOptions = () => {
        const { options, isLoading } = this.state;
        if (isLoading || !options) return null;
        const optionsMap = options.map((option) => (
            <button key={option} onClick={() => this.getJoke(option)}>
                {option}
            </button>
        ));
        return <div className='options-container'>{optionsMap}</div>;
    };

    render() {
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        } else {
            const { imgUrl, joke, isLoading, jokeTitle, errorMsg } = this.state; //!destructuring TODO:understand this:)
            return (
                <div className='container'>
                    <h1>Chuck Norris Joke</h1>
                    {!isLoading && (
                        <SearchBar onSearchSubmit={this.searchHandler} />
                    )}
                    {<p>{errorMsg || ' '}</p>}
                    {!isLoading && this.renderOptions()}
                    {!isLoading && joke && (
                        <JokeComponent
                            label={`${jokeTitle} Chuck`}
                            joke={joke}
                            img={imgUrl}
                        />
                    )}
                </div>
            );
        }
    }
}

export default App;
