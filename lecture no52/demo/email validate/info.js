function myForm(){
	var store=document.getElementById('mail').value;

	if (store=="") {
		document.getElementById('sms').innerHTML="sir please fill the field";
		return false;
	}


	if (store.indexOf('@')<=0) {
		document.getElementById('sms').innerHTML="Sir position of @ will be invalid";
		return false;
	}

	if ((store.charAt(store.length-4)!=".")&&((store.charAt(store.length-3)!="."))) {
		document.getElementById('sms').innerHTML="Sir position of dot will be no correct";
		return false;
	}
}