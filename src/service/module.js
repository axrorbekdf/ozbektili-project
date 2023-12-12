import axios from "./axios";

const ModuleService = {

    modules(){
        return axios.get('/modules');
    },
    getModule(id){
        return axios.get(`/modules/${id}`);
    }
}

export default ModuleService;