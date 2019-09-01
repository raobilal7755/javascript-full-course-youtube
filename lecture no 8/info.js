var marks=parseInt(prompt("Enter your marks",0));
	
if (marks>=60&&marks<=70) {
	document.write("Grade C");
}else if (marks>=70&&marks<=80) {
	document.write("Grade B");
}else if (marks>=80&&marks<=90) {
	document.write("Grade A");
}else if (marks>=90&&marks<=100) {
	document.write("Grade A+");
}else{
	document.write('no match found');
}