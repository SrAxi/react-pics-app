import axios from 'axios';

const ACCESS_KEY = '61a814ea98acdea1fc656e69f5ceef3aeb647dbf09bb84c57d152ed88e5763ba';
const API_URL = 'https://api.unsplash.com';

export default axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    },
});
