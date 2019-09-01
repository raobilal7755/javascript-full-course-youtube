var age=18;

if (age>=18) {
	var ticket=true;
	if (ticket==true) {
		var seat=true;
		if (seat==true) {
			var feedback=true;
			if (feedback==true) {
				document.write("<h2>sir i am enjoye a lot..thank you..</h2>");
			}else{
				document.write("<h3>its booring soo sooosooo.</h3>");
			}

		}else{
			document.write("<h3>sorry no seat found ,you watch the movie without seat.</h3>");
		}

	}else
	document.write("<h3>you can not watch the moive, first purchase ticket</h3>");
	}
else {
	document.write("<h3>you can not watch the moive, bcz teen age required</h3>");
}