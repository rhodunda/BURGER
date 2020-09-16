import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-83a64.firebaseio.com/'
});

export default instance;