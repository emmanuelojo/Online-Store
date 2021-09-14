<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-brand">
      <img src="@/assets/logo.png" alt="" srcset="" />
    </div>

    <div class="search-bar">
      <!-- <Search v-model="search" /> -->
      <input
        type="text"
        v-model="search"
        :search="search"
        placeholder="Search ..."
      />
      <i class="fa fa-search"></i>
    </div>

    <div class="icon-btns">
      <i class="fa fa-bars"></i>
      <i class="fa fa-heart"></i>
      <div class="cart">
        <p> {{ cartItemCount }} </p>
        <router-link :to="{ name: 'cart' }" class="router"
              ><i class="fa fa-shopping-cart" id="cart"></i
            ></router-link>
      </div>
      <router-link :to="{ name: 'login' }">
        <i class="fa fa-user"></i>
      </router-link>
    </div>

    
  </nav>
</template>

<script>
// import Search from '@/components/Search.vue'
export default {
  // components: { Search },
  // inject: ['searchName'],
  data() {
    return {
      search: "",
      // search: "",
      // search: this.searchName,
    };
  },
  mounted() {
    console.warn(this.search, "debugginnngggg...");
  },
  computed: {
    cartItemCount() {
      return this.$store.state.cart.length;
    },
  },
  // provide: {
  //   searchName: "Jekon"
  //   // searchName: this.search
  // }
  // provide() {
  //   return{
  //     searchTitle: this.search
  //   }
  // }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.navbar-brand img {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  object-fit: cover;
}
.wishBtn {
  float: right;
  margin-right: 0;
}
#triggerId {
  background: #0d92ac;
  color: #fff;
  border: 2px solid #0d92ac;
}
.search-bar {
  position: relative;
}
.search-bar input[type="text"] {
  border-radius: 20px;
  width: 300px;
  height: 35px;
  border: none;
  padding-left: 15px;
}
.search-bar input::placeholder {
  padding-left: 15px;
}
.search-bar input:focus {
  outline: none;
}
.search-bar i {
  /* position: absolute; */
  margin-left: -30px;
}
.icon-btns{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.icon-btns a {
  text-decoration: none;
  color: #343a40;
}

.icon-btns i {
  padding: 10px;
  background: #fff;
  border-radius: 50%;
  margin: 5px;
  font-size: 15px;
}
.icon-btns i:hover {
  background: #000;
  color: #fff;
  cursor: pointer;
  transition: 0.5s ease;
}
.cart{
  display: flex;
  position: relative;
  /* background: #fff;
  border-radius: 50%; */
}
.cart p{
  position: absolute;
  color: goldenrod;
  font-size: 12px;
  margin-left: 10px;
  /* margin-left: 23px; */
  /* margin-left: 30px; */
  padding-top: 6px;
}
.cart:hover p{
  color: #ffff;
}  
.cart a i{
  padding-top: 12px;
  padding-left: 12px;
}
@media screen and (max-width: 480px) {
  /* .navbar .search-bar{
    width: 30px;
    margin-left: -50px;
    margin-top: 20px;
    margin-right: 30px;
  } */
  .navbar .search-bar input{
    /* width: 30px; */
    width: 130px;
    /* margin-left: -50px;
    margin-top: 20px; */
    margin-left: -5px;
  }
  .navbar .search-bar i{
    /* margin: auto; */
    /* margin-left: 2px; */
    /* padding-left: 5px; */
    /* margin-left: 20px; */
    margin-left: -20px;
  }
}
</style>