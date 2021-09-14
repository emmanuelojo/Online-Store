<template>
  <div>
    <h3>Login Page</h3>
    <section id="firebaseui-auth-container"></section>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  mounted() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // var ui = new firebaseui.auth.AuthUI(auth());
    var uiConfig = {
      signInSuccessUrl: "/profile",
      signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
};
</script>

<style>
</style>