function myForm(){
	var myReg=/^[a-z,0-9]+$/;
	var store=document.getElementById('txt').value;

	if (store=="") {
		document.getElementById('ErrorSms').innerHTML="Sir Please fill the field";
		return false;
	}

	if (store.length<8) {
		document.getElementById('ErrorSms').innerHTML="Sir Character must be 8";
		return false;
	}

	if (store.length>16) {
		document.getElementById('ErrorSms').innerHTML="Sir charcter must be less then 16";
		return false;
	}

	if (store.match(myReg)) 
		true;
		else{
			document.getElementById('ErrorSms').innerHTML="Sir only alphabatic key word are allowed ";
			return false;
		}
	
}