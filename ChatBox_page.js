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
room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");
console.log("room name "+room_name);
console.log("user name "+user_name);
 function logout(){
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
function send(){
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
document.getElementById("msg").value = "";
}
function getData(){ 
firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
childData = childSnapshot.val(); 
 if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
//Start code
      
//End code
} });  }); }
getData();