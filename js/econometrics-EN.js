//Adding inputs by button +
function addtr(){
	var row = document.createElement("tr");
	row.innerHTML = "<td><input type='number' class='x'></td><td><input type='number' class='y'></td>";
	document.getElementById("tbody").appendChild(row);
}

//Removing inputs by button -
function removetr(){
	var inputs = document.getElementsByTagName("input").length;
	if(inputs > 6){
		document.getElementById("tbody").removeChild(tbody.lastChild);
	}
}

function calc(){
	var i;
	//Getting regression through select
	var selectValue = document.getElementById('select').value;

	//Getting the degree of rounding of numbers through select
	var selectRound = document.getElementById('select-round').value;

	var inpx = document.getElementsByClassName('x');
	var arrx = fun_arrx();
	var inpy = document.getElementsByClassName('y');
	var arry = fun_arry();	
	var n = arrx.length; //Recording the number of observations
	var bool = fun_check();

	//Write an array of x from inputs with the class x
	function fun_arrx(){
		var arrx = [];
		for (i=0; i<inpx.length; i++){
			arrx[i] = parseFloat(parseFloat(inpx[i].value).toFixed(selectRound));
		}
	return arrx;
	}

	//Write an array of y from inputs with the class y
	function fun_arry(){
		var arry = [];
		for (i= 0; i<inpy.length; i++){
			arry[i] = parseFloat(parseFloat(inpy[i].value).toFixed(selectRound));
		}
	return arry;
	}

	//Check before calculation
	function fun_check(){
		var bool = 0;

		//Checking inputs for fullness
		for (i=0; i<n; i++){
			if(isNaN(arrx[i]) || isNaN(arry[i])){
				bool = 1;
				alert("All cells X and Y must be filled");
				break;
			}
		}

		//Check for parabolic regression
		if(selectValue == 2 && n < 4 && bool == 0){
			bool = 1;
			alert("You must specify the number of observations >= 4 (n >= 4)");
		}
	return bool;
	}

	//Sum all values from array x
	function fun_sum_arrx(){
		var sumx = 0;
		for(i=0; i<n; i++){
			sumx += parseFloat(arrx[i]);
		}
	return sumx;
	}

	//Sum all values from array y
	function fun_sum_arry(){
		var sumy = 0;
		for(i=0; i<n; i++){
			sumy += parseFloat(arry[i]);
		}
	return sumy;
	}

	//Writing an array of x^2
	function fun_arr_pow2x(){
		var arr_pow2x = [];
		for(i=0; i<n; i++){
			arr_pow2x[i] = parseFloat(parseFloat(arrx[i]*arrx[i]).toFixed(selectRound));
		}
	return arr_pow2x;
	}

	//Sum of all values from array x^2
	function fun_sum_arr_pow2x(){
		var pow2x = 0;
		for(i=0; i<n; i++){
			pow2x += parseFloat(arrx[i]*arrx[i]);
		}
	return pow2x;
	}

	//Writing an array of x^3
	function fun_arr_pow3x(){
		var arr_pow3x = [];
		for(i=0; i<n; i++){
			arr_pow3x[i] = parseFloat(parseFloat(arrx[i]*arrx[i]*arrx[i]).toFixed(selectRound));
		}
	return arr_pow3x;
	}

	//Sum of all values from array x^3
	function fun_sum_arr_pow3x(){
		var sum_pow3x = 0;
		for(i=0; i<n; i++){
			sum_pow3x += parseFloat(arrx[i]*arrx[i]*arrx[i]);
		}
	return sum_pow3x;
	}

	//Writing an array of x^4
	function fun_arr_pow4x(){
		var arr_pow4x = [];
		for(i=0; i<n; i++){
			arr_pow4x[i] = parseFloat(parseFloat(arrx[i]*arrx[i]*arrx[i]*arrx[i]).toFixed(selectRound));
		}
	return arr_pow4x;
	}

	//Sum of all values from array x^4
	function fun_sum_arr_pow4x(){
		var sum_pow4x = 0;
		for(i=0; i<n; i++){
			sum_pow4x += parseFloat(arrx[i]*arrx[i]*arrx[i]*arrx[i]);
		}
	return sum_pow4x;
	}

	//Writing an array of Xi * Yi
	function fun_arr_multi_x_y(){
		var arr_multi_x_y = [];
		for(i=0; i<n; i++){
			arr_multi_x_y[i] = parseFloat((parseFloat(arrx[i]) * parseFloat(arry[i])).toFixed(selectRound));
		}
	return arr_multi_x_y;
	}

	//Sum of all values from array Xi * Yi
	function fun_sum_multi_x_y(){
		var sum_multi_x_y = 0;
		for(i=0; i<n; i++){
			sum_multi_x_y += (parseFloat(arrx[i]) * parseFloat(arry[i]));
		}
	return sum_multi_x_y;
	}

	//Writing an array of Xi^2 * Yi
	function fun_arr_multi_pow2x_y(){
		var arr_multi_pow2x_y = [];
		for(i=0; i<n; i++){
			arr_multi_pow2x_y[i] = parseFloat((parseFloat(arr_pow2x[i]) * parseFloat(arry[i])).toFixed(selectRound));
		}
	return arr_multi_pow2x_y;
	}

	//Sum of all values from array Xi^2 * Yi
	function fun_sum_multi_pow2x_y(){
		var sum_multi_pow2x_y = 0;
		for(i=0; i<n; i++){
			sum_multi_pow2x_y += (parseFloat(arr_pow2x[i]) * parseFloat(arry[i]));
		}
	return sum_multi_pow2x_y;
	}

	//Writing an array of log(x)
	function fun_arrlnx(){
		var arrlnx = [];
		for (i=0; i<n; i++){
			arrlnx[i] = parseFloat((Math.log(parseFloat(arrx[i]))).toFixed(selectRound));
		}
	return arrlnx;
	}

	//Sum of all values from array log(x)
	function fun_sum_arrlnx(){
		var sumlnx = 0;
		for(i=0; i<n; i++){
			sumlnx += Math.log(parseFloat(arrx[i]));
		}
	return sumlnx;
	}

	//Writing an array of log(y)
	function fun_arrlny(){
		var arrlny = [];
		for (i=0; i<n; i++){
			arrlny[i] = parseFloat((Math.log(parseFloat(arry[i]))).toFixed(selectRound));
		}
	return arrlny;
	}

	//Sum of all values from array log(y)
	function fun_sum_arrlny(){
		var sumlny = 0;
		for(i=0; i<n; i++){
			sumlny += Math.log(parseFloat(arry[i]));
		}
	return sumlny;
	}

	//Writing an array of log(x)^2
	function fun_arr_powlnx(){
		var arr_powlnx = [];
		for(i=0; i<n; i++){
			arr_powlnx[i] = parseFloat((parseFloat(arrlnx[i]*arrlnx[i])).toFixed(selectRound));
		}
	return arr_powlnx;
	}

	//Sum of all values from array log(x)^2
	function fun_sum_arr_powlnx(){
		var sumpowlnx = 0;
		for(i=0; i<n; i++){
			sumpowlnx += (parseFloat(arrlnx[i]*arrlnx[i]));
		}
	return sumpowlnx;
	}

	//Writing an array of lnXi * lnYi
	function fun_arr_multi_lnx_lny(){
		var arr_multi_lnx_lny = [];
		for(i=0; i<n; i++){
			arr_multi_lnx_lny[i] = parseFloat((parseFloat(arrlnx[i]) * parseFloat(arrlny[i])).toFixed(selectRound));
		}
	return arr_multi_lnx_lny;
	}

	//Sum of all values from array lnXi * lnYi
	function fun_sum_multi_lnx_lny(){
		var sum_multi_lnx_lny = 0;
		for(i=0; i<n; i++){
			sum_multi_lnx_lny += parseFloat(arrlnx[i]) * parseFloat(arrlny[i]);
		}
	return sum_multi_lnx_lny;
	}

	//Writing an array of Xi * lnYi
	function fun_arr_multi_x_lny(){
		var arr_multi_x_lny = [];
		for(i=0; i<n; i++){
			arr_multi_x_lny[i] = parseFloat((parseFloat(arrx[i]) * parseFloat(arrlny[i])).toFixed(selectRound));
		}
	return arr_multi_x_lny;
	}

	//Sum of all values from array Xi * lnYi
	function fun_sum_multi_x_lny(){
		var sum_multi_x_lny = 0;
		for(i=0; i<n; i++){
			sum_multi_x_lny += parseFloat(arrx[i]) * parseFloat(arrlny[i]);
		}
	return sum_multi_x_lny;
	}

	//Writing an array of lnXi * Yi
	function fun_arr_multi_lnx_y(){
		var arr_multi_lnx_y = [];
		for(i=0; i<n; i++){
			arr_multi_lnx_y[i] = parseFloat((parseFloat(arrlnx[i]) * parseFloat(arry[i])).toFixed(selectRound));
		}
	return arr_multi_lnx_y;	
	}

	//Sum of all values from array lnXi * Yi
	function fun_sum_multi_lnx_y(){
		var sum_multi_lnx_y = 0;
		for(i=0; i<n; i++){
			sum_multi_lnx_y += parseFloat(arrlnx[i]) * parseFloat(arry[i]);
		}
	return sum_multi_lnx_y;
	}

	//Writing an array of 1 / x
	function fun_arr_divis_x(){
		var arr_divis_x = [];
		for(i=0; i<n; i++){
			arr_divis_x[i] = parseFloat((1 / arrx[i]).toFixed(selectRound));
		}
	return arr_divis_x;
	}

	//Sum of all values from array 1 / x
	function fun_sum_divis_x(){
		var sum_divis_x = 0;
		for(i=0; i<n; i++){
			sum_divis_x += parseFloat(arr_divis_x[i]);
		}
	return sum_divis_x;
	}

	//Writing an array of 1 / x^2
	function fun_arr_divis_pow2x(){
		var arr_divis_pow2x = [];
		for(i=0; i<n; i++){
			arr_divis_pow2x[i] = parseFloat((1 / (arrx[i]*arrx[i])).toFixed(selectRound));
		}
	return arr_divis_pow2x;
	}

	//Sum of all values from array 1 / x^2
	function fun_sum_divis_pow2x(){
		var sum_divis_pow2x = 0;
		for(i=0; i<n; i++){
			sum_divis_pow2x += parseFloat(arr_divis_pow2x[i]);
		}
	return sum_divis_pow2x;
	}

	//Writing an array of y / x
	function fun_arr_divis_y_x(){
		var arr_divis_y_x = [];
		for(i=0; i<n; i++){
			arr_divis_y_x[i] = parseFloat((arry[i] / arrx[i]).toFixed(selectRound));
		}
	return arr_divis_y_x;
	}

	//Sum of all values from array y / x
	function fun_sum_divis_y_x(){
		var sum_divis_y_x = 0;
		for(i=0; i<n; i++){
			sum_divis_y_x += parseFloat(arr_divis_y_x[i]);
		}
	return sum_divis_y_x;
	}

	//Start calculation
	if(bool == 0){

		//Shared variables
		var sumx = parseFloat(fun_sum_arrx().toFixed(selectRound));
		var sumy = parseFloat(fun_sum_arry().toFixed(selectRound));
		var midy = parseFloat((sumy / n).toFixed(selectRound));

		//Variable declaration
		var a,b,c,d,da,db,dc,a_exp,b_exp,arr_pow2x,sum_pow2x,arr_multi_x_y,sum_multi_x_y,arrlnx,sumlnx,arrlny,sumlny,arr_powlnx,sumpowlnx,arr_multi_lnx_lny,sum_multi_lnx_lny,arr_pow3x,sumpow3x,arr_pow4x,sumpow4x,arr_multi_pow2x_y,sum_multi_pow2x_y,arr_divis_x,sum_divis_x,arr_divis_pow2x,sum_divis_pow2x,arr_divis_y_x,sum_divis_y_x,arr_multi_x_lny,sum_multi_x_lny,sum_powlnx,arr_multi_lnx_y,sum_multi_lnx_y,correl,arr_midy_minus_mody_pow,sum_midy_minus_mody_pow,arr_y_minus_midy_pow,arr_y_minus_mody_pow,sum_y_minus_mody_pow,fisher,arr_fisher_tabl,fisher_tabl,sum_y_minus_midy_pow;

		//Calculating values for linear regression
		if(selectValue == 0){
			arr_pow2x = fun_arr_pow2x();
			sum_pow2x = parseFloat(fun_sum_arr_pow2x().toFixed(selectRound));
			arr_multi_x_y = fun_arr_multi_x_y();
			sum_multi_x_y = parseFloat(fun_sum_multi_x_y().toFixed(selectRound));
		}

		//Calculating values for power regression
		if(selectValue == 1){
			arrlnx = fun_arrlnx();
			sumlnx = parseFloat((fun_sum_arrlnx()).toFixed(selectRound));
			arrlny = fun_arrlny();
			sumlny = parseFloat((fun_sum_arrlny()).toFixed(selectRound));
			arr_powlnx = fun_arr_powlnx();
			sumpowlnx = parseFloat((fun_sum_arr_powlnx()).toFixed(selectRound));
			arr_multi_lnx_lny = fun_arr_multi_lnx_lny();
			sum_multi_lnx_lny = parseFloat((fun_sum_multi_lnx_lny()).toFixed(selectRound));
		}

		//Calculating values for parabolic regression
		if(selectValue == 2){
			arr_pow2x = fun_arr_pow2x();
			sum_pow2x = parseFloat((fun_sum_arr_pow2x()).toFixed(selectRound));
			arr_pow3x = fun_arr_pow3x();
			sumpow3x = parseFloat((fun_sum_arr_pow3x()).toFixed(selectRound));
			arr_pow4x = fun_arr_pow4x();
			sumpow4x = parseFloat((fun_sum_arr_pow4x()).toFixed(selectRound));
			arr_multi_x_y = fun_arr_multi_x_y();
			sum_multi_x_y = parseFloat((fun_sum_multi_x_y()).toFixed(selectRound));
			arr_multi_pow2x_y = fun_arr_multi_pow2x_y();
			sum_multi_pow2x_y = parseFloat((fun_sum_multi_pow2x_y()).toFixed(selectRound));
		}

		//Calculating values for Hyperbolic regression
		if(selectValue == 3){
			arr_divis_x = fun_arr_divis_x();
			sum_divis_x = parseFloat((fun_sum_divis_x()).toFixed(selectRound));
			arr_divis_pow2x = fun_arr_divis_pow2x();
			sum_divis_pow2x = parseFloat((fun_sum_divis_pow2x()).toFixed(selectRound));
			arr_divis_y_x = fun_arr_divis_y_x();
			sum_divis_y_x = parseFloat((fun_sum_divis_y_x()).toFixed(selectRound));
		}

		//Calculating values for exponential regression
		if(selectValue == 4 || selectValue == 6){
			arrlny = fun_arrlny();
			sumlny = parseFloat((fun_sum_arrlny()).toFixed(selectRound));
			arr_pow2x = fun_arr_pow2x();
			sum_pow2x = parseFloat((fun_sum_arr_pow2x()).toFixed(selectRound));
			arr_multi_x_lny = fun_arr_multi_x_lny();
			sum_multi_x_lny = parseFloat((fun_sum_multi_x_lny()).toFixed(selectRound));
		}

		//Calculating values for logarithmic regression
		if(selectValue == 5){
			arrlnx = fun_arrlnx();
			sumlnx = parseFloat((fun_sum_arrlnx()).toFixed(selectRound));
			arr_powlnx = fun_arr_powlnx();
			sum_powlnx = parseFloat((fun_sum_arr_powlnx()).toFixed(selectRound));
			arr_multi_lnx_y = fun_arr_multi_lnx_y();
			sum_multi_lnx_y = parseFloat((fun_sum_multi_lnx_y()).toFixed(selectRound));
		}

		//Finding a and b for linear regression
		if(selectValue == 0){
			b = parseFloat(((sum_multi_x_y - (sumx * sumy / n)) / (sum_pow2x - (sumx * sumx / n))).toFixed(selectRound));
			a = parseFloat(((sumy - (sumx * b)) / n).toFixed(selectRound));
		}

		//Finding a and b for power regression
		if(selectValue == 1){
			b = parseFloat(((sum_multi_lnx_lny - (sumlnx * sumlny / n)) / (sumpowlnx - (sumlnx * sumlnx / n))).toFixed(selectRound));
			a = parseFloat(((sumlny - (sumlnx * b)) / n).toFixed(selectRound));
			a_exp = parseFloat((Math.exp(a)).toFixed(selectRound));
		}

		//Finding a, b, c for parabolic regression
		if(selectValue == 2){
			d = parseFloat((n * sum_pow2x * sumpow4x) + (sumx * sumpow3x * sum_pow2x) + (sum_pow2x * sumx * sumpow3x) - (sum_pow2x * sum_pow2x * sum_pow2x) - (sumpow3x * sumpow3x * n) - (sumpow4x * sumx * sumx));
			da = parseFloat((sumy * sum_pow2x * sumpow4x) + (sumx * sumpow3x * sum_multi_pow2x_y) + (sum_pow2x * sum_multi_x_y * sumpow3x) - (sum_multi_pow2x_y * sum_pow2x * sum_pow2x) - (sumpow3x * sumpow3x * sumy) - (sumpow4x * sum_multi_x_y * sumx));
			db = parseFloat((n * sum_multi_x_y * sumpow4x) + (sumy * sumpow3x * sum_pow2x) + (sum_pow2x * sumx * sum_multi_pow2x_y) - (sum_pow2x * sum_multi_x_y * sum_pow2x) - (sum_multi_pow2x_y * sumpow3x * n) - (sumpow4x * sumx * sumy));
			dc = parseFloat((n * sum_pow2x * sum_multi_pow2x_y) + (sumx * sum_multi_x_y * sum_pow2x) + (sumy * sumx * sumpow3x) - (sum_pow2x * sum_pow2x * sumy) - (sumpow3x * sum_multi_x_y * n) - (sum_multi_pow2x_y * sumx * sumx));
			a = parseFloat((da / d).toFixed(selectRound));
			b = parseFloat((db / d).toFixed(selectRound));
			c = parseFloat((dc / d).toFixed(selectRound));
		}

		//Finding a and b for hyperbolic regression
		if(selectValue == 3){
			b = parseFloat(((sum_divis_y_x - (sum_divis_x * sumy / n)) / (sum_divis_pow2x - (sum_divis_x * sum_divis_x / n))).toFixed(selectRound));
			a = parseFloat(((sumy - (sum_divis_x * b)) / n).toFixed(selectRound));
		}

		//Finding a and b for exponential regression
		if(selectValue == 4){
			b = parseFloat(((sum_multi_x_lny - (sumx * sumlny / n)) / (sum_pow2x - (sumx * sumx / n))).toFixed(selectRound));
			a = parseFloat(((sumlny - (sumx * b)) / n).toFixed(selectRound));
			a_exp = parseFloat((Math.exp(a)).toFixed(selectRound));
		}

		//Finding a and b for logarithmic regression
		if(selectValue == 5){
			b = parseFloat(((sum_multi_lnx_y - (sumlnx * sumy / n)) / (sum_powlnx - (sumlnx * sumlnx / n))).toFixed(selectRound));
			a = parseFloat(((sumy - (sumlnx * b)) / n).toFixed(selectRound));
		}

		//Finding a and b for another exponential regression
		if(selectValue == 6){
			b = parseFloat(((sum_multi_x_lny - (sumx * sumlny / n)) / (sum_pow2x - (sumx * sumx / n))).toFixed(selectRound));
			a = parseFloat(((sumlny - (sumx * b)) / n).toFixed(selectRound));
			a_exp = parseFloat((Math.exp(a)).toFixed(selectRound));
			b_exp = parseFloat((Math.exp(b)).toFixed(selectRound));
		}

		var arrmody = [];

		//Calculating and writing an array of Ymod values for linear regression
		if(selectValue == 0){
			for(i=0; i<n; i++){
				arrmody[i] = parseFloat((parseFloat(arrx[i]) * b + a).toFixed(selectRound));
			}
		}

		//Calculating and writing an array of Ymod values for power regression
		if(selectValue == 1){
			for(i=0; i<n; i++){
				arrmody[i] = parseFloat((a_exp * parseFloat(Math.pow(arrx[i], b))).toFixed(selectRound));
			}
		}

		//Calculating and writing an array of Ymod values for parabolic regression
		if(selectValue == 2){
			for(i=0; i<n; i++){
				arrmody[i] = parseFloat((a + b * parseFloat(arrx[i]) + c * parseFloat(arr_pow2x[i])).toFixed(selectRound));
			}
		}

		//Calculating and writing an array of Ymod values for hyperbolic regression
		if(selectValue == 3){
			for(i=0; i<n; i++){
				arrmody[i] = parseFloat((a + (b / parseFloat(arrx[i]))).toFixed(selectRound));
			}
		}

		//Calculating and writing an array of Ymod values for exponential regression
		if(selectValue == 4){
			for(i=0; i<n; i++){
				arrmody[i] = parseFloat((a_exp * (Math.exp(b * parseFloat(arrx[i])))).toFixed(selectRound));
			}
		}

		//Calculating and writing an array of Ymod values for logarithmic regression
		if(selectValue == 5){
			for(i=0; i<n; i++){
				arrmody[i] = parseFloat((a + (b * parseFloat(arrlnx[i]))).toFixed(selectRound));
			}
		}

		//Calculating and writing an array of Ymod values for another exponential regression
		if(selectValue == 6){
			for(i=0; i<n; i++){
				arrmody[i] = parseFloat((a_exp * (Math.pow(b_exp, parseFloat(arrx[i])))).toFixed(selectRound));
			}
		}

		//Calculating correlation for linear regression
		if(selectValue == 0){
			arr_midy_minus_mody_pow = [];
			sum_midy_minus_mody_pow = 0;
				for(i=0; i<n; i++){
					arr_midy_minus_mody_pow[i] = parseFloat((Math.pow(midy - parseFloat(arrmody[i]),2)).toFixed(selectRound));
					sum_midy_minus_mody_pow += arr_midy_minus_mody_pow[i];
				}
			arr_y_minus_midy_pow = [];
			sum_y_minus_midy_pow = 0;
				for(i=0; i<n; i++){
					arr_y_minus_midy_pow[i] = parseFloat((Math.pow((parseFloat(arry[i]) - midy),2)).toFixed(selectRound) );
					sum_y_minus_midy_pow += arr_y_minus_midy_pow[i];
				}
			sum_midy_minus_mody_pow = parseFloat(sum_midy_minus_mody_pow.toFixed(selectRound));
			sum_y_minus_midy_pow = parseFloat(sum_y_minus_midy_pow.toFixed(selectRound));
			correl = parseFloat((Math.pow(Math.abs((sum_midy_minus_mody_pow / sum_y_minus_midy_pow)),0.5)).toFixed(selectRound));
		}

		//Calculation of correlation for other types of regressions
		if(selectValue == 1 || selectValue == 2 || selectValue == 3 || selectValue == 4 || selectValue == 5 || selectValue == 6){
			arr_y_minus_mody_pow = [];
			sum_y_minus_mody_pow = 0;
				for(i=0; i<n; i++){
					arr_y_minus_mody_pow[i] = parseFloat((Math.pow((parseFloat(arry[i]) - parseFloat(arrmody[i])),2)).toFixed(selectRound));
					sum_y_minus_mody_pow += Math.pow((parseFloat(arry[i]) - parseFloat(arrmody[i])),2);
				}
			arr_y_minus_midy_pow = [];
			sum_y_minus_midy_pow = 0;
				for(i=0; i<n; i++){
					arr_y_minus_midy_pow[i] = parseFloat(Math.pow((parseFloat(arry[i]) - midy),2).toFixed(selectRound));
					sum_y_minus_midy_pow += Math.pow((parseFloat(arry[i]) - midy),2);
				}
			sum_y_minus_mody_pow = parseFloat(sum_y_minus_mody_pow.toFixed(selectRound));	
			sum_y_minus_midy_pow = parseFloat(sum_y_minus_midy_pow.toFixed(selectRound));
			correl = parseFloat((Math.abs(Math.pow((1 - (sum_y_minus_mody_pow / sum_y_minus_midy_pow)),0.5))).toFixed(selectRound));
		}	

		//Calculation of the coefficient (index) of determination and the influence of Y on X for any kind of regression
		var deter = parseFloat(Math.pow(correl,2).toFixed(selectRound));
		var deter_100 = parseFloat((deter * 100).toFixed(selectRound));
		var deter_other = parseFloat((100 - deter_100).toFixed(selectRound));

		//Calculation of Fisher's criterion for all types of regressions except parabolic
		if(selectValue == 0 || selectValue == 1 || selectValue == 3 || selectValue == 4 || selectValue == 5 || selectValue == 6){
			fisher = parseFloat(((deter / (1 - deter)) * (n - 2)).toFixed(selectRound));
			arr_fisher_tabl = ["161.45", "18.51", "10.13", "7.71", "6.61", "5.99", "5.59", "5.32", "5.12", "4.96", "4.84", "4.75", "4.67", "4.60", "4.54", "4.49", "4.45", "4.41", "4.38", "4.35", "4.32", "4.30", "4.28", "4.26", "4.24", "4.22", "4.21", "4.20", "4.18", "4.17"];
			fisher_tabl = 0;
				for(i=0; i<(n-2); i++){
					fisher_tabl = parseFloat(arr_fisher_tabl[i]);
				}
		}

		//Calculation of Fisher criterion for parabolic regression
		if(selectValue == 2){
			fisher = parseFloat(((deter / (1 - deter)) * ((n - 3) / 2)).toFixed(selectRound));
			arr_fisher_tabl = ["199.50", "19", "9.55", "6.94", "5.79", "5.14", "4.74", "4.46", "4.26", "4.10", "3.98", "3.89", "3.81", "3.74", "3.68", "3.63", "3.59", "3.55", "3.52", "3.49", "3.47", "3.44", "3.42", "3.40", "3.38", "3.37", "3.35", "3.34", "3.33", "3.32"];
			fisher_tabl = 0;
				for(i=0; i<(n-3); i++){
					fisher_tabl = parseFloat(arr_fisher_tabl[i]);
				}
		}	

		//Calculation of the approximation error for any kind of regression
		var err_apr = 0;
			for(i=0; i<n; i++){
				err_apr += Math.abs((parseFloat(arry[i]) - parseFloat(arrmody[i])) / parseFloat(arry[i]));
			}
		err_apr = parseFloat(((1 / n) * err_apr * 100).toFixed(selectRound));

		//HTML generation
		var gtable,gdiv;

		var w_f = 2;
			if(selectValue == 2){w_f = 3;}
		var w_eq = "";
			if(selectValue == 0){w_eq = "a + (b * x)";}
			if(selectValue == 1){w_eq = "a * x^b";}
			if(selectValue == 2){w_eq = "a + (b * x) + (c * x^2)";}
			if(selectValue == 3){w_eq = "a + (b / x)";}
			if(selectValue == 4){w_eq = "a * e^bx";}
			if(selectValue == 5){w_eq = "a + (b * lnx)";}
			if(selectValue == 6){w_eq = "a + b^x";}
		var w_sleq = "";
			if(selectValue == 0){w_sleq = "a * n + b * ∑X = ∑Y<br>a * ∑X + b * ∑X^2 = ∑(X * Y)";}
			if(selectValue == 1){w_sleq = "lna * n + b * ∑lnX = ∑lnY<br>lna * ∑lnX + b * ∑lnX^2 = ∑(lnX * lnY)";}
			if(selectValue == 2){w_sleq = "a * n + b * ∑X + c * ∑X^2 = ∑Y<br>a * ∑X + b * ∑X^2 + c * ∑X^3 = ∑(X * Y)<br>a * ∑X^2 + b * ∑X^3 + c * ∑X^4 = ∑(X^2 * Y)";}
			if(selectValue == 3){w_sleq = "a * n + b * ∑(1 / X) = ∑Y<br>a * ∑(1 / X) + b * ∑(1 / X^2) = ∑(Y * X)";}
			if(selectValue == 4){w_sleq = "lna * n + lnb * ∑X = ∑lnY<br>lna * ∑X + lnb * ∑X^2 = ∑(X * lnY)";}
			if(selectValue == 5){w_sleq = "a * n + b * ∑lnX = ∑Y<br>a * ∑lnX + b * ∑ln(X^2) = ∑(Y * lnX)";}
			if(selectValue == 6){w_sleq = "lna * n + lnb * ∑lnX = ∑lnY<br>lna * ∑lnX + lnb * ∑lnX^2 = ∑(X * lnY)";}
		var w_eq2 = "";
			if(selectValue == 0){w_eq2 = 'a * '+n+' + b * '+sumx+' = '+sumy+'<br>a * '+sumx+' + b * '+sum_pow2x+' = '+sum_multi_x_y+'';}
			if(selectValue == 1){w_eq2 = 'a * '+n+' + b * '+sumlnx+' = '+sumlny+'<br>a * '+sumlnx+' + b * '+sumpowlnx+' = '+sum_multi_lnx_lny+'';}
			if(selectValue == 2){w_eq2 = 'a * '+n+' + b * '+sumx+' + c * '+sum_pow2x+' = '+sumy+'<br>a * '+sumx+' + b * '+sum_pow2x+' + c * '+sumpow3x+' = '+sum_multi_x_y+'<br>a * '+sum_pow2x+' + b * '+sumpow3x+' + c * '+sumpow4x+' = '+sum_multi_pow2x_y+'';}
			if(selectValue == 3){w_eq2 = 'a * '+n+' + b * '+sum_divis_x+' = '+sumy+'<br>a * '+sum_divis_x+' + b * '+sum_divis_pow2x+' = '+sum_divis_y_x+'';}
			if(selectValue == 4){w_eq2 = 'a * '+n+' + b * '+sumx+' = '+sumlny+'<br>a * '+sumx+' + b * '+sum_pow2x+' = '+sum_multi_x_lny+'';}
			if(selectValue == 5){w_eq2 = 'a * '+n+' + b * '+sumlnx+' = '+sumy+'<br>a * '+sumlnx+' + b * '+sum_powlnx+' = '+sum_multi_lnx_y+'';}
			if(selectValue == 6){w_eq2 = 'a * '+n+' + b * '+sumx+' = '+sumlny+'<br>a * '+sumx+' + b * '+sum_pow2x+' = '+sum_multi_x_lny+'';}
		var w_eqab = "";
			if(selectValue == 0 || selectValue == 1 || selectValue == 3 || selectValue == 4 || selectValue == 5 || selectValue == 6){w_eqab = '<h3>Lets calculate the values of a and b:<br><br>a = '+a+'; b = '+b+'</h3>';}
			if(selectValue == 2){w_eqab = '<h3>To find a, b, c - we use Cramer method:<br><br>First, lets calculate the Cramer denominator(D), for this we construct a matrix 1:</h3><h4>Matrix 1</h4><table class="generate-table"><tbody><tr><td>'+n+'</td><td>'+sumx+'</td><td>'+sum_pow2x+'</td><td>'+n+'</td><td>'+sumx+'</td></tr><tr><td>'+sumx+'</td><td>'+sum_pow2x+'</td><td>'+sumpow3x+'</td><td>'+sumx+'</td><td>'+sum_pow2x+'</td></tr><tr><td>'+sum_pow2x+'</td><td>'+sumpow3x+'</td><td>'+sumpow4x+'</td><td>'+sum_pow2x+'</td><td>'+sumpow3x+'</td></tr></tbody></table><h3>D = ('+n+' * '+sum_pow2x+' * '+sumpow4x+') + ('+sumx+' * '+sumpow3x+' * '+sum_pow2x+') + ('+sum_pow2x+' * '+sumx+' * '+sumpow3x+') - ('+sum_pow2x+' * '+sum_pow2x+' * '+sum_pow2x+') - ('+sumpow3x+' * '+sumpow3x+' * '+n+') - ('+sumpow4x+' * '+sumx+' * '+sumx+') = '+d+'</h3><h3>Now lets calculate the first Cramer numerator(Da), for this we construct a matrix 2:</h3><h4>Matrix 2</h4><table class="generate-table"><tbody><tr><td>'+sumy+'</td><td>'+sumx+'</td><td>'+sum_pow2x+'</td><td>'+sumy+'</td><td>'+sumx+'</td></tr><tr><td>'+sum_multi_x_y+'</td><td>'+sum_pow2x+'</td><td>'+sumpow3x+'</td><td>'+sum_multi_x_y+'</td><td>'+sum_pow2x+'</td></tr><tr><td>'+sum_multi_pow2x_y+'</td><td>'+sumpow3x+'</td><td>'+sumpow4x+'</td><td>'+sum_multi_pow2x_y+'</td><td>'+sumpow3x+'</td></tr></tbody></table><h3>Da = ('+sumy+' * '+sum_pow2x+' * '+sumpow4x+') + ('+sumx+' * '+sumpow3x+' * '+sum_multi_pow2x_y+') + ('+sum_pow2x+' * '+sum_multi_x_y+' * '+sumpow3x+') - ('+sum_multi_pow2x_y+' * '+sum_pow2x+' * '+sum_pow2x+') - ('+sumpow3x+' * '+sumpow3x+' * '+sumy+') - ('+sumpow4x+' * '+sum_multi_x_y+' * '+sumx+') = '+da+'</h3><h3>Now lets calculate the second numerator of Cramer(Db), for this we construct a matrix 3:</h3> <h4>Matrix 3</h4><table class="generate-table"><tbody><tr><td>'+n+'</td><td>'+sumy+'</td><td>'+sum_pow2x+'</td><td>'+n+'</td><td>'+sumy+'</td></tr><tr><td>'+sumx+'</td><td>'+sum_multi_x_y+'</td><td>'+sumpow3x+'</td><td>'+sumx+'</td><td>'+sum_multi_x_y+'</td></tr><tr><td>'+sum_pow2x+'</td><td>'+sum_multi_pow2x_y+'</td><td>'+sumpow4x+'</td><td>'+sum_pow2x+'</td><td>'+sum_multi_pow2x_y+'</td></tr></tbody></table><h3>Db = ('+n+' * '+sum_multi_x_y+' * '+sumpow4x+') + ('+sumy+' * '+sumpow3x+' * '+sum_pow2x+') + ('+sum_pow2x+' * '+sumx+' * '+sum_multi_pow2x_y+') - ('+sum_pow2x+' * '+sum_multi_x_y+' * '+sum_pow2x+') - ('+sum_multi_pow2x_y+' * '+sumpow3x+' * '+n+') - ('+sumpow4x+' * '+sumx+' * '+sumy+') = '+db+'</h3><h3>Now lets calculate the third numerator of Cramer(Dc), for this we construct a matrix 4:</h3><h4>Matrix 4</h4><table class="generate-table"><tbody><tr><td>'+n+'</td><td>'+sumx+'</td><td>'+sumy+'</td><td>'+n+'</td><td>'+sumx+'</td></tr><tr><td>'+sumx+'</td><td>'+sum_pow2x+'</td><td>'+sum_multi_x_y+'</td><td>'+sumx+'</td><td>'+sum_pow2x+'</td></tr><tr><td>'+sum_pow2x+'</td><td>'+sumpow3x+'</td><td>'+sum_multi_pow2x_y+'</td><td>'+sum_pow2x+'</td><td>'+sumpow3x+'</td></tr></tbody></table><h3>Dc = ('+n+' * '+sum_pow2x+' * '+sum_multi_pow2x_y+') + ('+sumx+' * '+sum_multi_x_y+' * '+sum_pow2x+') + ('+sumy+' * '+sumx+' * '+sumpow3x+') - ('+sum_pow2x+' * '+sum_pow2x+' * '+sumy+') - ('+sumpow3x+' * '+sum_multi_x_y+' * '+n+') - ('+sum_multi_pow2x_y+' * '+sumx+' * '+sumx+') = '+dc+'</h3><h3>Now lets calculate the values a, b, c:<br><br>a = Da / D = '+a+';<br>b = Db / D = '+b+';<br>c = Dc / D = '+c+';</h3>';}
		var w_eqymod = "";
			if(selectValue == 0){w_eqymod = ''+b+' * X + '+a+'';}
			if(selectValue == 1){w_eqymod = 'e^'+a+' * x^'+b+'<br><br>Lets get rid of the exponent and the equation will take the following form:<br><br>Ymod = '+a_exp+' * x^'+b+'';}
			if(selectValue == 2){w_eqymod = ''+a+' + ('+b+' * X) + ('+c+' * X^2)';}
			if(selectValue == 3){w_eqymod = ''+a+' + ('+b+' / X)';}
			if(selectValue == 4){w_eqymod = ''+a_exp+' * e^('+b+' * X)';}
			if(selectValue == 5){w_eqymod = ''+a+' + ('+b+' * lnX)';}
			if(selectValue == 6){w_eqymod = 'e^'+a+' * e^('+b+'^X)<br><br>Lets get rid of the exponentials and the equation will take the following form:<br><br>Ymod = '+a_exp+' * '+b_exp+'^X';}
		var w_ic = "Index";
			if(selectValue == 0){w_ic = "Coefficient";}

		//Generation of the first div
		gdiv = ['<h2>Solution</h2><h3>The regression equation is:<br><br>Y = '+w_eq+'</h3><h3>Let us calculate the parameters of the equation through the system of linear equations<br><br>System of linear equations for finding the parameters of the equation:<br><br>'+w_sleq+'</h3><h3>To solve the system of equations, we construct and calculate the values of table 1:</h3>'];
		document.getElementById('generate1').innerHTML=gdiv.join('\n');

		//Generation of the third div
		gdiv = ['<h3>Now the system of linear equations will have the following form:<br><br>'+w_eq2+'</h3>'+w_eqab+'<h3>The regression equation will be as follows:<br><br>Ymod = '+w_eqymod+'</h3><h3>For further solution and quality assessment of the model, we will build and calculate the values of the table 2:</h3>'];
		document.getElementById('generate3').innerHTML=gdiv.join('\n');

		//Generation of the second, fourth and fifth divs for linear regression
		if(selectValue == 0){
			gtable = ['<table class="generate-table"><h4>Table 1<h4>'];
			gtable.push('<tr><td></td><td>X</td><td>Y</td><td>X^2</td><td>X * Y</td></tr>');
				for (i=0; i<n; i++){
					gtable.push('<tr><td>'+(i + 1)+'</td><td>'+arrx[i]+'</td><td>'+arry[i]+'</td><td>'+arr_pow2x[i]+'</td><td>'+arr_multi_x_y[i]+'</td></tr>');
				}
			gtable.push('<tr><td>Sum</td><td>'+sumx+'</td><td>'+sumy+'</td><td>'+sum_pow2x+'</td><td>'+sum_multi_x_y+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=gtable.join('\n');

			gtable = ['<table class="generate-table"><h4>Table 2<h4>'];
			gtable.push('<tr><td></td><td>Y</td><td>Ymod</td><td>(Yaverage - Ymod)^2</td><td>(Y - Yaverage)^2</td></tr>');
				for (i=0; i<n; i++){
					gtable.push('<tr><td>'+(i + 1)+'</td><td>'+arry[i]+'</td><td>'+arrmody[i]+'</td><td>'+arr_midy_minus_mody_pow[i]+'</td><td>'+arr_y_minus_midy_pow[i]+'</td></tr>');
				}
			gtable.push('<tr><td>Sum</td><td>'+sumy+'</td><td></td><td>'+sum_midy_minus_mody_pow+'</td><td>'+sum_y_minus_midy_pow+'</td></tr>');
			gtable.push('<tr><td>Average</td><td>'+midy+'</td><td></td><td></td><td></td></tr></table>');
			document.getElementById('generate4').innerHTML=gtable.join('\n');

			gdiv = ['<h3>Lets calculate the correlation coefficient according to the formula:<br><br>R = &radic;<span> ∑((Yaverage - Ymod)^2) / ∑((Y - Yaverage)^2)</span><br><br>R = &radic;<span> '+sum_midy_minus_mody_pow+' / '+sum_y_minus_midy_pow+'</span> = '+correl+'</h3><h3>To assess the relationship between X and Y, use the table 3:</h3>'];
			document.getElementById('generate5').innerHTML=gdiv.join('\n');
		}

		//Generation of the second div for power regression
		if(selectValue == 1){
			gtable = ['<table class="generate-table"><h4>Table 1<h4>'];
			gtable.push('<tr><td></td><td>lnX</td><td>lnY</td><td>lnX^2</td><td>lnX * lnY</td></tr>');
				for (i=0; i<n; i++){
					gtable.push('<tr><td>'+(i + 1)+'</td><td>'+arrlnx[i]+'</td><td>'+arrlny[i]+'</td><td>'+arr_powlnx[i]+'</td><td>'+arr_multi_lnx_lny[i]+'</td></tr>');
				}
			gtable.push('<tr><td>Sum</td><td>'+sumlnx+'</td><td>'+sumlny+'</td><td>'+sumpowlnx+'</td><td>'+sum_multi_lnx_lny+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=gtable.join('\n');
		}

		//Generation of the second div for parabolic regression
		if(selectValue == 2){			
			gtable = ['<table class="generate-table"><h4>Table 1<h4>'];
			gtable.push('<tr><td></td><td>X</td><td>Y</td><td>X^2</td><td>X^3</td><td>X^4</td><td>X * Y</td> <td>X^2 * Y</td></tr>');
				for (i=0; i<n; i++){
					gtable.push('<tr><td>'+(i + 1)+'</td><td>'+arrx[i]+'</td><td>'+arry[i]+'</td><td>'+arr_pow2x[i]+'</td><td>'+arr_pow3x[i]+'</td><td>'+arr_pow4x[i]+'</td><td>'+arr_multi_x_y[i]+'</td><td>'+arr_multi_pow2x_y[i]+'</td></tr>');
				}
			gtable.push('<tr><td>Sum</td><td>'+sumx+'</td><td>'+sumy+'</td><td>'+sum_pow2x+'</td><td>'+sumpow3x+'</td><td>'+sumpow4x+'</td><td>'+sum_multi_x_y+'</td><td>'+sum_multi_pow2x_y+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=gtable.join('\n');
		}

		//Generation of the second div for hyperbolic regression
		if(selectValue == 3){		
			gtable = ['<table class="generate-table"><h4>Table 1<h4>'];
			gtable.push('<tr><td></td><td>Y</td><td>1 / X</td><td>1 / X^2</td><td>Y / X</td></tr>');
				for (i=0; i<n; i++){
					gtable.push('<tr><td>'+(i + 1)+'</td><td>'+arry[i]+'</td><td>'+arr_divis_x[i]+'</td><td>'+arr_divis_pow2x[i]+'</td><td>'+arr_divis_y_x[i]+'</td></tr>');
				}
			gtable.push('<tr><td>Sum</td><td>'+sumy+'</td><td>'+sum_divis_x+'</td><td>'+sum_divis_pow2x+'</td><td>'+sum_divis_y_x+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=gtable.join('\n');
		}

		//Generation of the second div for exponential regression
		if(selectValue == 4){
			gtable = ['<table class="generate-table"><h4>Table 1<h4>'];
			gtable.push('<tr><td></td><td>X</td><td>lnY</td><td>X^2</td><td>X * lnY</td></tr>');
				for (i=0; i<n; i++){
					gtable.push('<tr><td>'+(i + 1)+'</td><td>'+arrx[i]+'</td><td>'+arrlny[i]+'</td><td>'+arr_pow2x[i]+'</td><td>'+arr_multi_x_lny[i]+'</td></tr>');
				}
			gtable.push('<tr><td>Sum</td><td>'+sumx+'</td><td>'+sumlny+'</td><td>'+sum_pow2x+'</td><td>'+sum_multi_x_lny+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=gtable.join('\n');
		}

		//Generation of the second div for logarithmic regression
		if(selectValue == 5){			
			gtable = ['<table class="generate-table"><h4>Table 1<h4>'];
			gtable.push('<tr><td></td><td>Y</td><td>lnX</td><td>(lnX)^2</td><td>Y * lnX</td></tr>');
				for (i=0; i<n; i++){
					gtable.push('<tr><td>'+(i + 1)+'</td><td>'+arry[i]+'</td><td>'+arrlnx[i]+'</td><td>'+arr_powlnx[i]+'</td><td>'+arr_multi_lnx_y[i]+'</td></tr>');
				}
			gtable.push('<tr><td>Sum</td><td>'+sumy+'</td><td>'+sumlnx+'</td><td>'+sum_powlnx+'</td><td>'+sum_multi_lnx_y+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=gtable.join('\n');
		}

		//Generation of the second div for another exponential regression
		if(selectValue == 6){
			gtable = ['<table class="generate-table"><h4>Table 1<h4>'];
			gtable.push('<tr><td></td><td>X</td><td>lnY</td><td>X^2</td><td>X * lnY</td></tr>');
				for (i=0; i<n; i++){
					gtable.push('<tr><td>'+(i + 1)+'</td><td>'+arrx[i]+'</td><td>'+arrlny[i]+'</td><td>'+arr_pow2x[i]+'</td><td>'+arr_multi_x_lny[i]+'</td></tr>');
				}
			gtable.push('<tr><td>Sum</td><td>'+sumx+'</td><td>'+sumlny+'</td><td>'+sum_pow2x+'</td><td>'+sum_multi_x_lny+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=gtable.join('\n');
		}

		//Generation of the fourth and fifth divs for any kind of regression except linear
		if(selectValue == 1 || selectValue == 2 || selectValue == 3 || selectValue == 4 || selectValue == 5 || selectValue == 6){
			gtable = ['<table class="generate-table"><h4>Table 2<h4>'];
			gtable.push('<tr><td></td><td>Y</td><td>Ymod</td><td>(Y-Ymod)^2</td><td>(Y - Yaverage)^2</td></tr>');
				for (i=0; i<n; i++){
					gtable.push('<tr><td>'+(i + 1)+'</td><td>'+arry[i]+'</td><td>'+arrmody[i]+'</td><td>'+arr_y_minus_mody_pow[i]+'</td><td>'+arr_y_minus_midy_pow[i]+'</td></tr> ');
				}
			gtable.push('<tr><td>Sum</td><td>'+sumy+'</td><td></td><td>'+sum_y_minus_mody_pow+'</td><td>'+sum_y_minus_midy_pow+'</td></tr>');
			gtable.push('<tr><td>Average</td><td>'+midy+'</td><td></td><td></td><td></td></tr></table>');
			document.getElementById('generate4').innerHTML=gtable.join('\n');
			
			gdiv = ['<h3>Lets calculate the correlation index by the formula:<br><br>R = &radic;<span> 1 - (∑(Y - Ymod)^2) / ∑(Y - Yaverage)^2))</span><br><br>R = &radic;<span> 1 - ('+sum_y_minus_mody_pow+' / '+sum_y_minus_midy_pow+')</span> = '+correl+'</h3><h3>To assess the relationship between X and Y, use the table 3:</h3>'];
			document.getElementById('generate5').innerHTML=gdiv.join('\n');
		}		

		//General generation
		gtable = ['<table class="generate-table"><h4>Table 3<h4><tr><td>R = 0</td><td>No relationship</td></tr><tr><td>0 < R < 0.2</td><td>Very low relationship</td></tr><tr><td>0.2 < R < 0.3</td><td>Low relationship</td></tr><tr><td>0.3 < R < 0.5</td><td>Moderate relationship</td></tr><tr><td>0.5 < R < 0.7</td><td>Average relationship</td></tr><tr><td>0.7 < R < 0.9</td><td>High relationship</td></tr><tr><td>0.9 < R < 1</td><td>Very high relationship</td></tr><tr><td>R = 1</td><td>Functional relationship</td></tr></table>'];
		document.getElementById('generate6').innerHTML=gtable.join('\n');

		gdiv = ['<div>'];
		if(correl == 0){
			gdiv.push('<h3>'+w_ic+' of correlation = '+correl+' - The relationship between X and Y - no relationship</h3>');
		}
		if(correl > 0 && correl < 0.2){
			gdiv.push('<h3>'+w_ic+' of correlation = '+correl+' - The relationship between X and Y - very low</h3>');
		}
		if(correl >= 0.2 && correl < 0.3){
			gdiv.push('<h3>'+w_ic+' of correlation = '+correl+' - The relationship between X and Y - low</h3>');
		}
		if(correl >= 0.3 && correl < 0.5){
			gdiv.push('<h3>'+w_ic+' of correlation = '+correl+' - The relationship between X and Y - moderate</h3>');
		}
		if(correl >= 0.5 && correl < 0.7){
			gdiv.push('<h3>'+w_ic+' of correlation = '+correl+' - The relationship between X and Y - average</h3>');
		}
		if(correl >= 0.7 && correl < 0.9){
			gdiv.push('<h3>'+w_ic+' of correlation = '+correl+' - The relationship between X and Y - high</h3>');
		}
		if(correl >= 0.9 && correl < 1){
			gdiv.push('<h3>'+w_ic+' of correlation = '+correl+' - The relationship between X and Y - very high</h3>');
		}
		if(correl == 1){
			gdiv.push('<h3>'+w_ic+' of correlation = '+correl+' - The relationship between X and Y - functional</h3>');
		}
		gdiv.push('</div>');
		document.getElementById('generate7').innerHTML=gdiv.join('\n');

		gdiv = ['<h3>Calculation '+w_ic+' of determination:<br><br>Since '+w_ic+' of determination is '+w_ic+' correlation to the second degree, then:<br><br>R^2 = '+deter+'</h3><h3>'+w_ic+' of determination = '+deter+' - By '+deter_100+'% variation in Y is due to variation in X; '+deter_other+'% variation of other factors</h3>'];
		document.getElementById('generate8').innerHTML=gdiv.join('\n');

		gdiv = ['<h3>Calculation Fisher criterion by the formula:<br><br>F = (R^2 / (1 - R^2)) * (n - '+w_f+')<br><br>F = ('+deter+' / (1 - '+deter+')) * ('+n+' - '+w_f+') = '+fisher+'<br><br>Fisher table value = '+fisher_tabl+'</h3>'];
		document.getElementById('generate9').innerHTML=gdiv.join('\n');

		gdiv = ['<div>'];
		if(fisher > fisher_tabl){
			gdiv.push('<h3>Since '+fisher+' > '+fisher_tabl+', then '+w_ic+' of determination is statistically significant and the regression equation is significant in general</h3>');
		}
		if(fisher < fisher_tabl){
			gdiv.push('<h3>Since '+fisher+' < '+fisher_tabl+', then '+w_ic+' of determination is not statistically significant and the regression equation is not significant in general</h3>');
		}
		gdiv.push('</div>');
		document.getElementById('generate10').innerHTML=gdiv.join('\n');

		gdiv = ['<div>'];
		gdiv.push('<h3>Сalculate the approximation error by the formula:<br><br>A% = (1 / n) * ∑((Y - Ymod) / Y) * 100<br><br>A% = '+err_apr+'%</h3>');
		if(err_apr < 7){
			gdiv.push('<h3>Since A% = '+err_apr+' < 7%, then the model is of high quality</h3>');
		}
		if(err_apr == 7 && err_apr <= 10){
			gdiv.push('<h3>Since A% = '+err_apr+' and is in the range from 7% to 10%, then the model is acceptable</h3>');
		}
		if(err_apr > 7){
			gdiv.push('<h3>Since A% = '+err_apr+' > 10%, then the model is of low quality and this regression equation is not desirable to use</h3>');
		}
		gdiv.push('</div>');
		document.getElementById('generate11').innerHTML=gdiv.join('\n');
	}
}