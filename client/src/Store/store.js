import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        componentState: 'HomeText',
        componentStateEingeloggt: 'Suchfeld',
        eingeloggt: false
    },

    mutations: {
        changeComponent(state, payload) {
            state.componentState = componentState
            },

            changeComponentEingeloggt(state, payload) {
                state.componentStateEingeloggt = componentStateEingeloggt
            },

            changeEingeloggt(state, payload) {
                state.eingeloggt = eingeloggt
            }


    },

    getters: {
      componentState:  state => state.componentState,
      componentStateEingeloggt: state => state.componentStateEingeloggt,
      eingeloggt: state => state.eingeloggt
    }
})
