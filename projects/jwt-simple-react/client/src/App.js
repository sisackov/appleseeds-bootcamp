import './App.css';
import axios from 'axios';
import { useState } from 'react';
import jwt_decode from 'jwt-decode';

axios.defaults.baseURL = 'http://127.0.0.1:5000/api/';

function App() {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const refreshToken = async () => {
        try {
            const res = await axios.post('/refresh', {
                token: user.refreshToken,
            });
            setUser({
                ...user,
                accessToken: res.data.accessToken,
                refreshToken: res.data.refreshToken,
            });

            /**
             * Save the new tokens to localStorage or cookie
             */
            document.cookie = `accessToken=${res.data.accessToken}; path=/`; //saves token to cookie
            localStorage.setItem('accessToken', res.data.accessToken); //saves token to localStorage

            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    /**
     * Extract the access token from localStorage or cookie
     */

    const accessToken = localStorage.getItem('accessToken');
    console.log('accessToken: ', accessToken);
    const parseCookie = () => {
        const cookieObject = {};
        document.cookie.split(';').forEach((cookie) => {
            const [key, value] = cookie.split('=');
            cookieObject[key.trim()] = value;
        });
        return cookieObject;
    };
    console.log(parseCookie().accessToken);

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(
        async (config) => {
            let currentDate = new Date();
            const decodedToken = jwt_decode(user.accessToken);
            console.log('decodedToken', decodedToken);
            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                const data = await refreshToken();
                console.log('refreshToken', data);
                config.headers['authorization'] = 'Bearer ' + data.accessToken;
            }
            return config;
        },
        (reqError) => {
            return Promise.reject(reqError);
        }
    );

    const handleSubmit = async (e) => {
        console.log('handleSubmit');
        e.preventDefault();
        try {
            const res = await axios.post('/login', { username, password });
            setUser(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {
        setSuccess(false);
        setError(false);
        try {
            await axiosJWT.delete('/users/' + id, {
                headers: { authorization: 'Bearer ' + user.accessToken },
            });
            setSuccess(true);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className='container'>
            {user ? (
                <div className='home'>
                    <span>
                        Welcome to the <b>{user.isAdmin ? 'admin' : 'user'}</b>{' '}
                        dashboard <b>{user.username}</b>.
                    </span>
                    <span>Delete Users:</span>
                    <button
                        className='deleteButton'
                        onClick={() => handleDelete(1)}
                    >
                        Delete John
                    </button>
                    <button
                        className='deleteButton'
                        onClick={() => handleDelete(2)}
                    >
                        Delete Jane
                    </button>
                    {error && (
                        <span className='error'>
                            You are not allowed to delete this user!
                        </span>
                    )}
                    {success && (
                        <span className='success'>
                            User has been deleted successfully...
                        </span>
                    )}
                </div>
            ) : (
                <div className='login'>
                    <form onSubmit={handleSubmit}>
                        <span className='formTitle'>Login Form</span>
                        <input
                            type='text'
                            placeholder='username'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='submit' className='submitButton'>
                            Login
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default App;
