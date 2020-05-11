<template>
  <div class="lifetracker">
    <div v-for="player in players" :key="player.id"></div>
  </div>
</template>


<script>
export default {
  name: "lifetracker",
  data() {
    return {};
  },
  computed: {
    players() {
      return this.$store.players;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>