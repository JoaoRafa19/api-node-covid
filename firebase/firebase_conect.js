const firebase = require("firebase");


const app = firebase.initializeApp({
    apiKey: "AIzaSyCW8hLY3qbDLF5HMSFHClEvJvfkSmKAb7k",
    authDomain: "covid19status-7d37e.firebaseapp.com",
    databaseURL: "https://covid19status-7d37e-default-rtdb.firebaseio.com",
    projectId: "covid19status-7d37e",
    storageBucket: "covid19status-7d37e.appspot.com",
    messagingSenderId: "757446432408",
    appId: "1:757446432408:web:bdff8186e2a1c6978aa2ed",
    measurementId: "G-KQMQEDR0QK"
});

module.exports = app;
