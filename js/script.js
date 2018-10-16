
var mainButton = document.getElementById('button');

console.log(mainButton);

function checkEvent(event) {
 event.preventDefault();
 
 var name = document.getElementById('name');
 var valueName = name.value;

 var email = document.getElementById('email');
 var valueEmail = email.value;

 if (valueName !== "" && valueEmail != ""){
 	name.style.display = "none"; 
 	email.style.display = "none"; 
 	button.style.display = "none"; 
 	var message = document.getElementById('message');
 	message.style.display = "block";
 }
 if (valueName === ""){
 	name.style.border = "1px solid red"; 
 }
 else {
 	name.style.border = "1px solid gray"; 
	email.style.border = "1px solid gray"; 
 }
 if (valueEmail === ""){
 	email.style.border = "1px solid red"; 
	
 }
}


mainButton.addEventListener('click', checkEvent);