import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID cdAmuck-3I5MjeIqMxBayQvoziDZoCa_Sq64kbYlhZk'
    }
});

