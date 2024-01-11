import axios from "./axios";

const ExerciseService = {

    getExercises(module_id, unit_id){
        console.log(module_id, unit_id);
        return axios.get(`/v1/exercise/get/${module_id}/${unit_id}`);
    },

    checkExercise(exercise){
        return axios.post('/v1/exercise/check', exercise)
    },

    finishUnit(old_unit_id){
        return axios.post('/v1/exercise/finishUnit', old_unit_id)
    }

}

export default ExerciseService;