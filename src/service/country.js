import axios from "./axios";

const CountryService = {

    countries(){
        return axios.get('/countries_stat');
    }
}

export default CountryService;