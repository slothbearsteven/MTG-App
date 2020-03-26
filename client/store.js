import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [{ name: "player1", life: 20, counters: 0 }, { name: "player2", life: 20, counters: 0 }],
    cards: [],
    currentCard: {}
  },
  mutations: {
    setPlayer(state, payload) {
      state.players[payload.x] = payload.player
    },
    setCards(state, cards) {
      state.cards = cards
    },
    setCurrentCard(state, card) {
      state.currentCard = card
    }
  },
  actions: {
  },
  modules: {
  }
})
