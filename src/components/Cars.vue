
<template>
  <div>
    <h1>Cars page</h1>

    <ul>
      <router-link
        tag="li"
        v-for="(car, index) in 5"
        :key="index"
        :to="'/car/' + car"
      >
        <a>Car {{car}} </a>
      </router-link>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  filters: {},
  computed: {}
};
</script>

<style scoped>
</style>

