function myForm(){

	var myReg=/^[a-b,A-B]+$/;
	var store=document.getElementById('txt').value;

	if (store=="") {
		document.getElementById('ErrorSms').innerHTML="Sir please fill the field";
		return false;
	}

	if (store.length<8) {
		document.getElementById('ErrorSms').innerHTML="Sir username must be 8 Character";
		return false;
	}

	if (store.length>16) {
		document.getElementById('ErrorSms').innerHTML="Sir username must be less then 16 Character";
		return false;
	}

	if (store.match(myReg)) 
		true;
		else{
			document.getElementById('ErrorSms').innerHTML="Sir alphabatic key word are allowed";
		return false;
		}
	
}