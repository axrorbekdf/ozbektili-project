import axios from "./axios";

const CountryService = {

    countriesStat(){
        return axios.get('/countries_stat');
    },

    countries(){
        return axios.get('/countries');
    }
}

export default CountryService;