import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    /*     console.log('I RUN WITH EVERY RENDER');

    useEffect(() => {
        console.log('I RUN AFTER EVERY RENDER AND AT INITIAL RENDER');
    }); */

    // useEffect is a hook that runs a piece of code based on a given condition.
    // In this case, we are using it to run a piece of code when term changes.
    // The first argument is a function that runs when the component is mounted.
    // The second argument is an array of values that determine if the function should run.
    // if the array is empty, the function will run at initial render.
    // if there's nothing it will run at initial render and after every rerender.
    // if the array contains a value, the function will run at initial render and after every
    // rerender when that value changes.
    // if there are multiple values in the array, the function will run at initial render and
    // after every rerender when any of those values changes.
    /*     useEffect(() => {
        //effect code here
        console.log(
            'I RUN AFTER EVERY RENDER IF term CHANGES AND AT INITIAL RENDER'
        );
        return () => {
            //cleanup code here
        };
    }, [term]); */

    //first argument is a function that isn't allowed to be async
    // 3 workarounds:
    // 1. call inside the useEffect to async function
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term,
                    },
                }
            );

            setResults(data.query.search);
        };

        const timeoutId = setTimeout(() => {
            if (term) {
                search();
            }
        }, 1000);

        return () => {
            /**
             * on initial component render the useEffect is called.
             * it returns this clean up function.
             * on rerender, the clean function will be called first
             * and only then it will run the execution of the effect.
             */
            clearTimeout(timeoutId);
        };
    }, [term]);

    //2 IIFE:
    // useEffect(() => {
    //     (async () => {
    //         await axios.get('asldkfj');
    //     })();
    // }, [term]);

    //3 regular promise:
    // useEffect(() => {
    //     axios.get('asldkfj').then((response) => {
    //         console.log(response);
    //     });
    // }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
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
