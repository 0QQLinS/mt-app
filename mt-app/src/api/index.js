import axios from '@/axios.js';

var api={
    searchHotWords(params){
        return axios.get('/api/meituan/header/searchHotWords.json',params);
    },
    getSearchList(params){
        return axios.get('/api/meituan/header/search.json',params)
    },
    getMenuList(params){
        return axios.get('/api/meituan/index/nav.json',params)
    },
    getProvinceList(){
        return axios.get('/api/meituan/city/province.json')
    },
    getHotCityList(){
        return axios.get('/api/meituan/city/hot.json')
    },
    getRecentCityList(){
        return axios.get('/api/meituan/city/recents.json')
    },
    getCityList(){
        return axios.get('/api/meituan/city/cityList.json')
    },
    getProductList(){
        return axios.get('/api/meituan/list/goodsList.json')
    },
    getProductCategoryList(){
        return axios.get('/api/meituan/list/classify.json')
    },
    getAreaList(){
        return axios.get('/api/meituan/list/areaList.json')
    },
    login(params){
        return axios.get('/api/meituan/login',params)
    },
    register(params){
        return axios.get('/api/meituan/register',params)
    }
}
export default api;