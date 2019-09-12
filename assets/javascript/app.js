// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCik6HgCBTD5mq18kPLBQ5EOWxsSUGTJ78",
    authDomain: "train-timer-cc9a7.firebaseapp.com",
    databaseURL: "https://train-timer-cc9a7.firebaseio.com",
    projectId: "train-timer-cc9a7",
    storageBucket: "",
    messagingSenderId: "886791668348",
    appId: "1:886791668348:web:666a38b21da435f1af7ff9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var name = '';
var destination = '';
var startTime = '';
var freq = '';

$('#add-train').on('click', function(event) {
    event.preventDefault()

    name = $('#train-name').val().trim();
    destination = $('#destination').val().trim();
    startTime = $('#train-time').val().trim();
    freq = $('#frequency').val().trim();

    console.log(name, destination, startTime, freq);
});

