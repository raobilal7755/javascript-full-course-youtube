var win;
function win_open(){
   win=window.open("1.jpg","win","height=500,width=500");

}


function win_close(){
	if (win) {
		win.close();
	}
}

function win_check(){
	if (!win) {
		document.getElementById('txt').innerHTML="Sir no window open yet.";
	}else{
		if (win.closed) {
			document.getElementById('txt').innerHTML="Sir window close";
		}else{
			document.getElementById('txt').innerHTML="Sir window open";
		}
	}
}

