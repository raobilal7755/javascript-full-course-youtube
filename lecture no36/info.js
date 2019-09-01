var myWin;

function open_window(){
	myWin=window.open('','_blank','height=100,width=200');
}

function move_by_and_to(){
	myWin.resizeBy(700,700);
	myWin.focus();
}


function window_scroll(){
	window.scrollTo(1000,500);
}