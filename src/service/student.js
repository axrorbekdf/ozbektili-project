import axios from "./axios";

const StudentService = {

    studentModules(){
        return axios.get('/v1/student/modules');
    },

    studentUnits(module_id){
        return axios.get(`/v1/student/units/${module_id}`);
    }
}

export default StudentService;