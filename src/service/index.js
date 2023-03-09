import axios from 'axios';
import baseURL from '@/constant/index.js';

class Ajax {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }

    get(config) {
        console.log("config: ", config)
        return this.request({ ...config, method: 'get' })
    }

    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}

export const instance = new Ajax(baseURL);