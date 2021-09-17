<template>
  <div class="hero">
    <h2>special <span> deal </span> </h2>
    <hr>
    <div class="deal">
      <div class="deal-info">
        <p>up to 50% off</p>
        <h3>Deal of the day</h3>
        <div id="countdown">
          <ul>
            <li><span id="days"></span>days</li>
            <li><span id="hours"></span>Hours</li>
            <li><span id="minutes"></span>Minutes</li>
            <li><span id="seconds"></span>Seconds</li>
          </ul>
        </div>
        <a href=""> Shop Now </a>
      </div>
      <div class="deal-img">
        <img src="@/assets/images/sneakers2.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      let salesDay = "Dec 25, 2021 00:00:00",
        countDown = new Date(salesDay).getTime(),
        x = setInterval(()=> {
          let now = new Date().getTime(),
            distance = countDown - now;

          (document.getElementById("days").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

            headline.innerText = "It's my salesDay!";
            countdown.style.display = "none";
            content.style.display = "block";

            clearInterval(x);
          }
          //seconds
        }, 0);
    })();
  },
};
</script>

<style scoped>
h2{
  color: #fff;
  text-transform: uppercase;
  text-align: left;
  margin-top: 50px;
  padding-left: 50px;
}
h2 span{
  color: goldenrod;
}
hr{
  color: gray;
}
.deal {
  border: 1px solid gray;
  background: #000;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 50px 50px 50px; 
}
.deal-info{
  margin: auto;
  width: 60%;
}
.deal-info p{
  text-transform: capitalize;
  color: goldenrod;
}

.deal-info h3{
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 30px;
}

li {
  display: inline-block;
  font-size: 12px;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
}

li span {
  display: block;
  font-size: 35px;
  color: goldenrod;
}
.deal-info a {
  color: #000;
  background: #fff;
  padding: 7px 15px;
  border-radius: 20px;
  text-decoration: none;
}
.deal-img{
  width: 40%;
}
.deal-img img{
  height: 500px;
  width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 480px) {
  .deal{
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
  .deal-info p{
    margin-top: 20px;
  }
  .deal-img{
    width: 320px;
  }
  .deal-img img{
    margin-top: 20px;
    width: 320px;
    height: 250px;
    object-fit: cover;
  }
}
@media screen and (width: 768px) {
  .deal-info p{
    margin-top: 40px;
  }
  
  .deal-img img{
    width: 100%;
    object-fit: cover;
  }
}
</style>