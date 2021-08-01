var firebaseConfig = {
    apiKey: "AIzaSyB7DwKlxGvckWScMCeooXCjc4uOySLGn6I",
    authDomain: "let-s-chat-2dc93.firebaseapp.com",
    databaseURL: "https://let-s-chat-2dc93-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-2dc93",
    storageBucket: "let-s-chat-2dc93.appspot.com",
    messagingSenderId: "51185969473",
    appId: "1:51185969473:web:c4eebc2d6fd840b38a59c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
   }
   