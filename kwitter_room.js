var firebaseConfig = {
      apiKey: "AIzaSyBvKqBxVeU8WoGmWOtMTXRipYWujs70kxY",
      authDomain: "kwitter-14796.firebaseapp.com",
      databaseURL: "https://kwitter-14796-default-rtdb.firebaseio.com",
      projectId: "kwitter-14796",
      storageBucket: "kwitter-14796.appspot.com",
      messagingSenderId: "270155104098",
      appId: "1:270155104098:web:1d6317e4ac1403342d763b",
      measurementId: "G-L9NT7HP4WW"
    };
      firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+ Room_names +"</div> <hr>";
       document.getElementById("output").innerHTML += row;
    });
 });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}