<template>
  <div class="hero">
    <div class="offer">
      <h3>Special Offer</h3>
      <span>Sale up to <br> 50% off</span>
      <a href=""> Shop Now</a>
    </div>
    <div class="img-holder">
      <img src="../assets/images/shirt2.jpg" alt="offers" srcset="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero{
  display: flex;
  justify-content: space-around;
}
.offer{
  display: flex;
  flex-direction: column;
  margin: auto;
}
.offer h3{
  font-weight: bold;
  color: goldenrod;
}

.offer span {
  font-size: 40px;
  color: #fff;
}
.offer a {
  text-decoration: none;
  color: #000;
  background: #fff;
  border: none;
  border-radius: 20px;
  padding: 7px ;
  font-weight: bold;
}
.img-holder{
  padding: 50px;
}
@media screen and (max-width: 480px) {
  .hero{
    display: grid;
  }
  .offer{
    margin-top: 30px;
  }
}
</style>