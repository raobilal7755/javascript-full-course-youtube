var win;
function win_open(){
   win=window.open("1.jpg","win","height=500,width=500");
}


function win_close(){
	if (win) {
		win.close();
	}
}

