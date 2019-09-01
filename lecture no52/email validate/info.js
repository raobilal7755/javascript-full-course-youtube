function myForm(){
	var store=document.getElementById('mail').value;

	if (store=="") {
		document.getElementById('sms').innerHTML="sir please fill the field";
		return false;
	}
				// 0<=0
	if (store.indexOf('@')<=0) {
		document.getElementById('sms').innerHTML="sir position of @ will be invalid";
		return false;
	}
					// bilal@gmail.com
	if ((store.charAt(store.length-4)!=".")&&(store.charAt(store.length-3)!=".")) {
		document.getElementById('sms').innerHTML="sir position of dot will be invalid";
		return false;
	}
}