import ExerciseService from "@/service/exercise";
import {getItem} from '@/helpers/persistaneStorage'
import { gettersTypes } from "./types";

const state = {
    isLoading: false,
    exercises: null,
    checkExercises: null,
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
    }
};

const actions = {

    getExercises(context, module_id){
        return new Promise((resolve, reject) => {

            context.commit('exerciseStart');
            
            const user ={
                token: getItem('token')
            };

            ExerciseService.getExercises(module_id, user)
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

            const user ={
                token: getItem('token')
            };

            ExerciseService.checkExercise(exercise, user)
            .then(response => {
                context.commit('checkExerciseSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('checkExerciseFailure', error.response.data)
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