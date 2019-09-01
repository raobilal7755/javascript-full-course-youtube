 var a=setInterval(set,1000);
function set(){
	var myDate=new Date();
	var clock=myDate.toLocaleTimeString();
	document.getElementById('txt').innerHTML=clock;
}