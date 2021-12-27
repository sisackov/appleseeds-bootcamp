import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [fetchedData, setFetchedData] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const fetchData = async (query) => {
        const { data } = await axios.get(
            'https://hn.algolia.com/api/v1/search?query=' + query
        );
        return data;
    };

    useEffect(() => {
        const search = async () => {
            try {
                const data = await fetchData('hooks');
                setFetchedData(data.hits);
            } catch (err) {
                console.log(err);
            }
        };

        search();
    }, []); // [] means that the search will only run once

    useEffect(() => {
        const search = async () => {
            try {
                const data = await fetchData(term);
                setFetchedData(data.hits);
                setIsClicked(false); //enable search only
            } catch (err) {
                console.log(err);
            }
        };

        if (isClicked) {
            search();
        }
    }, [term, fetchedData, isClicked]);

    const renderedResults = fetchedData.map((hit) => {
        return <div key={hit.objectID}>{hit.title}</div>;
    });

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        //controlled component with useState
                        onChange={(e) => setTerm(e.target.value)}
                        className='input'
                    />
                </div>
            </div>
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    );
};

export default Search;
