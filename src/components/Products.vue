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
      <input type="text" id="productId" class="form-control" v-model.number="productId">
    </div>

    <button class="btn btn-success" @click="createProduct">Создать продукт</button>
    <button class="btn btn-primary" @click="loadProducts">Показать продукты</button>

    <hr>  
    <ul class="list-group">
      <li 
      class="list-group-item"
      v-for="product of products"
      :key="product.id"
      >
        <strong> {{product.factory}} - {{product.model}} - {{product.productId}} </strong>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {
      productFactory: "",
      productModel: "",
      productId: 2018,
      products: []
    };
  },
  methods: {
    createProduct() {
      console.log("create Product");
      const product = {
        factory: this.productFactory,
        model: this.productModel,
        productId: this.productId
      };
      this.$http
        .post("http://localhost:3000/products", product)
        .then(response => {
          // console.log(response);
          return response.json();
        })
        .then(newProduct => {
          console.log(newProduct);
        });
    },
    loadProducts() {
      this.$http
        .get("http://localhost:3000/products")
        .then(response => {
          // console.log(response);
          return response.json();
        })
        .then(products => {
          this.products = products;
          // console.log(products);
        });
    }
  }
};
</script>




//  npm install -g json-server
//  npm install --save-dev json-server

