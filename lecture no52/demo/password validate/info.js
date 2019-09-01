function myForm(){
	var store=document.getElementById('pass1').value;
	var store1=document.getElementById('pass2').value;

	if (store=="") {
		document.getElementById('ErrorSms').innerHTML="Sir please fill the field";
		return false;
	}

	if (store.length<8) {
		document.getElementById('ErrorSms').innerHTML="Sir password must be 8 character";
		return false;
	}

	if (store.length>16) {
		document.getElementById('ErrorSms').innerHTML="Sir password must be less then 16 character";
		return false;
	}

	if (store!=store1) {
		document.getElementById('ErrorSms').innerHTML="Sir password are not match";
		return false;
	}
}