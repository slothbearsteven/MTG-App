<template>
  <div class="cardSearch">
    <div class="container">
      <div class="row"></div>
    </div>
  </div>
</template>


<script>
export default {
  name: "cardSearch",
  data() {
    return {};
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