import axios from 'axios';

export default axios.create({
    baseURL: 'https://fantasysports.yahooapis.com/fantasy/v2/',
    auth: {
        username:
            'dj0yJmk9YmNWV2ZFUWs3QWgzJmQ9WVdrOVZGWnVkbTVNVVVnbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTVk',
        password: '6a4ee57558867fddf4f957e3d69278e3f0342c46',
    },
});
// proxy: {
//         host: 'https://intense-mesa-62220.herokuapp.com/',
//     },
// "proxy": "https://intense-mesa-62220.herokuapp.com/"
