// without argumetn and no returning value

function myFun1(){
	var $x=4;
	var $y=5;
	var $z=$x+$y;
	document.write($z);
}

myFun1();

document.write('<br>');

// with argumetn and no returning value

function myFun2(a,b){
	var z=a+b;
	document.write(z);
}

myFun2(10,11);

document.write('<br>');

// with argumetn and  returning value
// 

function myFun3(x,y){
	var z=x+y;
	return z;
}

var result=myFun3(2,3);
document.write(result);