function myFun(){
	var a=prompt("Enter your value \n one \n two \n 1");
	switch(a) {
		case 'one':
			document.write('sir you enter one');
			break;
		case 'two':
			document.write('sir you enter two');
			break;
		case 1:
			document.write('sir you enter integer');
			break;
		default:
			document.write('no match value');
			break;
	}
}