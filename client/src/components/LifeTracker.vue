<template>
  <div class="lifetracker">
    <div class="container">
      <div class="row">
        <div v-for="player in players" :key="player.id">
          <div class="col-5">
            <div class="row">
              <div class="col-12">{{player.name}}:{{player.health}}</div>
              <div class="col-12">
                <button @click="minusLife(player)">-1</button>
                <button>+1</button>
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
      return this.$store.players;
    }
  },
  methods: {
    minusLife(player) {
      change = down;
      payload = { player, change };
      this.$store.dispatch("adjustLife", payload);
    },
    addLife(player) {}
  },
  components: {}
};
</script>


<style scoped>
</style>