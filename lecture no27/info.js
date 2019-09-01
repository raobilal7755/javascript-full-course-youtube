function myFun(){
	var a=confirm('Are you sure');
	if (a==true) {
		document.getElementById('one').innerHTML="Sir you press OK";
	}else{
		document.getElementById('one').innerHTML="Sir you press Cancel button";
	}
}