<template>
  <div class="hero">
    <h3><span> Featured </span> Products</h3>
    <!-- <h4> Provide/Inject {{  searchTitle }} </h4>
    <h4> Provide/Inject {{  searchName}} </h4> -->
    <div class="noItem" v-if="!getProducts.length">
      <div class="col-8">
        <h3>No product with that name</h3>
      </div>
    </div>
    <div v-else class="products-list">
      <div v-for="product in getProducts" :key="product.id">
        <div class="product">
          <img :src="product.image" alt="image" />
          <router-link :to="{ name: 'product', params: { id: product.id } }">{{
            product.name
          }}</router-link>
          <div class="ratings">
            <!-- <Rating
              :modelValue="product.ratings"
              :readonly="true"
              :stars="5"
              :cancel="false"
              class="p-rating"
              id="ratingNumber"
            /> -->
          </div>
          <p>{{ product.description.substring(0, 100) }}</p>
          <div class="price-cart">
            <h4>₦ {{ product.price }}</h4>
            <i
              @click="addToCart(product)"
              class="fa fa-shopping-cart"
              id="cart-Icon"
            ></i>
          </div>
        </div>
      </div>
      <LatestDeals />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import { mapGetters } from 'vuex'
// import LatestDeals from '@/components/LatestDeals.vue'

export default {
  name: 'ProductList',
  // components: { LatestDeals },
  // props: {
  //   modelValue: String,
  // },
  // inject: ['searchName'],
  // props: {
  //   search: String
  // },
  props: ["search"],
  // data() {
  //   return {
  //     search: "",
  //   };
  // },
  mounted(){
    console.log(this.search, "in product list")
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },

    filteredProducts() {
      return this.getProducts.filter((product) => {
        return product.name.toLowerCase().includes(this.modelValue.toLowerCase());
      });
    },

    // filteredProducts() {
    //   return console.log("Hi");
    //   // return this.getProducts.filter((product) => {
    //   //   return product.name.toLowerCase().includes(search.toLowerCase());
    //   // });
    // },
    

    // filteredProducts() {
    //   return this.getProducts.filter((product) => {
    //     return product.name.toLowerCase().includes(this.search.toLowerCase());
    //   });
    // },
  },
  methods: {
    ...mapActions("product", ["addToCart"]),
    addToCart(product) {
      this.$store.commit("addProductToCart", {
        product: product,
        quantity: 1,
      });
    },
  },
};
</script>

<style scoped>
.hero {
  width: 100%;
}
.hero h3 {
  text-transform: uppercase;
  color: #fff;
  text-align: left;
  margin-top: 50px;
  margin-left: 50px;
}
.hero h3 span {
  color: goldenrod;
}
.products-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
}
.product {
  height: 430px;
  width: 330px;
  margin: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
}
.product img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
  padding-bottom: 25px;
}

.product a {
  text-decoration: none;
  text-align: left;
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  padding-left: 15px;
}
#map-marker {
  color: #0d92ac;
}
.product p {
  font-size: 14px;
  color: #eeebeb;
  padding-left: 15px;
}
.product h4 {
  font-size: 20px;
  color: goldenrod;
  padding-left: 15px;
}
.p-rating .p-rating-icon.pi-star {
  color: green;
  font-size: 14px;
}
.p-rating,
.p-rating-star,
.p-rating-icon.pi-star,
.ratingNumber {
  color: gold;
  font-size: 14px;
}
.btns {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#btn {
  background: #0d92ac;
  color: #fff;
  border: 2px solid #0d92ac;
  margin: 20px 10px;
}
.price-cart{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* margin: auto; */
}
.price-cart h4{
  margin-top: 5px;
}
#cart-Icon {
  /* margin-left: 20px; */
  margin-right: 20px;
  color: #ffff;
  background: goldenrod;
  padding: 10px;
  border-radius: 5px;
}
#cart-Icon:hover {
  cursor: pointer;
}
.card {
  width: 500px;
  margin: auto;
}
input[type="text"] {
  width: 80vw;
  padding: 7px 20px;
  margin: 20px 0 50px 0;
  box-sizing: border-box;
  border: 2px solid #000;
  border-radius: 5px;
}
input[type="text"]:focus {
  border-radius: 5px;
  border: 2px solid #000;
}
.noItem {
  display: flex;
  justify-content: center;
  margin: 150px auto;
}
@media screen and (max-width: 489px) {
  .p-formgroup-inline .p-field {
    margin-bottom: 1em !important;
  }
  .schedule-flight {
    width: 330px;
    margin: auto;
  }
  .card {
    width: 330px;
    margin-left: 5px auto;
    margin-right: 5px auto;
  }
}
</style>