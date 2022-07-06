var firebaseConfig = {
      apiKey: "AIzaSyAQrEjPOf-bQSXmKOPO6e5Q3TkY3c1GN98",
      authDomain: "echat-website-edition.firebaseapp.com",
      databaseURL: "https://echat-website-edition-default-rtdb.firebaseio.com",
      projectId: "echat-website-edition",
      storageBucket: "echat-website-edition.appspot.com",
      messagingSenderId: "340073589780",
      appId: "1:340073589780:web:da0aec0a06230656260b01"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "EChat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "EChat_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}