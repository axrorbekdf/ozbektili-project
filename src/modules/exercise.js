import ExerciseService from "@/service/exercise";
import { gettersTypes } from "./types";

const state = {
    isLoading: false,
    exercises: null,
    checkExercises: null,
    finishUnit: null,
    errors: null,
};

const getters = {
    [gettersTypes.exercises]: (state) => {
        return state.exercises;
    },
    [gettersTypes.exerciseError]: (state) => {
        return state.errors;
    },

};


const mutations = {
    exerciseStart(state){
        state.isLoading = true;
        state.exercises = null;
        state.errors = null;
    },
    exerciseSuccess(state, data){
        state.isLoading = false;
        state.exercises = data.data;
    },
    exerciseFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    },

    checkExerciseStart(state){
        state.isLoading = true;
        state.checkExercises = null;
        state.errors = null;
    },
    checkExerciseSuccess(state, data){
        state.isLoading = false;
        state.checkExercises = data;
    },
    checkExerciseFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    },

    finishUnitStart(state){
        state.isLoading = true;
        state.finishUnit = null;
        state.errors = null;
    },
    finishUnitSuccess(state, data){
        state.isLoading = false;
        state.finishUnit = data;
    },
    finishUnitFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    }
};

const actions = {

    getExercises(context, data){
        console.log(data);
        return new Promise((resolve, reject) => {

            context.commit('exerciseStart');
            

            ExerciseService.getExercises(data.module_id, data.unit_id)
            .then(response => {
                context.commit('exerciseSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('exerciseFailure', error.response.data)
                reject(error.response.data)
            })
        });
    },

    checkExercise(context, exercise){
        return new Promise((resolve, reject) => {

            context.commit('checkExerciseStart');

            ExerciseService.checkExercise(exercise)
            .then(response => {
                context.commit('checkExerciseSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('checkExerciseFailure', error.response.data)
                reject(error.response.data)
            })
        });
    },

    finishUnit(context, old_unit_id){
        return new Promise((resolve, reject) => {

            context.commit('finishUnitStart');

            ExerciseService.finishUnit(old_unit_id)
            .then(response => {
                context.commit('finishUnitSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('finishUnitFailure', error.response.data)
                reject(error.response.data)
            })
        });
    }

};

export default {
    state,
    getters,
    mutations,
    actions,
}