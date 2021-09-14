<template>
  <div v-if="product">
    <h2> {{ product.name }} </h2>
    <div class="card">
      <div class="card-body">
        <img class="w-100" :src="product.image" alt />
        <h3>{{ product.name }}</h3>
        <div class="stars">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <p >{{ product.description }}</p>
        <h4>₦{{ product.price.toFixed(2) }}</h4>
        <button @click="addToCart()">
          <i class="fa fa-shopping-cart"></i> Add To Cart
        </button>
      </div>
    </div>
  </div>

  <div class="noItem" v-else>
    <div class="col-8">
      <h3>No product with that id</h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
    };
  },
  computed: {
    ...mapState("product", ["product"]),
    ...mapGetters({ product: "getSingleProduct" }),
  },
  mounted() {
    console.log(this.id);
    this.$store.commit("setSingleProduct", this.id);
  },
  methods: {
    ...mapActions("product", ["getProduct"]),
    ...mapActions("cart", ["addProductToCart"]),
    addToCart() {
      this.$store.commit("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
h2{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
}
.card {
  height: 650px;
  width: 500px;
  margin: 100px auto;
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
}
.card-body{
  display: grid;
}
.card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  /* padding: 3px; */
  padding-bottom: 25px;
}
.card h3{
  text-align: left;
  margin-bottom: 0;
}
.card .stars{
  margin-top: -5px;
}
.card .stars i{
  font-size: 20px;
  color: orange;
  margin: 3px;
  float: left;
}
.card p{
  text-align: left;
  margin-top: 5px;
}
.card h4{
  text-align: left;
}

.card button {
  margin-top: 25px;
  background: #F68B1E;
  color: #fff;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 20px;
  font-weight: 500;
}
.card button:hover{
  cursor: pointer;
}
.card button i{
  margin-right: 10px;
}

@media screen and (max-width: 450px) {
  .card{
    width: 330px;
    height: 700px;
  }
}
</style>