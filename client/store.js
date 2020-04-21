import Vue from 'vue'
import Vuex from 'vuex'
const mtg = require('mtgsdk')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [{ number: 0, name: "player1", life: 20, counters: 0 }, { number: 1, name: "player2", life: 20, counters: 0 }],
    cards: [],
    currentCard: {}
  },
  mutations: {
    setPlayer(state, payload) {
      state.players[payload.number] = payload.player
    },
    setCards(state, cards) {
      state.cards = cards
    },
    setCurrentCard(state, card) {
      state.currentCard = card
    }
  },
  actions: {
    adjustLife({ commit, dispatch }, payload) {
      switch (payload.change) {
        case "up": payload.player.life += 1
          commit("setPlayer", payload)
          break;
        case "down": payload.player.life -= 1
          commit("setPlayer", payload)
          break;

        default:
          break;
      }
    },

    getcards({ commit, dispatch }, cardName) {
      mtg.card.where({ name: cardName })
        .then(results => {
          console.log(results)
          commit('setCards', results)
        })
    }
  },
  modules: {
  }
})
