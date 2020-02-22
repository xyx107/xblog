import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import app from "./modules/app";
import user from "./modules/user";

// import login from "./modules/login";
// import common from "./modules/common";

export default new Vuex.Store({
    modules: {
        app,
        user
        // login,
        // common
    }
});
