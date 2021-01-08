import axios from 'axios';


export const dbReq = axios.create(
    {
        baseURL:'http://localhost:3001'
    }
);

