<template>
  <div class="hero">
    <h3>Login</h3>
    <form action="" @submit.prevent="login">
      <label for="">Username</label>
      <input type="text" v-model="username" placeholder="Username" required>
      <label for="">Password</label>
      <input type="password" v-model="password" name="" id="" placeholder="Password"  required>
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
// import { mapActions } from 'vuex'
export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const login = () => {
      console.log(username, password)
      console.warn("login now")
      // const result =  fetch('/users.json');
      // const verifyUser =  result.json();
      // return verifyUser.find( user => user.password === password.value && user.username === username.value)

    };

    // const computed = () => {
    //   ...mapActions(['login'])
    // }
    return { login, username, password }
  },
  // methods:{
  //   login(){
  //     console.warn("login")
  //   }
  // }
}
</script>

<style scoped>
.hero{
  display: grid;
  justify-content: center;
}

h3{
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
}

form{
  display: grid;
  justify-content: center;
}
form label{
  text-align: left;
  margin-top: 30px;
}
form input[type="submit"]{
  background: green;
  color: white;
  border: none;
  outline: none;
  margin-top: 30px;
  padding: 10px 20px;
}
</style>