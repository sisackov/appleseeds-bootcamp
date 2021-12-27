import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner/Spinner';

const Search = () => {
    const [term, setTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const fetchData = async (query) => {
        const { data } = await axios.get(
            'https://hn.algolia.com/api/v1/search?query=' + query
        );
        return data;
    };

    useEffect(() => {
        const search = async () => {
            console.log('initial searching...');
            try {
                const data = await fetchData('hooks');
                setFetchedData(data.hits);
                setIsLoading(false);
                setErrorMsg('');
            } catch (err) {
                setErrorMsg(err.message);
            }
        };

        search();
    }, []); // [] means that the search will only run once

    useEffect(() => {
        console.log('searching...');
        const search = async () => {
            console.log('searching for ' + term);
            try {
                const data = await fetchData(term);
                setFetchedData(data.hits);
                setIsClicked(false); //enable search only
                setIsLoading(false);
                setErrorMsg('');
            } catch (err) {
                setErrorMsg(err.message);
            }
        };

        if (isClicked) {
            search();
        }
    }, [term, isClicked]);

    useEffect(() => {
        if (isClicked) {
            setIsLoading(true);
        }
    }, [isClicked]);

    const renderData = () =>
        errorMsg ? (
            <div>{errorMsg}</div>
        ) : (
            fetchedData.map((hit) => {
                return (
                    <div key={hit.objectID}>
                        <a href={hit.url} target='_blank' rel='noreferrer'>
                            {hit.title}
                        </a>
                    </div>
                );
            })
        );

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
                    <button onClick={() => setIsClicked(true)}>Search</button>
                </div>
            </div>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className='ui celled list'>{renderData()}</div>
            )}
        </div>
    );
};

export default Search;
