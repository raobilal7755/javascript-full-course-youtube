document.write(window.history.length +"<br>");


function go_back(){
	document.write(window.history.back());
}

function go_forward(){
	document.write(window.history.forward());
}


function myGo(a){
	document.write(window.history.go(a));
}