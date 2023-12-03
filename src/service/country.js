import axios from "./axios";

const CountryService = {

    countries(auth){
        return axios.get('/v1/countries_stat', {
            params: auth
        });
    }
}

export default CountryService;