import React, { useState, useEffect } from 'react';
import Spinner from './Spinner/Spinner';
import randomuser from './randomuser';
import AvatarList from './AvatarList';

function Avatar(id, name, picture) {
    this.id = id;
    this.name = `${name.title} ${name.first} ${name.last}`;
    this.picture = picture.large;
}

const Search = () => {
    const [term, setTerm] = useState('');
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const promises = [];
                for (let i = 0; i < 20; i++) {
                    promises.push(await randomuser.get('/api'));
                }
                Promise.all(promises);
                const avatars = promises.map(
                    (res) =>
                        new Avatar(
                            res.data.results[0].login.uuid,
                            res.data.results[0].name,
                            res.data.results[0].picture
                        )
                );
                setFetchedData(avatars);
                setIsLoading(false);
                setErrorMsg('');
            } catch (err) {
                setErrorMsg(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className='ui form'>
                <h1>Avatars</h1>
                <div className='field'>
                    <label>Search Avatars</label>
                    <input
                        value={term}
                        //controlled component with useState
                        onChange={(e) => setTerm(e.target.value)}
                        className='input'
                    />
                    <button onClick={() => setSearch(term)}>Search</button>
                    <p>{errorMsg}</p>
                </div>
            </div>
            <br />
            {isLoading ? (
                <Spinner />
            ) : (
                <AvatarList avatars={fetchedData} filter={search} />
            )}
        </div>
    );
};

export default Search;
