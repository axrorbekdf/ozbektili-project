import axios from "./axios";

const NewsService = {

    getAll(){
        return axios.get('/news');
    },

    show(id){
        return axios.get(`/news/${id}`);
    }
}

export default NewsService;