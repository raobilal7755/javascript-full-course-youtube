function myFun(){
	var container;

var today=new Date();
var current_hour=today.getHours();
var current_mint=today.getMinutes();
var current_sec=today.getSeconds();

if (current_hour<12) {
	container="<span>AM</span>";
}else{
	container="<span>PM</span>";
}

if (current_hour==12) {
	current_hour=12;
}

if (current_hour>12) {
	current_hour=current_hour-12;

}

current_hour=add_zero_start(current_hour);
current_mint=add_zero_start(current_mint);
current_sec=add_zero_start(current_sec);


document.getElementById('clock').innerHTML=current_hour +" : "+ current_mint +" : "+ current_sec+" " +container;
}


setInterval(myFun);


function add_zero_start(j){
	if (j<10) {
		j="0"+j;
	}
	return j;
}