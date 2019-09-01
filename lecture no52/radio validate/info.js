function myForm(){
	var rado1=document.getElementById('rado1').checked;
	var rado2=document.getElementById('rado2').checked;

	if ((rado1=="")&&(rado2=="")) {
		document.getElementById('sms').innerHTML="sir select anyone";
		return false;
	}
		return true;
}