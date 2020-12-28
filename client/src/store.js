import Vue from 'vue'
import Vuex from 'vuex'
const mtg = require('mtgsdk')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [{ id: 0, name: "player1", life: 20, counters: 0 }, { id: 1, name: "player2", life: 20, counters: 0 }],
    cards: [],
    currentCard: { card: { name: "hh" } },
    hordeDeck: [{ token: true, name: "Zombie", cardType: "creature", subtype: "zombie", power: 2, toughness: 2 }, { token: true, name: "Undead Golem", cardType: "creature", subtype: "zombie", power: 4, toughness: 4 }, { token: false, name: "The Horde's Hunger", cardtype: "instant", text: "Mill the top three cards of your library. Zombies you control get +1/+1 and haste until end of turn", modifier: 1, range: "each", mill: 3 }, {}],
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
          console.log(result.card.name)
          commit('setCurrentCard', result)
        })
    }
  },
  modules: {
  }
})
