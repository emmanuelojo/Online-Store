<template>
  <div class="home">
    <Slider />
    <Categories />
    <ProductList />
    <SpecialDeals />
    <Reviews />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import Categories from '@/components/Categories.vue'
import ProductList from '@/components/ProductList.vue'
import SpecialDeals from '@/components/SpecialDeals.vue'
import Reviews from '@/components/Reviews.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Slider,
    ProductList,
    Categories,
    SpecialDeals,
    Reviews,
    Footer
  }
}
</script>

<style scoped>
.home{
  background: rgb(27, 26, 26);
}
</style>
