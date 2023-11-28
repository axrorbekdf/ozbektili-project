import axios from "./axios";

const AuthService = {

    login(user){
        return axios.post('/login', user);
    },

    register(user){
        return axios.post('/register', user);
    },
    getUser(user){
        return axios.get('/me', {
            params: user
        })
    }

}

export default AuthService;