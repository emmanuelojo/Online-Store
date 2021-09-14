<template>
  <div>
    <h3>Latest Deals</h3>
    <div class="products-list" v-for="product in getDiscount" :key="product.id">
      <div class="product">
        <h5>{{ product.discount }}%</h5>
        <div>
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
          <p>{{ product.description.substring(0, 50) }}</p>
          <h4>{{ product.price }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getDiscount() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>

<style scoped>
.hero {
  width: 100%;
}

.products-list {
  display: inline-flex;
  justify-content: center;
}
.product {
  height: 430px;
  width: 330px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
}
.product h5 {
  /* display: absolute;
  top: 0;
  left: 0; */
  color: yellow;
  margin-left: -280px;
  /* margin-top: -10%; */
  /* margin-bottom: -50px; */
  /* margin-top: 10px;
  z-index: 1000;
  display: block;
  opacity: 1; */
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
  color: #000;
  font-weight: 500;
  font-size: 30px;
}
#map-marker {
  color: #0d92ac;
}
.product p {
  /* font-size: 20px; */
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