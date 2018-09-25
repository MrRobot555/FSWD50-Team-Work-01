function Info(firstName, secondName, email, phone, message) {
    this.firstName = firstName;
    this.lastName = secondName;
    this.email = email;
    this.phone = phone;
    this.message = message;
}
function getData() {
var x = new Info(document.getElementById("fname").value, document.getElementById("sname").value, document.getElementById("email").value, document.getElementById("phone").value, document.getElementById("message").value);
console.log(document.getElementById("fname").value);
document.write(x);
}

document.getElementById("submit").addEventListener("click", getData);

function allNumbers(num){ 
	var numbers = /^[0-9]+$/;
	if(num.match(numbers))
	{
	return true;
	}
	else
	{
	alert('Must have numeric characters only');
	num.focus();
	return false;
	}
}

function allLetters(let) { 
	var letters = /^[A-Za-z]+$/;
	if(let.match(letters))
	{
	return true;
	}
	else
	{
	alert('Name must have alphabet characters only');
	let.focus();
	return false;
	}
}
function checkBlanks {
if(document.getElementById("fname").value.length==0){
		document.getElementById('err').innerText = "* All fields are mandatory *";
		document.getElementById("fname").focus();
		return false;
	}
else if (document.getElementById("sname").value.length==0){
		document.getElementById('err').innerText = "* All fields are mandatory *";
		document.getElementById("sname").focus();
		return false;
}
else if (document.getElementById("email").value.length==0){
		document.getElementById('err').innerText = "* All fields are mandatory *";
		document.getElementById("email").focus();
		return false;
}
else if (document.getElementById("phone").value.length==0){
		document.getElementById('err').innerText = "* All fields are mandatory *";
		document.getElementById("phone").focus();
		return false;
}

else {
		document.getElementById('err').innerText = "* All fields are mandatory *";
		document.getElementById("message").focus();
		return false;
}
}





