function myForm(){
	var rado1=document.getElementById('rado1').checked;
	var rado2=document.getElementById('rado2').checked;
	var rado3=document.getElementById('rado3').checked;

	if ((rado1=="")&&(rado2=="")&&(rado3=="")) {
		document.getElementById('sms').innerHTML="sir select anyone Course <br>";
		return false;
	}
		return true;
}