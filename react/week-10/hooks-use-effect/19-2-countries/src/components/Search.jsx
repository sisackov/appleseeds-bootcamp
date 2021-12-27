import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [countries, setCountries] = useState([]);
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const search = async () => {
            console.log('searching...');
            try {
                const { data } = await axios.get(
                    'https://restcountries.com/v3.1/all?fields=name'
                );
                const countryList = data.map(
                    (country) => country.name.official
                );
                setCountries(countryList);
                setResults(countryList);
            } catch (err) {
                setError(err);
            }
        };

        search();
    }, []); // [] means that the search will only run once

    useEffect(() => {
        if (term === '') {
            setResults(countries);
        } else {
            const filtered = countries.filter((country) =>
                country.toLowerCase().includes(term)
            );
            setResults(filtered);
        }
    }, [term, countries]);

    const renderedResults = results.map((country) => {
        return <div key={country}>{country}</div>;
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
            <div className='ui celled list'>
                {error ? error : renderedResults}
            </div>
        </div>
    );
};

export default Search;
