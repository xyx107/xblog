import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
Vue.use(Vuex);

import app from "./modules/app";
import user from "./modules/user";

export default new Vuex.Store({
    modules: {
        app,
        user,
        getters
        // login,
        // common
    }
});
