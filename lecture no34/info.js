function full_page_print(){
	window.print();
}


function select_page_print(divkiid){
	var fullPage=document.body.innerHTML;
	var selectPage=document.getElementById(divkiid).innerHTML;
	document.body.innerHTML=selectPage;
	window.print();
}