function myForm(){
	var store=document.getElementById('pass1').value;
	var store1=document.getElementById('pass2').value;


	if (store=="") {
		document.getElementById('sms1').innerHTML='Sir please fill the field';
		return false;
	}

	if (store.length<8) {
		document.getElementById('sms1').innerHTML='Sir charater must be  8';
		return false;
	}

	if (store.length>16) {
		document.getElementById('sms1').innerHTML='Sir charcter must be less then 16';
		return false;
	}

	if (store!=store1) {
		document.getElementById('sms2').innerHTML='Sir password not match';
		return false;
	}
}