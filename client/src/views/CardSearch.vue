<template>
  <div class="cardSearch">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <input
            class="form-control"
            type="text"
            placeholder="Ach, run hans it's the...."
            v-model="cardname"
          />
          <button type="submit" class="btn btn-primary" @click="getCards(cardname)">Submit</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12" v-for="card in cards" :key="card.id" >
          <div class="row">
            <div class="col-6">{{card.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "cardSearch",
  data() {
    return {
      cardname: ""
    };
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    }
  },
  methods: {
    getCards(cardname) {
      this.$store.dispatch("getCards", cardname);
    },
    getSelectedCard(id) {
      this.$store.dispatch("getCard", id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>