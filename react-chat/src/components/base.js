import Rebase from 're-base' ; 

// firebase.auth().signInAnonymously().catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     var isAnonymous = user.isAnonymous;
//     var uid = user.uid;
//     // ...
//   } else {
//     // User is signed out.
//     // ...
//   }
//   // ...
// });

const base = Rebase.createClass({
	apiKey: "AIzaSyBRCwR8wICi1tCVrfp4UK1wXLSLy5xDFJI",
    authDomain: "react-chat-d6730.firebaseapp.com",
    databaseURL: "https://react-chat-d6730.firebaseio.com",
    // storageBucket: "react-chat-d6730.appspot.com",
    // messagingSenderId: "359768761594"
});



export default base;


