import './App.css';
import React, { useState, useEffect, Fragment } from 'react';

function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        function fetchData() {
            fetch('https://swapi.dev/api/films/1/')
                .then((response) => response.json())
                .then((dt) => {
                    console.log(dt);
                    setData(dt);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        if (!data.title) {
            //this if statement should prevent the useEffect from running multiple times
            fetchData();
        }
    }, [data]);

    const renderData = () => {
        if (!data.title) return null;
        const { title, director, opening_crawl } = data;
        console.log(title);
        return (
            <Fragment>
                <h1>{title}</h1>
                <h3>Directed by: {director}</h3>
                <p>{opening_crawl}</p>
            </Fragment>
        );
    };

    return <div className='App'>{renderData()}</div>;
}

export default App;
