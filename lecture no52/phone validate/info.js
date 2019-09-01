function myForm(){
	var store=document.getElementById('phone').value;

	if (store=="") {
		document.getElementById('sms').innerHTML="sir please fill the field";
		return false;
	}

	if (store.length<11) {
		document.getElementById('sms').innerHTML="sir phone no must be 11 digit";
		return false;
	}

	if (store.length>11) {
		document.getElementById('sms').innerHTML="sir phone no must be 11 digit";
		return false;
	}

	if (isNaN(store)) {
		document.getElementById('sms').innerHTML="sir only number are  allowed";
		return false;
	}

	if (store.charAt(0)!=0) {
		document.getElementById('sms').innerHTML="sir phone no start only 0";
		return false;
	}


}