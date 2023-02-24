function init(){
	var regform = document.getElementById("resignform");
	regform.onsubmit = saveData;
	prefillData()

}


function saveData(){
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var Email = document.getElementById("Email").value;
	var phonenumber = document.getElementById("phonenumber").value;
	var age = document.getElementById("age").value;

	sessionStorage.firstname = firstname;
	sessionStorage.lastname = lastname;
	sessionStorage.Email = Email;
	sessionStorage.phonenumber = phonenumber;
	sessionStorage.age = age;


	var occupationArray = document.getElementById("radio_occupation").getElementsByTagName("input");
	var i=0;
	while (i < occupationArray.length) {
		if (occupationArray[i].checked == true) {
			sessionStorage.occupation = occupationArray[i].value;
		}
		i+=1;
	}

	var logicmath = document.getElementById("logicmath").checked;
	var Python = document.getElementById("Python").checked;
	var web = document.getElementById("web").checked;
	var gamepython = document.getElementById("gamepython").checked;
	var datascience = document.getElementById("datascience").checked;
	var ai = document.getElementById("ai").checked;
	var payment = document.getElementById("Payment").value;

	sessionStorage.logicmath = logicmath;
	sessionStorage.Python = Python;
	sessionStorage.web = web;
	sessionStorage.gamepython = gamepython;
	sessionStorage.datascience = datascience;
	sessionStorage.ai = ai;
	sessionStorage.Payment = payment;
}
 
function prefillData() {
	if (sessionStorage.firstname != null) {
		document.getElementById("firstname").value = sessionStorage.firstname;
		document.getElementById("lastname").value = sessionStorage.lastname;
		document.getElementById("Email").value = sessionStorage.Email;
		document.getElementById("phonenumber").value = sessionStorage.phonenumber;
		document.getElementById("age").value = sessionStorage.age;
		switch (sessionStorage.occupation){
			case "highschool":
				document.getElementById("highschool").checked = true;
				break;
			case "University":
				document.getElementById("University").checked = true;
				break;
			case "Working":
				document.getElementById("Working").checked = true;
				break;
			case "Retired":
				document.getElementById("Retired").checked = true;
				break;				
		}
		if (sessionStorage.logicmath == "true") {
			document.getElementById("logicmath").checked = true;
		}
		if (sessionStorage.ai == "true") {
			document.getElementById("ai").checked = true;
		}
		if (sessionStorage.datascience == "true") {
			document.getElementById("datascience").checked = true;
		}
		if (sessionStorage.web == "true") {
			document.getElementById("web").checked = true;
		}
		if (sessionStorage.gamepython == "true") {
			document.getElementById("gamepython").checked = true;
		}
		if (sessionStorage.Python == "true") {
			document.getElementById("Python").checked = true;
		}
		document.getElementById("Payment").value = sessionStorage.Payment;
	}
}




window.onload = init;