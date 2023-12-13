import axios from "./axios";

const ExerciseService = {

    getExercises(module_id, unit_id, token){
        console.log(module_id, unit_id);
        return axios.get(`/v1/exercise/get/${module_id}/${unit_id}`, {
            params: token
        });
    },

    checkExercise(exercise, token){
        return axios.post('/v1/exercise/check', exercise, {
            params: token
        })
    }

}

export default ExerciseService;