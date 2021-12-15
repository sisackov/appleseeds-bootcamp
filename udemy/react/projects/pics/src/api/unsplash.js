import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID BjeKhjKwGHvqPFp2SzuJorg8ObkIVK1I1-SYAs0G4-U',
    },
});
