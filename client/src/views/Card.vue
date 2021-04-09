<template>
  <div class="card">
    <div class="container">
      <div class="row">
        <div v-if="card == ''" class="col-8 justify-content-center">
          Please wait as we use a fetch spell
        </div>
        <div v-else>
          <div class="col">{{ card.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  //need to create reactivity
  // var vm = new Vue({
  // data: {
  //     // declare message with an empty value
  //     message: ''
  //   },
  //   template: '<div>{{ message }}</div>'
  // })
  // // set `message` later
  // vm.message = 'Hello!'
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