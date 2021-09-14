<template>
  <div class="hero">
    <h2>Customers'  <span> reviews </span> </h2>
    <div class="reviews">
      <div v-for="review in reviews" :key="review.id">
        <div class="card">
          <div class="ratings">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <p> {{ review.description }} </p>
          <div class="reviewer">
            <img :src="review.image" alt="">
            <div class="reviewer-details">
              <h4> {{ review.name }} </h4>
              <h5> {{ review.title }} </h5>
            </div>
          </div>
          
          <!-- <Rating :modelValue="review.ratings" :stars="5" :readonly="true" />
          
          <Rating
            :modelValue="5"
            :readonly="true"
            :stars="10"
            :cancel="false"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Rating from "primevue/rating";

export default {
  data() {
    return {
      val1: null,
      val2: 3,
    };
  },
  // components: { Rating },
  computed: {
    ...mapGetters({ reviews: "getReviews" }),
  },
};
</script>

<style scoped>
.reviews{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.hero h2{
  text-transform: uppercase;
  text-align: left;
  color: #fff;
  margin-left: 50px;
}
.hero h2 span {
  color: goldenrod;
}
.card {
  height: 330px;
  width: 330px;
  margin: 20px;
  border: 1px solid gray;
  background: #000;
  border-radius: 5px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
}
.card .ratings{
  text-align: left;
  margin: 20px ;
}
.card .ratings i{
  color: goldenrod;
  margin: 2px;
}
.card p{
  color: gray;
  text-align: left;
  margin-left: 20px;
}
.reviewer{
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin: 20px;
}
.reviewer img{
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
}
.reviewer-details {
  display: grid;
  margin-left: 10px;
}
.reviewer-details h4{
  margin-top: 10px;
  color: #fff;
  /* font-size: 17px; */
}
.reviewer-details h5{
  color: gray;
  font-size: 14px;  
  margin-left: 15px;
}
</style>