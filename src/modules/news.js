import NewsService from "@/service/news";
import {getItem} from '@/helpers/persistaneStorage'
import { gettersTypes } from "./types";

const state = {
    isLoading: false,
    news: null,
    show: null,
    errors: null,
};

const getters = {
    [gettersTypes.news]: (state) => {
        return state.user;
    },
    [gettersTypes.show]: (state) => {
        return state.show;
    },
    [gettersTypes.error]: (state) => {
        return state.errors;
    },

};


const mutations = {
    getAllStart(state){
        state.isLoading = true;
        state.news = null;
        state.show = null;
        state.errors = null;
    },
    getAllSuccess(state, data){
        state.isLoading = false;
        state.news = data;
    },
    getAllFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    },

    showStart(state){
        state.isLoading = true;
        state.show = null;
        state.errors = null;
    },
    showSuccess(state, data){
        state.isLoading = false;
        state.show = data;
    },
    showFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    }
};

const actions = {

    getAll(context){
        return new Promise((resolve, reject) => {

            context.commit('getAllStart');
            
            const auth ={
                token: getItem('token')
            }

            NewsService.getAll(auth)
            .then(response => {
                context.commit('getAllSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('getAllFailure', error.response.data)
                reject(error.response.data)
            })
        });
    },

    show(context, id){
        return new Promise((resolve, reject) => {

            context.commit('showStart');
            
            const auth ={
                token: getItem('token')
            }

            NewsService.show(id, auth)
            .then((response) => {
                context.commit('showSuccess', response.data.data)
                resolve(response.data)
            })
            .catch((error) => {
                context.commit('showFailure',  error.response.data)
            })
        })
    },

};

export default {
    state,
    getters,
    mutations,
    actions,
}