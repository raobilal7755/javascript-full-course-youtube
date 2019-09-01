function myForm(){
	var rado1=document.getElementById('male').checked;
	var rado2=document.getElementById('female').checked;

	if ((rado1=="")&&(rado2=="")) {
		document.getElementById('sms').innerHTML="sir please select anyone";
		return false;
	}
		return true;
	
}