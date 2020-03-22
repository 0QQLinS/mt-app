import axios from 'axios';
axios.defaults.baseURL = 'http://api.duyiedu.com';

axios.interceptors.request.use(function (config) {
    // console.log(config);
    config.params = {
        ...config.params,
        appkey: 'LINSHUANG_1575700989036'
    };
    return config;
}, function (error) {
    return Promise.reject(error)
})


// import axios from 'axios';
// // import Vue from 'vue'
// // Vue.prototype.$axios = axios  https://developer.duyiedu.com

// axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/json';





export default axios
