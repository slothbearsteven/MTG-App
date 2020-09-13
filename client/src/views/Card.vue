<template>
  <div class="card"></div>
</template>


<script>
export default {
  name: "card",
  data() {
    return {};
  },
  computed: {
    card() {
      return this.$store.card;
    },
  },
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>