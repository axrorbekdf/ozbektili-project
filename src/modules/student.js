import StudentService from "@/service/student";
import {getItem} from '@/helpers/persistaneStorage'
import { gettersTypes } from "./types";

const state = {
    isLoading: false,
    student_modules: null,
    student_units: null,
    errors: null,
};

const getters = {
    [gettersTypes.student_modules]: (state) => {
        return state.student_modules;
    },
    [gettersTypes.student_units]: (state) => {
        return state.student_units;
    },
    [gettersTypes.studentError]: (state) => {
        return state.errors;
    },

};


const mutations = {
    studentModulesStatStart(state){
        state.isLoading = true;
        state.student_modules = null;
        state.errors = null;
    },
    studentModulesStatSuccess(state, data){
        state.isLoading = false;
        state.student_modules = data.data;
    },
    studentModulesStatFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    },

    studentUnitsStart(state){
        state.isLoading = true;
        state.student_units = null;
        state.errors = null;
    },
    studentUnitsSuccess(state, data){
        state.isLoading = false;
        state.student_units = data.data;
    },
    studentUnitsFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    }
};

const actions = {

    getStudentModules(context){
        return new Promise((resolve, reject) => {

            context.commit('studentModulesStatStart');

            const user ={
                token: getItem('token')
            };

            StudentService.studentModules(user)
            .then(response => {
                context.commit('studentModulesStatSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('studentModulesStatFailure', error.response.data)
                reject(error.response.data)
            })
        });
    },

    getStudentUnits(context,module_id){
        return new Promise((resolve, reject) => {

            context.commit('studentUnitsStart');

            const user ={
                token: getItem('token')
            };

            StudentService.studentUnits(user, module_id)
            .then(response => {
                context.commit('studentUnitsSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('studentUnitsFailure', error.response.data)
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