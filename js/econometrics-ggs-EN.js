//Generating google table
function ggs(){
	var inpx = document.getElementsByClassName('x');
	var inpy = document.getElementsByClassName('y');
	var selectValue = document.getElementById('select').value;
	var i;

	//Write an array of x from inputs with the class x
	var arrx = [];
	for (i=0; i<inpx.length; i++){
		arrx[i] = parseFloat(parseFloat(inpx[i].value).toFixed(4));
	}

	//Write an array of y from inputs with the class y
	var arry = [];
	for (i= 0; i<inpy.length; i++){
		arry[i] = parseFloat(parseFloat(inpy[i].value).toFixed(4));
	}

	var bool = 0;

	//Checking inputs for fullness
	for (i=0; i<arrx.length; i++){
		if(isNaN(arrx[i]) || isNaN(arry[i])){
			bool = 1;
			alert("All cells X and Y must be filled");
			break;
		}
	}

	//Check for parabolic regression
	if(selectValue == 2 && arrx.length < 4 && bool == 0){
		bool = 1;
		alert("You must specify the number of observations >= 4 (n >= 4)");
	}

	if(bool == 0){
		//Generate name for google table (optional)
		var ekey = "";
		var words = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
		for(i=0; i<50; ++i){
			var position = Math.floor(Math.random() * (words.length - 1));
			ekey += words.substring(position, position + 1);
		}

		//Transferring data for a google script via doGet (e) and switching to a new tab with a link to the table
		window.open('https://script.google.com/macros/s/AKfycbycd4j-rpuLwuLh1Cy9eCk4wAwRHo8jZAsaX8grY9cQXsffs64/exec?ekey='+ekey+'&selectValue='+selectValue+'&arrx='+arrx+'&arry='+arry+'');
	}
}