import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CancelToken = axios.CancelToken;

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const source = CancelToken.source();
        const search = async () => {
            console.log('searching...');
            try {
                const { data } = await axios.get(
                    'https://restcountries.com/v3.1/all?fields=name',
                    { cancelToken: source.token }
                );
                const countryList = data.map(
                    (country) => country.name.official
                );
                setCountries(countryList);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('AXIOS Request canceled', err.message);
                } else {
                    setError(err);
                }
            }
        };

        search();

        return () => {
            console.log('cleaning up...');
            source.cancel('Operation canceled since the component unmounted');
        };
    }, []); // [] means that the search will only run once

    const renderedCountries = countries.map((country) => {
        return <div key={country}>{country}</div>;
    });

    return (
        <div>
            <div className='ui celled list'>
                {error ? error : renderedCountries}
            </div>
        </div>
    );
};

export default CountryList;
