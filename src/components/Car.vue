
<template>
  <div>
    <h1>Car id {{ id }}</h1>


  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$router.currentRoute.params["id"]
    };
  }
};
</script>

<style scoped>
</style>

