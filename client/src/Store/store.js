import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        componentState: 'HomeText',
        componentStateEingeloggt: 'Suchfeld'
    },

    mutations: {
        changeComponent(state, payload) {
            state.componentState = componentState
            },

            changeComponentEingeloggt(state, payload) {
                state.componentStateEingeloggt = componentStateEingeloggt
            }

    },

    getters: {
      componentState:  state => state.componentState,
      componentStateEingeloggt: state => state.componentStateEingeloggt
    }
})
