import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, USER_REQUEST } from './storenames.js'
Vue.use(Vuex);

const state = {
    token: localStorage.getItem('user-token') || '',
    status: '',
}

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
}

const mutations = {
    [AUTH_REQUEST]: ( state ) => { state.status = 'loading' },
    [AUTH_SUCCESS]: ( state, token ) => 
    {
        state.status = 'success'
        state.token = token
    },
    [AUTH_ERROR]:   ( state ) => { state.status = 'error' },
}

const actions =  {
    [AUTH_REQUEST]: ({commit, dispatch}, user ) => {
        const authURL = require('./router/api').publicURLS.auth;
        return new Promise( ( resolve, reject ) => {
            commit(AUTH_REQUEST);
            axios({ url: authURL, data: user, method: 'POST' })
                .then( res => {
                    const token = res.data.token;
                    localStorage.setItem('user-token', token);
                    commit(AUTH_SUCCESS, token);
                    dispatch(USER_REQUEST);
                    resolve( res );
                })
                .catch( err => {
                    commit( AUTH_ERROR, err);
                    localStorage.removeItem('user-token');
                    reject(err);
                })

        })
    }
}


const store = new Vuex.Store({
    state: state, 
    getters: getters,
    mutations: mutations,
    actions: actions,
  });
  
  export default store;