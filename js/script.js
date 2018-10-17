
var mainButton = document.getElementById('button');
var i = 0;

function checkFields() {
 
 var name = document.getElementById('name');
 var email = document.getElementById('email');
 var valueName = name.value;
 var valueEmail = email.value;

	if ( valueName.length != 0 && valueEmail.length != 0 && i == 0 ) {
		mainButton.classList.toggle("active");
		i = 1;
	}
}

function checkEvent(event) {
 event.preventDefault();
 
 var name = document.getElementById('name');
 var email = document.getElementById('email');
 var valueName = name.value;
 var valueEmail = email.value;
 
 if (valueName !== "" && valueEmail != "" && mainButton.classList.contains('active')){
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