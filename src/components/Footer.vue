<template>
  <div class="hero">
    <div class="links-holder">
      <div class="q-links">
        <h3>Quick Links</h3>
        <div class="links">
          <a href="">Home</a>
          <a href="">Products</a>
          <a href="">Featured</a>
          <a href="">Deals</a>
          <a href="">Reviews</a>
        </div>
      </div>
      <div class="q-links">
        <h3>Extra Links</h3>
        <div class="links">
          <a href="">My Account</a>
          <a href="">My Favourite</a>
          <a href="">My Cart</a>
          <a href="">My Order</a>
        </div>
      </div>
      <div class="q-links">
        <h3>Download Links</h3>
        <div class="links">
          <a href="">Windows Store</a>
          <a href="">Apple Store</a>
          <a href="">Play Store</a>
        </div>
      </div>
      <div class="q-links">
        <h3>Contact Us</h3>
        <div class="links">
          <a href=""> +123-456-789</a>
          <a href="">example@gmail.com</a>
          <a href="">Lagos, Nigeria</a>
        </div>
      </div>
    </div>
    <hr>
    <div class="footer">
      <p> Created by <span> <a href="https://emmanuelojo.github.io/"> 007 </a> </span> | All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  border: 1px solid gray;
  margin: 50px;
  margin-bottom: 0px;
  /* overflow: hidden; */
}
.links-holder{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.q-links{
  margin: 10px 50px;
}
.q-links h3{
  color: goldenrod;
  font-size: 20px;
  margin-top: 20px;
}
.q-links .links{
  display: grid;
}
.q-links .links a{
  text-decoration: none;
  color: gray;
}
hr{
  width: 90%;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  background-color: gray;
}
.footer p{
  color: #f3f3f3;
  padding-top: 20px;
}
.footer p span{
  color: goldenrod;
}
.footer p span a{
  color: goldenrod;
  text-decoration: none;
}
</style>