<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar },
  provide: {
    searchName: "code"
    // searchName: this.search
  }
}
</script>

<style lang="scss">
*, body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// #nav {
//   // padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
