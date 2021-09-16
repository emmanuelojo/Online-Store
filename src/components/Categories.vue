<template>
  <div class="main">
    <h3>Shop by <span> category </span></h3>
    <div class="hero">
      <div v-for="item in category" :key="item.id">
        <div class="category-card">
          <img :src="item.image" alt="category" srcset="" />
          <div class="card-details">
            <h4>{{ item.discount }}</h4>
            <h2>{{ item.name }}</h2>
            <a href=""> Shop now </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vue'

export default {
  computed: {
    // ...mapGetters(['getCategories']),
    // ...mapGetters({category: 'getCategories'})
    category() {
      return this.$store.getters.getCategories;
    },
  },
};
</script>

<style scoped>
.main {
  width: 90%;
  /* margin: auto; */
}

h3 {
  margin-top: 50px;
  margin-left: 45px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
}
h3 span {
  color: goldenrod;
}

.hero {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* .hero .card-holder {
  display: flex;
} */
.category-card {
  width: 500px;
  height: 300px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  margin: 30px 10px 30px 0;
}
.category-card img {
  width: 500px;
  height: 300px;
  object-fit: cover;
}
.category-card .card-details {
  position: absolute;
  text-align: left;
  margin-left: 20px;
  margin-top: 100px;
}

.category-card .card-details h4 {
  text-transform: capitalize;
  color: goldenrod;
}

.category-card .card-details h2 {
  text-transform: uppercase;
  color: gray;
}

.category-card .card-details a {
  text-decoration: none;
  text-transform: capitalize;
  color: #000;
  background: #fff;
  padding: 7px 20px;
  border-radius: 15px;
}
@media screen and (max-width: 480px) {
  .main{
    display: grid;
    width: 100%;
  }
  .hero{
    display: grid;
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
  .category-card{
    width: 320px;
  }
  .category-card img {
    width: 320px;
  }
}
</style>