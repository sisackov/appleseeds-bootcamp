import React from 'react';
import CountryList from './components/CountryList';

const App = () => {
    const [toggle, setToggle] = React.useState(true);

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Show Countries</button>
            <br />
            <br />
            {toggle && <CountryList />}
        </div>
    );
};

export default App;
