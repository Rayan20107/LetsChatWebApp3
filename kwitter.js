function addUser()
{
   username=document.getElementById("username").value;
   localStorage.setItem("usernameofperson", username);
   window.location="kwitter_room.html";
}