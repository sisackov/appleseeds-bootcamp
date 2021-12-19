import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSearchSubmit(this.state.term);
    };

    render() {
        return (
            <form className='form' onSubmit={this.onFormSubmit}>
                <div className='field'>
                    <label>Search Jokes</label>
                    <input
                        type='text'
                        value={this.state.term}
                        onChange={(e) =>
                            this.setState({ term: e.target.value })
                        }
                    />
                    <button type='submit' onClick={this.onFormSubmit}>
                        Search
                    </button>
                </div>
            </form>
        );
    }
}

export default SearchBar;
