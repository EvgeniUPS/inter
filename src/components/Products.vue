<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="factory">Product Factory</label>
      <input type="text" id="factory" class="form-control" v-model.trim="productFactory">
    </div>

    <div class="form-group">
      <label for="model">Product Model</label>
      <input type="text" id="model" class="form-control" v-model.trim="productModel">
    </div>

    <div class="form-group">
      <label for="id">Product Id</label>
      <input type="text" id="id" class="form-control" v-model.number="productId">
    </div>

    <button class="btn btn-success" @click="createProduct">Создать продукт</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productFactory: "",
      productModel: "",
      productId: 2018
    };
  },
  methods: {
    createProduct() {
      console.log("create Product");
    }
  }
};
</script>




//  npm install -g json-server
//  npm install --save-dev json-server

