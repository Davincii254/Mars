
var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "8RVaXYWs7HPc5GqaGjAhbPrTREKfzezB4YslyNTp";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    document.getElementById("title").textContent = response.title;
    document.getElementById("date").textContent = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").textContent = response.explanation;
  }
})

function myFun() {
  document.getElementById("demo").innerHTML = "Thanks for the click!";
}


var myFunction= function(){
  var username= document.getElementById("name");
  var email=document.getElementById("email");
  var message=document.getElementById("message");

  if(username.value==="" || username.value===null) {
      return false;
  } else if (email.value==="" || email.value===null){
      return false;
  } else if (message.value==="" || message.value===null){
      return false;
  } else {
      alert(" Thank you "  + username.value +  "for reaching out. Message received.");
  };

};
