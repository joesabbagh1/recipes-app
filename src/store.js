import Vue from 'vue'
import Vuex from 'vuex'
import initialRecipes from './recipes'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        recipes: initialRecipes
    }
})