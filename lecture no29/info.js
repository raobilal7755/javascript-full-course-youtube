
function myFun(){
			//    [0]   [1]   [2]     [3]    [4]    [5]
 	var myArray=['one','two','three','four','five','six'];

 	var bioData={
 		fname:"Rao",
 		lname:"Bilal",
 		age:23,
 		city:"Lahore"
 	}
 	
	for(var index in bioData ){
		document.write(index+" => "+bioData[index] +"<br>");
	}
}