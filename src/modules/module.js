import ModuleService from "@/service/module";
import {getItem} from '@/helpers/persistaneStorage'
import { gettersTypes } from "./types";

const state = {
    isLoading: false,
    modules: null,
    one_module: null,
    errors: null,
};

const getters = {
    [gettersTypes.modules]: (state) => {
        return state.modules;
    },
    [gettersTypes.one_module]: (state) => {
        return state.one_module;
    },
    [gettersTypes.moduleError]: (state) => {
        return state.errors;
    },

};


const mutations = {
    modulesStatStart(state){
        state.isLoading = true;
        state.modules = null;
        state.errors = null;
    },
    modulesStatSuccess(state, data){
        state.isLoading = false;
        state.modules = data.result;
    },
    modulesStatFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    },

    getModuleStart(state){
        state.isLoading = true;
        state.one_module = null;
        state.errors = null;
    },
    getModuleSuccess(state, data){
        state.isLoading = false;
        state.one_module = data.result;
    },
    getModuleFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    }
};

const actions = {

    getModules(context){
        return new Promise((resolve, reject) => {

            context.commit('modulesStatStart');

            ModuleService.modules()
            .then(response => {
                context.commit('modulesStatSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('modulesStatFailure', error.response.data)
                reject(error.response.data)
            })
        });
    },

    getModule(context, id){
        return new Promise((resolve, reject) => {

            context.commit('getModuleStart');

            ModuleService.getModule(id)
            .then(response => {
                context.commit('getModuleSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('getModuleFailure', error.response.data)
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