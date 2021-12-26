import axios from 'axios';

const KEY = 'AIzaSyCewWXVRFictfIKxH7yxIsF2_tySEQWrxw';
const MAX_RESULTS = 5;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: MAX_RESULTS,
        key: KEY,
    },
});
