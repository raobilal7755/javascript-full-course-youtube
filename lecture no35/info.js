var myWin;

function open_window(){
	myWin=window.open('','_blank','height=100,width=200');
}

function move_by_and_to(){
	myWin.moveTo(800,700);
	myWin.focus();
}