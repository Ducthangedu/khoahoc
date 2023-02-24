function init(){
	loadData();
	var cancelButton = document.getElementById("cancelButton");
	cancelButton.onclick = cancel;

}	



function cancel(){
	window.location = "resign.html";
}

function loadData(){
	totalPrice = 0;
	var name = document.getElementById("confirm_name");
	var email = document.getElementById("confirm_email");
	var phone = document.getElementById("confirm_number");
	var age = document.getElementById("confirm_age");
	var occupation = document.getElementById("occupation");
	var courses = document.getElementById("course");
	var cfPayment = document.getElementById("payment");
	var total = document.getElementById("confirm_total");



	name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
	email.textContent = sessionStorage.Email;
	age.textContent = sessionStorage.age;
	phone.textContent = sessionStorage.phonenumber;
	occupation.textContent = sessionStorage.occupation;
	cfPayment.textContent = sessionStorage.Payment;

	


	var yourScourses = ""
		if (sessionStorage.logicmath == "true") {
			totalPrice += 449/23;
			yourScourses += "logicmath" + ","
		}
		if (sessionStorage.Python == "true") {
			totalPrice += 799/23;
			yourScourses += "Python" + ","
		}
		if (sessionStorage.web == "true") {
			yourScourses += "web" + ","
		}
		if (sessionStorage.gamepython == "true") {
			yourScourses += "gamepython" + ","
		}
		if (sessionStorage.datascience == "true") {
			yourScourses += "datascience" + ","
		}
		if (sessionStorage.ai == "true") {
			yourScourses += "ai" + ","
		}
		yourScourses = yourScourses.substring(0, yourScourses.length -1);
		courses.textContent = yourScourses;
		total.textContent =totalPrice.toFixed(0) + " USD";

}






window.onload = init;