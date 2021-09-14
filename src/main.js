import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/md-dark-indigo/theme.css'

// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGOWOsHO9fo4q7L9QJNbTF4ZGxsYuZYEs",
  authDomain: "onlinestore-fa01d.firebaseapp.com",
  projectId: "onlinestore-fa01d",
  storageBucket: "onlinestore-fa01d.appspot.com",
  messagingSenderId: "648771014648",
  appId: "1:648771014648:web:4cbca00622cfd2ba5bd00d",
  measurementId: "G-SS4NZH2C6X"
};
initializeApp(firebaseConfig);


// const firebaseConfig = {
//   apiKey: "AIzaSyAGOWOsHO9fo4q7L9QJNbTF4ZGxsYuZYEs",
//   authDomain: "onlinestore-fa01d.firebaseapp.com",
//   projectId: "onlinestore-fa01d",
//   storageBucket: "onlinestore-fa01d.appspot.com",
//   messagingSenderId: "648771014648",
//   appId: "1:648771014648:web:4cbca00622cfd2ba5bd00d",
//   measurementId: "G-SS4NZH2C6X"
// };
// firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
