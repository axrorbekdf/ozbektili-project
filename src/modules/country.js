import CountryService from "@/service/country";
import {getItem} from '@/helpers/persistaneStorage'
import { gettersTypes } from "./types";

const state = {
    isLoading: false,
    countries: null,
    countries_stat: null,
    errors: null,
};

const getters = {
    [gettersTypes.countries]: (state) => {
        return state.countries;
    },
    [gettersTypes.countries_stat]: (state) => {
        return state.countries_stat;
    },
    [gettersTypes.countryError]: (state) => {
        return state.errors;
    },

};


const mutations = {
    countriesStatStart(state){
        state.isLoading = true;
        state.countries_stat = null;
        state.errors = null;
    },
    countriesStatSuccess(state, data){
        state.isLoading = false;
        state.countries_stat = data.result;
    },
    countriesStatFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    },

    countriesStart(state){
        state.isLoading = true;
        state.countries = null;
        state.errors = null;
    },
    countriesSuccess(state, data){
        state.isLoading = false;
        state.countries = data.result;
    },
    countriesFailure(state, data){
        state.isLoading = false;
        state.errors = data.errors
    }
};

const actions = {

    getCountriesStat(context){
        return new Promise((resolve, reject) => {

            context.commit('countriesStatStart');

            CountryService.countriesStat()
            .then(response => {
                context.commit('countriesStatSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('countriesStatFailure', error.response.data)
                reject(error.response.data)
            })
        });
    },

    getCountries(context){
        return new Promise((resolve, reject) => {

            context.commit('countriesStart');

            CountryService.countries()
            .then(response => {
                context.commit('countriesSuccess', response.data)
                resolve(response.data)
            })
            .catch(error => {
                context.commit('countriesFailure', error.response.data)
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