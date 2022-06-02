import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfi2sFnMAceWr0lwqka3L4MZnKIIvUT80",
    authDomain: "sae203-chamberlin.firebaseapp.com",
    projectId: "sae203-chamberlin",
    storageBucket: "sae203-chamberlin.appspot.com",
    messagingSenderId: "264791995794",
    appId: "1:264791995794:web:809ccec908e2b0010a3d4b"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
