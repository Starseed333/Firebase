console.log("inside js"); 

   var config = {
    apiKey: "AIzaSyChnLgAX-b28mP9HzzNr-Eto17NFBifbV0",
    authDomain: "codersbay-165d0.firebaseapp.com",
    databaseURL: "https://codersbay-165d0.firebaseio.com",
    projectId: "codersbay-165d0",
    storageBucket: "",
    messagingSenderId: "378136436390"
  };
  firebase.initializeApp(config);






var database = firebase.database();

// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
//var database = ...


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the local data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
    highBidder = snapshot.val().highBidder;
    highPrice = snapshot.val().highPrice;
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);
    // Set the local variables for highBidder equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
  var highPrice = initialBid;
  var highBidder = initialBidder;


    // change the HTML to reflect the newly updated local values (most recent information from firebase)


    // Print the local data to the console.


  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    $("highest-bidder").html(highBidder);
    $("highest-price").html(highPrice);
    // Change the HTML to reflect the local value in firebase


    // Print the local data to the console.


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  var bidderName = $("#bidder-name").val().trim();
  var bidderPrice = parseInt$("#bidder-price").val().trim();



  // Get the input values


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
