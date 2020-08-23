import Vue from 'vue'
import Vuex from 'vuex'
const mtg = require('mtgsdk')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [{ id: 0, name: "player1", life: 20, counters: 0 }, { id: 1, name: "player2", life: 20, counters: 0 }],
    cards: [],
    currentCard: {},
    hordeDeck: [{ token: true, name: "zombie", cardType: "creature", subtype: "zombie", power: 2, toughness: 2 }],
    hordeField: []

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

    getCards({ commit, dispatch }, cardName) {
      mtg.card.where({ name: cardName })
        .then(results => {
          console.log(results)
          commit('setCards', results)
        })
    },

    getCard({ commit, dispatch }, id) {
      mtg.card.find(id)
        .then(result => {
          commit('setCurrentCard', result)
        })
    }
  },
  modules: {
  }
})
