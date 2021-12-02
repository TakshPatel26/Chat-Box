var firebaseConfig = {
     apiKey: "AIzaSyDCqbRoMK8wX_AR3iU6xCYdca4kn1ect7U",
     authDomain: "chat-box-a8ce8.firebaseapp.com",
     databaseURL: "https://chat-box-a8ce8-default-rtdb.firebaseio.com/",
     projectId: "chat-box-a8ce8",
     storageBucket: "chat-box-a8ce8.appspot.com",
     messagingSenderId: "130656967171",
     appId: "1:130656967171:web:fceca95623ba4873c30c36"
   };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";
function addroom() {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
     purpose: "Adding Room Name"
      });
      localStorage.setItem("Roomname",room_name);
      window.location = "ChatBox_page.html";
}
function getData(){
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "ChatBox_page.html";
}
function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("Roomname");
window.location = "index.html";
}