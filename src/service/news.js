import axios from "./axios";

const NewsService = {

    getAll(auth){
        return axios.get('/v1/news', {
            params: auth
        });
    },

    show(id, auth){
        return axios.get(`/v1/news/${id}`, {
            params: auth
        })
    }
}

export default NewsService;