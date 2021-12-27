import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        function fetchData() {
            try {
                const response = fetch(
                    'https://api.github.com/users/mosh-hamedani/repos'
                );
                console.log(response);
                setData(response.data);
            } catch (error) {
                console.log(error);
                setData(error.message);
            }
        }

        fetchData();
    }, [data]);

    const renderData = data.map((item, index) => {
        return (
            <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
            </div>
        );
    });

    return <div className='App'>{renderData}</div>;
}

export default App;
