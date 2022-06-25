
const firebaseConfig = {
      apiKey: "AIzaSyBRGftMmC-3to41nNWxY_x3SfNu8mhsUwc",
      authDomain: "chat-app-f21f1.firebaseapp.com",
      databaseURL: "https://chat-app-f21f1-default-rtdb.firebaseio.com",
      projectId: "chat-app-f21f1",
      storageBucket: "chat-app-f21f1.appspot.com",
      messagingSenderId: "77874423879",
      appId: "1:77874423879:web:b7ce51706fe299eff7a962",
      measurementId: "G-7H04QYH3EQ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
