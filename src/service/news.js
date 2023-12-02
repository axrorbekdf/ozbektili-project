import axios from "./axios";

const NewsService = {

    getAll(){
        return axios.post('/v1/news');
    },

    show(id){
        return axios.get(`/v1/news/${id}`)
    }
}

export default NewsService;