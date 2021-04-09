<template>
  <div class="lifetracker">
    <div class="container">
      <div class="row justify-content-around">
        <div v-for="player in players" :key="player.id">
          <div class="col-6">
            <div class="row">
              <div class="col-12 text-center">
                <h5>{{ player.name }}:{{ player.life }}</h5>
              </div>
              <div class="row justify-content-evenly">
                <div class="col-5 text-center">
                  <button
                    class="btn-dark spaced text-center"
                    @click="minusLife(player)"
                  >
                    -1
                  </button>
                </div>
                <div class="col-5">
                  <button
                    class="btn-dark spaced text-center"
                    @click="addLife(player)"
                  >
                    +1
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      return this.$store.state.players;
    },
  },
  methods: {
    minusLife(player) {
      let change = "down";
      let payload = { player, change };
      this.$store.dispatch("adjustLife", payload);
    },
    addLife(player) {
      let change = "up";
      let payload = { player, change };
      this.$store.dispatch("adjustLife", payload);
    },
  },
  components: {},
};
</script>


<style scoped>
.spaced {
  margin-left: 10px;
}
</style>