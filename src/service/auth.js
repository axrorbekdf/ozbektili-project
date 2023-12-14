import axios from "./axios";

const AuthService = {

    login(user){
        return axios.post('/login', user);
    },

    register(user){
        return axios.post('/register', user);
    },
    getUser(){
        return axios.get('/me')
    }

}

export default AuthService;