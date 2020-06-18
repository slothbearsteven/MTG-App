<template>
  <div class="home">
    <lifetracker />
  </div>
</template>

<script>
import lifetracker from "../components/LifeTracker.vue";
export default {
  name: "Home",
  components: { lifetracker }
};
</script>
