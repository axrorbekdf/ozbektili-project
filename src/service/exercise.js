import axios from "./axios";

const ExerciseService = {

    getExercises(module_id, unit_id, token){
        return axios.get(`/v1/exercise/${module_id}/${unit_id}`, {
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