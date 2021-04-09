<template>
  <div class="cardSearch">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <input
            class="form-control"
            type="text"
            placeholder="Ach, run hans it's the...."
            v-model="cardname"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          @click="getCards(cardname)"
        >
          <div class="col-2">Submit</div>
        </button>
      </div>
      <br />
      <div class="row">
        <router-link
          :to="{ name: 'card', params: { cardId: card.id } }"
          class="col-12"
          v-for="card in cards"
          :key="card.id"
        >
          <div class="cardsMain row">
            <div class="col-6 cardsSub">{{ card.name }}</div>
            <div class="col-3 cardsSub">{{ card.types.join() }}</div>
            <div class="col-3 cardsSub">{{ card.setName }}</div>
          </div>
        </router-link>
        <br />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "cardSearch",
  data() {
    return {
      cardname: "",
    };
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
  },
  methods: {
    getCards(cardname) {
      this.$store.dispatch("getCards", cardname);
    },
  },
  components: {},
};
</script>


<style scoped>
.cardsMain {
  border: 2px solid black;
}
.cardsSub {
  border: 1px solid grey;
}
</style>