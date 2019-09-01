var b=5;

var check=setInterval(myFun,1000);
function myFun(){
	document.getElementById('txt').innerHTML=b;
	b--;

	if (b<=0) {
		document.getElementById('txt').innerHTML='<a href="https://laravel.com/">Click here to downlaod</a>';
	}
}