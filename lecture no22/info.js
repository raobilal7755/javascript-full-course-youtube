var b="sir i am global";
function local(){
	var a=5; //local variable
	document.write(a +"<br>");
	document.write(b);
}

function gloo(){
	document.write(b);
}