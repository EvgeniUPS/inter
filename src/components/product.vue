<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-media
            
            >
            </v-card-media>
          <v-card-text></v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning">Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    name() {
      const id = this.id;
      return this.$store.getters.adById(id);
    }
  }
};
</script>

