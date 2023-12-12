import axios from "./axios";

const StudentService = {

    studentModules(token){
        return axios.get('/v1/student/modules', {
            params: token
        });
    },

    studentUnits(token, module_id){
        return axios.get(`/v1/student/units/${module_id}`, {
            params: token
        });
    }
}

export default StudentService;