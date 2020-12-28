<template>
  <div class="card">
    <div class="container">
      <div class="row">
        <div class="col-8 justify-content-center">{{card.name}}</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "card",
  mounted() {
    let cardId = this.$route.params.cardId;
    this.$store.dispatch("getCard", cardId);
  },
  data() {
    return {};
  },
  computed: {
    Card() {
      return this.$store.currentCard;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>