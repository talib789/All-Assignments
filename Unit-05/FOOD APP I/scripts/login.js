// import data from navbar.js for appeding navbar on index.html page
import navbar from "../components/navbar.js"
const nav = document.querySelector('#navbar');
nav.innerHTML = navbar()