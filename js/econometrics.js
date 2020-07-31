//Добавление инпутов по кнопке +
function addtr(){
	var row = document.createElement("tr");
	row.innerHTML = "<td><input type='number' class='x'> </td><td><input type='number' class='y'></td>";
	document.getElementById("tbody").appendChild(row);
}

//Удаление инпутов по кнопке x
function removetr(){
	var inputs = document.getElementsByTagName("input").length;
	if(inputs > 6){
		document.getElementById("tbody").removeChild(tbody.lastChild);
	}
}

function calc(){
	//Получение выбронного тренда через селект
	var selectValue = document.getElementById('select').value;

	//Получение выбронной степени округления чисел через селект
	var selectRound = document.getElementById('select-round').value;

	inpx = document.getElementsByClassName('x');
	arrx = fun_arrx();
	inpy = document.getElementsByClassName('y');
	arry = fun_arry();
	bool = fun_check();

	//Записываем массив иксов из инпутов с классов x
	function fun_arrx(){
		var arrx = [];
		for (i = 0; i < inpx.length; i++){
			arrx[i] = parseFloat(parseFloat(inpx[i].value).toFixed(selectRound));
		}
	return arrx;
	}

	//Записываем массив игреков из инпутов с классов y
	function fun_arry(){
		var arry = [];
		for (i = 0; i < inpy.length; i++){
			arry[i] = parseFloat(parseFloat(inpy[i].value).toFixed(selectRound));
		}
	return arry;
	}

	//Проверка перед расчетом 
	function fun_check(){
		var bool = 0;

		//Проверка инпутов на заполненность
		for (i = 0; i < arrx.length; i++){
			if(isNaN(arrx[i]) || isNaN(arry[i])){
				bool = 1;
				alert("Необходимо заполнить все ячейки X и Y");
				break;
			}
		}

		//Проверка для параболического тренда
		if(selectValue == 2 && arrx.length < 4 && bool == 0){
			bool = 1;
			alert("Необходимо указать количество наблюдений >= 4 (n >= 4)");
		}
	return bool;
	}

	//Суммируем все значения из массива иксов
	function fun_sum_arrx(){
		var sumx = 0;
		for(var i = 0; i<arrx.length; i++){
			sumx += parseFloat(arrx[i]);
		}
	return sumx;
	}

	//Суммируем все значения из массива игреков
	function fun_sum_arry(){
		var sumy = 0;
		for(i = 0; i<arry.length; i++){
			sumy += parseFloat(arry[i]);
		}
	return sumy;
	}

	//Записываем массив значений иксов во 2 степени
	function fun_arr_pow2x(){
		var arr_pow2x = [];
		for(i = 0; i<arrx.length; i++){
			arr_pow2x[i] = parseFloat(parseFloat(arrx[i]**2).toFixed(selectRound));
		}
	return arr_pow2x;
	}

	//Сумма всех иксов во 2 степени
	function fun_sum_arr_pow2x(){
		var pow2x = 0;
		for(i = 0; i<arrx.length; i++){
			pow2x += parseFloat(arrx[i]**2);
		}
	return pow2x;
	}

	//Записываем массив значений иксов в 3 степени
	function fun_arr_pow3x(){
		var arr_pow3x = [];
		for(i = 0; i<arrx.length; i++){
			arr_pow3x[i] = parseFloat(parseFloat(arrx[i]**3).toFixed(selectRound));
		}
	return arr_pow3x;
	}

	//Сумма всех иксов в 3 степени
	function fun_sum_arr_pow3x(){
		var sum_pow3x = 0;
		for(i = 0; i<arrx.length; i++){
			sum_pow3x += parseFloat(arrx[i]**3);
		}
	return sum_pow3x;
	}

	//Записываем массив значений иксов в 4 степени
	function fun_arr_pow4x(){
		var arr_pow4x = [];
		for(i = 0; i<arrx.length; i++){
			arr_pow4x[i] = parseFloat(parseFloat(arrx[i]**4).toFixed(selectRound));
		}
	return arr_pow4x;
	}

	//Сумма всех иксов в 4 степени
	function fun_sum_arr_pow4x(){
		var sum_pow4x = 0;
		for(i = 0; i<arrx.length; i++){
			sum_pow4x += parseFloat(arrx[i]**4);
		}
	return sum_pow4x;
	}

	//Записываем массив значений Xi * Yi
	function fun_arr_multi_x_y(){
		var arr_multi_x_y = [];
		for(i = 0; i<arrx.length; i++){
			arr_multi_x_y[i] = parseFloat((parseFloat(arrx[i]) * parseFloat(arry[i])).toFixed(selectRound));
		}
	return arr_multi_x_y;
	}

	//Суммируем все значения Xi * Yi
	function fun_sum_multi_x_y(){
		var sum_multi_x_y = 0;
		for(i = 0; i<arrx.length; i++){
			sum_multi_x_y += (parseFloat(arrx[i]) * parseFloat(arry[i]));
		}
	return sum_multi_x_y;
	}

	//Записываем массив значений Xi^2 * Yi
	function fun_arr_multi_pow2x_y(){
		var arr_multi_pow2x_y = [];
		for(i = 0; i<arrx.length; i++){
			arr_multi_pow2x_y[i] = parseFloat((parseFloat(arr_pow2x[i]) * parseFloat(arry[i])).toFixed(selectRound));
		}
	return arr_multi_pow2x_y;
	}

	//Суммируем все значения Xi^2 * Yi
	function fun_sum_multi_pow2x_y(){
		var sum_multi_pow2x_y = 0;
		for(i = 0; i<arrx.length; i++){
			sum_multi_pow2x_y += (parseFloat(arr_pow2x[i]) * parseFloat(arry[i]));
		}
	return sum_multi_pow2x_y;
	}

	//Записываем массив иксов под логарифмом
	function fun_arrlnx(){
		var arrlnx = [];
		for (i = 0; i < arrx.length; i++){
			arrlnx[i] = parseFloat((Math.log(parseFloat(arrx[i]))).toFixed(selectRound));
		}
	return arrlnx;
	}

	//Суммируем все значения из массива иксов под натуральным логарифмом
	function fun_sum_arrlnx(){
		var sumlnx = 0;
		for(i = 0; i<arrx.length; i++){
			sumlnx += Math.log(parseFloat(arrx[i]));
		}
	return sumlnx;
	}

	//Записываем массив игреков под логарифмом
	function fun_arrlny(){
		var arrlny = [];
		for (i = 0; i < arry.length; i++){
			arrlny[i] = parseFloat((Math.log(parseFloat(arry[i]))).toFixed(selectRound));
		}
	return arrlny;
	}

	//Суммируем все значения из массива игреков под натуральным логарифмом
	function fun_sum_arrlny(){
		var sumlny = 0;
		for(i = 0; i<arry.length; i++){
			sumlny += Math.log(parseFloat(arry[i]));
		}
	return sumlny;
	}

	//Записываем массив значений иксов во 2 степени под натуральным логарифмом
	function fun_arr_powlnx(){
		var arr_powlnx = [];
		for(i = 0; i<arrlnx.length; i++){
			arr_powlnx[i] = parseFloat((parseFloat(arrlnx[i]**2)).toFixed(selectRound));
		}
	return arr_powlnx;
	}

	//Сумма всех иксов во 2 степени под натуральным логарифмом
	function fun_sum_arr_powlnx(){
		var sumpowlnx = 0;
		for(i = 0; i<arrlnx.length; i++){
			sumpowlnx += (parseFloat(arrlnx[i]**2));
		}
	return sumpowlnx;
	}

	//Записываем массив значений lnXi * lnYi
	function fun_arr_multi_lnx_lny(){
		var arr_multi_lnx_lny = [];
		for(i = 0; i<arrlnx.length; i++){
			arr_multi_lnx_lny[i] = parseFloat((parseFloat(arrlnx[i]) * parseFloat(arrlny[i])).toFixed(selectRound));
		}
	return arr_multi_lnx_lny;
	}

	//Суммируем все значения lnXi * lnYi
	function fun_sum_multi_lnx_lny(){
		var sum_multi_lnx_lny = 0;
		for(i = 0; i<arrlnx.length; i++){
			sum_multi_lnx_lny += parseFloat(arrlnx[i]) * parseFloat(arrlny[i]);
		}
	return sum_multi_lnx_lny;
	}

	//Записываем массив значений Xi * lnYi
	function fun_arr_multi_x_lny(){
		var arr_multi_x_lny = [];
		for(i = 0; i<arrx.length; i++){
			arr_multi_x_lny[i] = parseFloat((parseFloat(arrx[i]) * parseFloat(arrlny[i])).toFixed(selectRound));
		}
	return arr_multi_x_lny;
	}

	//Суммируем все значения Xi * lnYi
	function fun_sum_multi_x_lny(){
		var sum_multi_x_lny = 0;
		for(i = 0; i<arrx.length; i++){
			sum_multi_x_lny += parseFloat(arrx[i]) * parseFloat(arrlny[i]);
		}
	return sum_multi_x_lny;
	}

	//Записываем массив значений lnXi * Yi
	function fun_arr_multi_lnx_y(){
		var arr_multi_lnx_y = [];
		for(i = 0; i<arrx.length; i++){
			arr_multi_lnx_y[i] = parseFloat((parseFloat(arrlnx[i]) * parseFloat(arry[i])).toFixed(selectRound));
		}
	return arr_multi_lnx_y;	
	}

	//Суммируем все значения lnXi * Yi
	function fun_sum_multi_lnx_y(){
		var sum_multi_lnx_y = 0;
		for(i = 0; i<arrx.length; i++){
			sum_multi_lnx_y += parseFloat(arrlnx[i]) * parseFloat(arry[i]);
		}
	return sum_multi_lnx_y;
	}

	//Записываем массив значений 1 / x
	function fun_arr_divis_x(){
		var arr_divis_x = [];
		for(i = 0; i<arrx.length; i++){
			arr_divis_x[i] = parseFloat((1 / arrx[i]).toFixed(selectRound));
		}
	return arr_divis_x;
	}

	//Суммируем значения массива значений 1 / x
	function fun_sum_divis_x(){
		var sum_divis_x = 0;
		for(i = 0; i<arrx.length; i++){
			sum_divis_x += parseFloat(arr_divis_x[i]);
		}
	return sum_divis_x;
	}

	//Записываем массив значений 1 / x^2
	function fun_arr_divis_pow2x(){
		var arr_divis_pow2x = [];
		for(i = 0; i<arrx.length; i++){
			arr_divis_pow2x[i] = parseFloat((1 / arrx[i]**2).toFixed(selectRound));
		}
	return arr_divis_pow2x;
	}

	//Суммируем значения массива значений 1 / x^2
	function fun_sum_divis_pow2x(){
		var sum_divis_pow2x = 0;
		for(i = 0; i<arrx.length; i++){
			sum_divis_pow2x += parseFloat(arr_divis_pow2x[i]);
		}
	return sum_divis_pow2x;
	}

	//Записываем массив значений y / x
	function fun_arr_divis_y_x(){
		var arr_divis_y_x = [];
		for(i = 0; i<arrx.length; i++){
			arr_divis_y_x[i] = parseFloat((arry[i] / arrx[i]).toFixed(selectRound));
		}
	return arr_divis_y_x;
	}

	//Суммируем значения массива значений y / x
	function fun_sum_divis_y_x(){
		var sum_divis_y_x = 0;
		for(i = 0; i<arrx.length; i++){
			sum_divis_y_x += parseFloat(arr_divis_y_x[i]);
		}
	return sum_divis_y_x;
	}

	//Начало расчетов
	if(bool == 0){

		//Общие значения
		var inputs = document.getElementsByTagName("input").length;
		var n = inputs / 2;
		var sumx = parseFloat(fun_sum_arrx().toFixed(selectRound));
		var sumy = parseFloat(fun_sum_arry().toFixed(selectRound));
		var midy = parseFloat((sumy / n).toFixed(selectRound));

		//Расчет значений для линейного тренда
		if(selectValue == 0){
			var arr_pow2x = fun_arr_pow2x();
			var sum_pow2x = parseFloat(fun_sum_arr_pow2x().toFixed(selectRound));
			var arr_multi_x_y = fun_arr_multi_x_y();
			var sum_multi_x_y = parseFloat(fun_sum_multi_x_y().toFixed(selectRound));
		}

		//Расчет значений для степенного тренда
		if(selectValue == 1){
			var arrlnx = fun_arrlnx();
			var sumlnx = parseFloat((fun_sum_arrlnx()).toFixed(selectRound));
			var arrlny = fun_arrlny();
			var sumlny = parseFloat((fun_sum_arrlny()).toFixed(selectRound));
			var arr_powlnx = fun_arr_powlnx();
			var sumpowlnx = parseFloat((fun_sum_arr_powlnx()).toFixed(selectRound));
			var arr_multi_lnx_lny = fun_arr_multi_lnx_lny();
			var sum_multi_lnx_lny = parseFloat((fun_sum_multi_lnx_lny()).toFixed(selectRound));
		}

		//Расчет значений для параболического тренда
		if(selectValue == 2){
			var arr_pow2x = fun_arr_pow2x();
			var sumpow2x = parseFloat((fun_sum_arr_pow2x()).toFixed(selectRound));
			var arr_pow3x = fun_arr_pow3x();
			var sumpow3x = parseFloat((fun_sum_arr_pow3x()).toFixed(selectRound));
			var arr_pow4x = fun_arr_pow4x();
			var sumpow4x = parseFloat((fun_sum_arr_pow4x()).toFixed(selectRound));
			var arr_multi_x_y = fun_arr_multi_x_y();
			var sum_multi_x_y = parseFloat((fun_sum_multi_x_y()).toFixed(selectRound));
			var arr_multi_pow2x_y = fun_arr_multi_pow2x_y();
			var sum_multi_pow2x_y = parseFloat((fun_sum_multi_pow2x_y()).toFixed(selectRound));
		}

		//Расчет значений для гиперболического тренда
		if(selectValue == 3){
			var arr_divis_x = fun_arr_divis_x();
			var sum_divis_x = parseFloat((fun_sum_divis_x()).toFixed(selectRound));
			var arr_divis_pow2x = fun_arr_divis_pow2x();
			var sum_divis_pow2x = parseFloat((fun_sum_divis_pow2x()).toFixed(selectRound));
			var arr_divis_y_x = fun_arr_divis_y_x();
			var sum_divis_y_x = parseFloat((fun_sum_divis_y_x()).toFixed(selectRound));
		}

		//Расчет значений для экспоненциального и показательного тренда
		if(selectValue == 4 || selectValue == 6){
			var arrlny = fun_arrlny();
			var sumlny = parseFloat((fun_sum_arrlny()).toFixed(selectRound));
			var arr_pow2x = fun_arr_pow2x();
			var sumpow2x = parseFloat((fun_sum_arr_pow2x()).toFixed(selectRound));
			var arr_multi_x_lny = fun_arr_multi_x_lny();
			var sum_multi_x_lny = parseFloat((fun_sum_multi_x_lny()).toFixed(selectRound));
		}

		//Расчет значений для логарифмического тренда
		if(selectValue == 5){
			var arrlnx = fun_arrlnx();
			var sumlnx = parseFloat((fun_sum_arrlnx()).toFixed(selectRound));
			var arr_powlnx = fun_arr_powlnx();
			var sum_powlnx = parseFloat((fun_sum_arr_powlnx()).toFixed(selectRound));
			var arr_multi_lnx_y = fun_arr_multi_lnx_y();
			var sum_multi_lnx_y = parseFloat((fun_sum_multi_lnx_y()).toFixed(selectRound));
		}

		//Нахождение a и b для линейного тренда
		if(selectValue == 0){
			var b = parseFloat(((sum_multi_x_y - (sumx * sumy / n)) / (sum_pow2x - (sumx * sumx / n))).toFixed(selectRound));
			var a = parseFloat(((sumy - (sumx * b)) / n).toFixed(selectRound));
		}

		//Нахождение a и b для степенного тренда
		if(selectValue == 1){
			var b = parseFloat(((sum_multi_lnx_lny - (sumlnx * sumlny / n)) / (sumpowlnx - (sumlnx * sumlnx / n))).toFixed(selectRound));
			var a = parseFloat(((sumlny - (sumlnx * b)) / n).toFixed(selectRound));
			var a_exp = parseFloat((Math.exp(a)).toFixed(selectRound));
		}

		//Нахождение a, b, c для параболического тренда
		if(selectValue == 2){
			var d = parseFloat((n * sumpow2x * sumpow4x) + (sumx * sumpow3x * sumpow2x) + (sumpow2x * sumx * sumpow3x) - (sumpow2x * sumpow2x * sumpow2x) - (sumpow3x * sumpow3x * n) - (sumpow4x * sumx * sumx));
			var da = parseFloat((sumy * sumpow2x * sumpow4x) + (sumx * sumpow3x * sum_multi_pow2x_y) + (sumpow2x * sum_multi_x_y * sumpow3x) - (sum_multi_pow2x_y * sumpow2x * sumpow2x) - (sumpow3x * sumpow3x * sumy) - (sumpow4x * sum_multi_x_y * sumx));
			var db = parseFloat((n * sum_multi_x_y * sumpow4x) + (sumy * sumpow3x * sumpow2x) + (sumpow2x * sumx * sum_multi_pow2x_y) - (sumpow2x * sum_multi_x_y * sumpow2x) - (sum_multi_pow2x_y * sumpow3x * n) - (sumpow4x * sumx * sumy));
			var dc = parseFloat((n * sumpow2x * sum_multi_pow2x_y) + (sumx * sum_multi_x_y * sumpow2x) + (sumy * sumx * sumpow3x) - (sumpow2x * sumpow2x * sumy) - (sumpow3x * sum_multi_x_y * n) - (sum_multi_pow2x_y * sumx * sumx));
			var a = parseFloat((da / d).toFixed(selectRound));
			var b = parseFloat((db / d).toFixed(selectRound));
			var c = parseFloat((dc / d).toFixed(selectRound));
		}

		//Нахождение a и b для гиперболического тренда
		if(selectValue == 3){
			var b = parseFloat(((sum_divis_y_x - (sum_divis_x * sumy / n)) / (sum_divis_pow2x - (sum_divis_x * sum_divis_x / n))).toFixed(selectRound));
			var a = parseFloat(((sumy - (sum_divis_x * b)) / n).toFixed(selectRound));
		}

		//Нахождение a и b для экспоненциального тренда
		if(selectValue == 4){
			var b = parseFloat(((sum_multi_x_lny - (sumx * sumlny / n)) / (sumpow2x - (sumx * sumx / n))).toFixed(selectRound));
			var a = parseFloat(((sumlny - (sumx * b)) / n).toFixed(selectRound));
			var a_exp = parseFloat((Math.exp(a)).toFixed(selectRound));
		}

		//Нахождение a и b для логарифмического тренда
		if(selectValue == 5){
			var b = parseFloat(((sum_multi_lnx_y - (sumlnx * sumy / n)) / (sum_powlnx - (sumlnx * sumlnx / n))).toFixed(selectRound));
			var a = parseFloat(((sumy - (sumlnx * b)) / n).toFixed(selectRound));
		}

		//Нахождение a и b для показательного тренда
		if(selectValue == 6){
			var b = parseFloat(((sum_multi_x_lny - (sumx * sumlny / n)) / (sumpow2x - (sumx * sumx / n))).toFixed(selectRound));
			var a = parseFloat(((sumlny - (sumx * b)) / n).toFixed(selectRound));
			var a_exp = parseFloat((Math.exp(a)).toFixed(selectRound));
			var b_exp = parseFloat((Math.exp(b)).toFixed(selectRound));
		}

		var arrmody = [];

		//Расчет и запись значений Ymod для линейного тренда
		if(selectValue == 0){
			for(i = 0; i<arrx.length; i++){
				arrmody[i] = parseFloat((parseFloat(arrx[i]) * b + a).toFixed(selectRound));
			}
		}

		//Расчет и запись значений Ymod для степенного тренда
		if(selectValue == 1){
			for(i = 0; i<arrx.length; i++){
				arrmody[i] = parseFloat((a_exp * parseFloat(arrx[i])**b).toFixed(selectRound));
			}
		}

		//Расчет и запись значений Ymod для параболического тренда
		if(selectValue == 2){
			for(i = 0; i<arrx.length; i++){
				arrmody[i] = parseFloat((a + b * parseFloat(arrx[i]) + c * parseFloat(arr_pow2x[i])).toFixed(selectRound));
			}
		}

		//Расчет и запись значений Ymod для гиперболического тренда
		if(selectValue == 3){
			for(i = 0; i<arrx.length; i++){
				arrmody[i] = parseFloat((a + (b / parseFloat(arrx[i]))).toFixed(selectRound));
			}
		}

		//Расчет и запись значений Ymod для экспоненциального тренда
		if(selectValue == 4){
			for(i = 0; i<arrx.length; i++){
				arrmody[i] = parseFloat((a_exp * (Math.exp(b * parseFloat(arrx[i])))).toFixed(selectRound));
			}
		}

		//Расчет и запись значений Ymod для логарифмического тренда
		if(selectValue == 5){
			for(i = 0; i<arrlnx.length; i++){
				arrmody[i] = parseFloat((a + (b * parseFloat(arrlnx[i]))).toFixed(selectRound));
			}
		}

		//Расчет и запись значений Ymod для показательного тренда
		if(selectValue == 6){
			for(i = 0; i<arrx.length; i++){
				arrmody[i] = parseFloat((a_exp * (b_exp**parseFloat(arrx[i]))).toFixed(selectRound));
			}
		}

		//Расчет корреляции для линейного тренда
		if(selectValue == 0){
			var arr_midy_minus_mody_pow = [];
			var sum_midy_minus_mody_pow = 0;
				for(i = 0; i<arrmody.length; i++){
					arr_midy_minus_mody_pow[i] = parseFloat(((midy - parseFloat(arrmody[i]))**2).toFixed(selectRound));
					sum_midy_minus_mody_pow += ((midy - parseFloat(arrmody[i]))**2);
				}
			var arr_y_minus_midy_pow = [];
			var sum_y_minus_midy_pow = 0;
				for(i = 0; i<arry.length; i++){
					arr_y_minus_midy_pow[i] = parseFloat( ((parseFloat(arry[i]) - midy)**2).toFixed(selectRound) );
					sum_y_minus_midy_pow += ((parseFloat(arry[i]) - midy)**2);
				}
			sum_midy_minus_mody_pow = parseFloat(sum_midy_minus_mody_pow.toFixed(selectRound));
			sum_y_minus_midy_pow = parseFloat(sum_y_minus_midy_pow.toFixed(selectRound));
			var correl = parseFloat((Math.abs((sum_midy_minus_mody_pow / sum_y_minus_midy_pow))**(1/2)).toFixed(selectRound));
		}

		//Расчет корреляции для степенного, параболического, гиперболического, экспоненциального, логарифмического и показательного тренда
		if(selectValue == 1 || selectValue == 2 || selectValue == 3 || selectValue == 4 || selectValue == 5 || selectValue == 6){
			var arr_y_minus_mody_pow = [];
			var sum_y_minus_mody_pow = 0;
				for(i = 0; i<arry.length; i++){
					arr_y_minus_mody_pow[i] = parseFloat(((parseFloat(arry[i]) - parseFloat(arrmody[i]))**2).toFixed(selectRound));
					sum_y_minus_mody_pow += ((parseFloat(arry[i]) - parseFloat(arrmody[i]))**2);
				}
			var arr_y_minus_midy_pow = [];
			var sum_y_minus_midy_pow = 0;
				for(i = 0; i<arry.length; i++){
					arr_y_minus_midy_pow[i] = parseFloat(((parseFloat(arry[i]) - midy)**2).toFixed(selectRound));
					sum_y_minus_midy_pow += ((parseFloat(arry[i]) - midy)**2);
				}
			sum_y_minus_mody_pow = parseFloat(sum_y_minus_mody_pow.toFixed(selectRound));	
			sum_y_minus_midy_pow = parseFloat(sum_y_minus_midy_pow.toFixed(selectRound));
			var correl = parseFloat((Math.abs((1 - (sum_y_minus_mody_pow / sum_y_minus_midy_pow)))**(1/2)).toFixed(selectRound));
		}	

		//Расчет коэффициента(индекса) детерминации и влияние Y на X для любого вида тренда
		var deter = parseFloat((correl**2).toFixed(selectRound));
		var deter_100 = parseFloat((deter * 100).toFixed(selectRound));
		var deter_other = parseFloat((100 - deter_100).toFixed(selectRound));

		//Расчет критерия Фишера для линейного, степенного, гиперболического, экспоненциального, логарифмического и показательного тренда
		if(selectValue == 0 || selectValue == 1 || selectValue == 3 || selectValue == 4 || selectValue == 5 || selectValue == 6){
			var fisher = parseFloat(((deter / (1 - deter)) * (n - 2)).toFixed(selectRound));
			var arr_fisher_tabl = ["161.45", "18.51", "10.13", "7.71", "6.61", "5.99", "5.59", "5.32", "5.12", "4.96", "4.84", "4.75", "4.67", "4.60", "4.54", "4.49", "4.45", "4.41", "4.38", "4.35", "4.32", "4.30", "4.28", "4.26", "4.24", "4.22", "4.21", "4.20", "4.18", "4.17"];
			var fisher_tabl = 0;
				for(i = 0; i < n-2; i++){
					fisher_tabl = parseFloat(arr_fisher_tabl[i]);
				}
		}

		//Расчет критерия Фишера для параболического тренда
		if(selectValue == 2){
			var fisher = parseFloat(((deter / (1 - deter)) * ((n - 3) / 2)).toFixed(selectRound));
			var arr_fisher_tabl = ["199.50", "19", "9.55", "6.94", "5.79", "5.14", "4.74", "4.46", "4.26", "4.10", "3.98", "3.89", "3.81", "3.74", "3.68", "3.63", "3.59", "3.55", "3.52", "3.49", "3.47", "3.44", "3.42", "3.40", "3.38", "3.37", "3.35", "3.34", "3.33", "3.32"];
			var fisher_tabl = 0;
				for(i = 0; i < n-3; i++){
					fisher_tabl = parseFloat(arr_fisher_tabl[i]);
				}
		}	

		//Расчет ошибки аппроксимации для любого вида тренда
		var err_apr = 0;
			for(i = 0; i<arrx.length; i++){
				err_apr += Math.abs((parseFloat(arry[i]) - parseFloat(arrmody[i])) / parseFloat(arry[i]));
			}
		err_apr = parseFloat(((1 / n) * err_apr * 100).toFixed(selectRound));

		//Генерация html
		var w_f = 2;
			if(selectValue == 2){w_f = 3;}
		var w_eq = "";
			if(selectValue == 0){w_eq = "a + (b * x)";}
			if(selectValue == 1){w_eq = "a * x^b";}
			if(selectValue == 2){w_eq = "a + (b * x) + (c * x^2)";}
			if(selectValue == 3){w_eq = "a + (b / x)";}
			if(selectValue == 4){w_eq = "a * e^bx";}
			if(selectValue == 5){w_eq = "a + (b / x)";}
			if(selectValue == 6){w_eq = "a + (b * lnX)";}
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
			if(selectValue == 2){w_eq2 = 'a * '+n+' + b * '+sumx+' + c * '+sumpow2x+' = '+sumy+'<br>a * '+sumx+' + b * '+sumpow2x+' + c * '+sumpow3x+' = '+sum_multi_x_y+'<br>a * '+sumpow2x+' + b * '+sumpow3x+' + c * '+sumpow4x+' = '+sum_multi_pow2x_y+'';}
			if(selectValue == 3){w_eq2 = 'a * '+n+' + b * '+sum_divis_x+' = '+sumy+'<br>a * '+sum_divis_x+' + b * '+sum_divis_pow2x+' = '+sum_divis_y_x+'';}
			if(selectValue == 4){w_eq2 = 'a * '+n+' + b * '+sumx+' = '+sumlny+'<br>a * '+sumx+' + b * '+sumpow2x+' = '+sum_multi_x_lny+'';}
			if(selectValue == 5){w_eq2 = 'a * '+n+' + b * '+sumlnx+' = '+sumy+'<br>a * '+sumlnx+' + b * '+sum_powlnx+' = '+sum_multi_lnx_y+'';}
			if(selectValue == 6){w_eq2 = 'a * '+n+' + b * '+sumx+' = '+sumlny+'<br>a * '+sumx+' + b * '+sumpow2x+' = '+sum_multi_x_lny+'';}
		var w_eqab = "";
			if(selectValue == 0 || selectValue == 1 || selectValue == 3 || selectValue == 4 || selectValue == 5 || selectValue == 6){w_eqab = '<h3>Сосчитаем значения a и b:<br><br>a = '+a+'; b = '+b+'</h3>'}
			if(selectValue == 2){w_eqab = '<h3>Для нахождения a, b, c - воспользуемся методом Крамера:<br><br>Для начала сосчитаем делитель Крамера(D), для этого построим матрицу 1:</h3><h4>Матрица 1</h4><table class="generate-table"><tbody><tr><td>'+n+'</td><td>'+sumx+'</td><td>'+sumpow2x+'</td><td>'+n+'</td><td>'+sumx+'</td></tr><tr><td>'+sumx+'</td><td>'+sumpow2x+'</td><td>'+sumpow3x+'</td><td>'+sumx+'</td><td>'+sumpow2x+'</td></tr><tr><td>'+sumpow2x+'</td><td>'+sumpow3x+'</td><td>'+sumpow4x+'</td><td>'+sumpow2x+'</td><td>'+sumpow3x+'</td></tr></tbody></table><h3>D = ('+n+' * '+sumpow2x+' * '+sumpow4x+') + ('+sumx+' * '+sumpow3x+' * '+sumpow2x+') + ('+sumpow2x+' * '+sumx+' * '+sumpow3x+') - ('+sumpow2x+' * '+sumpow2x+' * '+sumpow2x+') - ('+sumpow3x+' * '+sumpow3x+' * '+n+') - ('+sumpow4x+' * '+sumx+' * '+sumx+') = '+d+'</h3><h3>Теперь сосчитаем 1 числитель Крамера(Da), для этого построим матрицу 2:</h3><h4>Матрица 2</h4><table class="generate-table"><tbody><tr><td>'+sumy+'</td><td>'+sumx+'</td><td>'+sumpow2x+'</td><td>'+sumy+'</td><td>'+sumx+'</td></tr><tr><td>'+sum_multi_x_y+'</td><td>'+sumpow2x+'</td><td>'+sumpow3x+'</td><td>'+sum_multi_x_y+'</td><td>'+sumpow2x+'</td></tr><tr><td>'+sum_multi_pow2x_y+'</td><td>'+sumpow3x+'</td><td>'+sumpow4x+'</td><td>'+sum_multi_pow2x_y+'</td><td>'+sumpow3x+'</td></tr></tbody></table><h3>Da = ('+sumy+' * '+sumpow2x+' * '+sumpow4x+') + ('+sumx+' * '+sumpow3x+' * '+sum_multi_pow2x_y+') + ('+sumpow2x+' * '+sum_multi_x_y+' * '+sumpow3x+') - ('+sum_multi_pow2x_y+' * '+sumpow2x+' * '+sumpow2x+') - ('+sumpow3x+' * '+sumpow3x+' * '+sumy+') - ('+sumpow4x+' * '+sum_multi_x_y+' * '+sumx+') = '+da+'</h3><h3>Теперь сосчитаем 2 числитель Крамера(Db), для этого построим матрицу 3:</h3> <h4>Матрица 3</h4><table class="generate-table"><tbody><tr><td>'+n+'</td><td>'+sumy+'</td><td>'+sumpow2x+'</td><td>'+n+'</td><td>'+sumy+'</td></tr><tr><td>'+sumx+'</td><td>'+sum_multi_x_y+'</td><td>'+sumpow3x+'</td><td>'+sumx+'</td><td>'+sum_multi_x_y+'</td></tr><tr><td>'+sumpow2x+'</td><td>'+sum_multi_pow2x_y+'</td><td>'+sumpow4x+'</td><td>'+sumpow2x+'</td><td>'+sum_multi_pow2x_y+'</td></tr></tbody></table><h3>Db = ('+n+' * '+sum_multi_x_y+' * '+sumpow4x+') + ('+sumy+' * '+sumpow3x+' * '+sumpow2x+') + ('+sumpow2x+' * '+sumx+' * '+sum_multi_pow2x_y+') - ('+sumpow2x+' * '+sum_multi_x_y+' * '+sumpow2x+') - ('+sum_multi_pow2x_y+' * '+sumpow3x+' * '+n+') - ('+sumpow4x+' * '+sumx+' * '+sumy+') = '+db+'</h3><h3>Теперь сосчитаем 3 числитель Крамера(Dc), для этого построим матрицу 4:</h3> <h4>Матрица 4</h4><table class="generate-table"><tbody><tr><td>'+n+'</td><td>'+sumx+'</td><td>'+sumy+'</td><td>'+n+'</td><td>'+sumx+'</td></tr><tr><td>'+sumx+'</td><td>'+sumpow2x+'</td><td>'+sum_multi_x_y+'</td><td>'+sumx+'</td><td>'+sumpow2x+'</td></tr><tr><td>'+sumpow2x+'</td><td>'+sumpow3x+'</td><td>'+sum_multi_pow2x_y+'</td><td>'+sumpow2x+'</td><td>'+sumpow3x+'</td></tr></tbody></table><h3>Dc = ('+n+' * '+sumpow2x+' * '+sum_multi_pow2x_y+') + ('+sumx+' * '+sum_multi_x_y+' * '+sumpow2x+') + ('+sumy+' * '+sumx+' * '+sumpow3x+') - ('+sumpow2x+' * '+sumpow2x+' * '+sumy+') - ('+sumpow3x+' * '+sum_multi_x_y+' * '+n+') - ('+sum_multi_pow2x_y+' * '+sumx+' * '+sumx+') = '+dc+'</h3><h3>Теперь сосчитаем значения a, b, c:<br><br>a = Da / D = '+a+';<br>b = Db / D = '+b+';<br>c = Dc / D = '+c+';</h3>';}
		var w_eqymod = "";
			if(selectValue == 0){w_eqymod = ''+b+' * X + '+a+'';}
			if(selectValue == 1){w_eqymod = 'e^'+a+' * x^'+b+'<br><br>Избавимся от экспоненты и уравнение примет следующий вид:<br><br>Ymod = '+a_exp+' * x^'+b+'';}
			if(selectValue == 2){w_eqymod = ''+a+' + ('+b+' * X) + ('+c+' * X^2)';}
			if(selectValue == 3){w_eqymod = ''+a+' + ('+b+' / X)';}
			if(selectValue == 4){w_eqymod = ''+a_exp+' * e^('+b+' * X)';}
			if(selectValue == 5){w_eqymod = ''+a+' + ('+b+' * lnX)';}
			if(selectValue == 6){w_eqymod = 'e^'+a+' * e^('+b+'^X)<br><br>Избавимся от экспонент и уравнение примет следующий вид:<br><br>Ymod = '+a_exp+' * '+b_exp+'^X';}
		var w_ic = "Индекс";
			if(selectValue == 0){w_ic = "Коэффициент";}

		//Генерация 1 блока
		var div1 = ['<h2>Решение</h2><h3>Линейное уравнение регрессии имеет вид:<br><br>y = '+w_eq+'</h3><h3>Сосчитаем параметры уравнения a и b через систему линейных уравнений<br><br>Система линейных уравнений для нахождения значений a и b:<br><br>'+w_sleq+'</h3><h3>Для решения системы уравнений построим и сосчитаем значения таблицы 1:</h3>'];
		document.getElementById('generate1').innerHTML=div1.join('\n');

		//Генерация 3 блока
		var div2 = ['<h3>Теперь система уравнений будет иметь следующий вид:<br><br>'+w_eq2+'</h3>'+w_eqab+'<h3>Уравнение регрессии будет иметь следующий вид:<br><br>Ymod = '+w_eqymod+'</h3><h3>Для дальнейшего решения и оценки качества модели построим и сосчитаем значения таблицы 2:</h3>'];
		document.getElementById('generate3').innerHTML=div2.join('\n');

		//Генерация 2, 4 и 5 блоков для линейного тренда
		if(selectValue == 0){
			var table1 = ['<table class="generate-table"><h4>Таблица 1<h4>'];
			table1.push('<tr><td></td><td>X</td><td>Y</td><td>X^2</td><td>X * Y</td></tr>');
				for (i = 0; i < n; i++){
					table1.push('<tr><td>'+(i + 1)+'</td><td>'+arrx[i]+'</td><td>'+arry[i]+'</td><td>'+arr_pow2x[i]+'</td><td>'+arr_multi_x_y[i]+'</td></tr>');
				}
			table1.push('<tr><td>Сумма</td><td>'+sumx+'</td><td>'+sumy+'</td><td>'+sum_pow2x+'</td><td>'+sum_multi_x_y+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=table1.join('\n');

			var table2 = ['<table class="generate-table"><h4>Таблица 2<h4>'];
			table2.push('<tr><td></td><td>Y</td><td>Ymod</td><td>(Yсред - Ymod)^2</td><td>(Y - Yсред)^2</td></tr>');
				for (i = 0; i < n; i++){
					table2.push('<tr><td>'+(i + 1)+'</td><td>'+arry[i]+'</td><td>'+arrmody[i]+'</td><td>'+arr_midy_minus_mody_pow[i]+'</td><td>'+arr_y_minus_midy_pow[i]+'</td></tr>');
				}
			table2.push('<tr><td>Сумма</td><td>'+sumy+'</td><td></td><td>'+sum_midy_minus_mody_pow+'</td><td>'+sum_y_minus_midy_pow+'</td></tr>');
			table2.push('<tr><td>Среднее</td><td>'+midy+'</td><td></td><td></td><td></td></tr></table>');
			document.getElementById('generate4').innerHTML=table2.join('\n');

			var div3 = ['<h3>Сосчитаем коэффициент корреляции по формуле:<br><br>R = &radic;<span> ∑((Yсред - Ymod)^2) / ∑((Y - Yсред)^2)</span><br><br>R = &radic;<span> '+sum_midy_minus_mody_pow+' / '+sum_y_minus_midy_pow+'</span> = '+correl+'</h3><h3>Для оценки связи между X и Y воспользуемся таблицей 3:</h3>'];
			document.getElementById('generate5').innerHTML=div3.join('\n');
		}

		//Генерация 2 блока для степенного тренда
		if(selectValue == 1){
			var table1 = ['<table class="generate-table"><h4>Таблица 1<h4>'];
			table1.push('<tr><td></td><td>lnX</td><td>lnY</td><td>lnX^2</td><td>lnX * lnY</td></tr>');
				for (i = 0; i < n; i++){
					table1.push('<tr><td>'+(i + 1)+'</td><td>'+arrlnx[i]+'</td><td>'+arrlny[i]+'</td><td>'+arr_powlnx[i]+'</td><td>'+arr_multi_lnx_lny[i]+'</td></tr>');
				}
			table1.push('<tr><td>Сумма</td><td>'+sumlnx+'</td><td>'+sumlny+'</td><td>'+sumpowlnx+'</td><td>'+sum_multi_lnx_lny+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=table1.join('\n');
		}

		//Генерация 2 блока для параболического тренда
		if(selectValue == 2){			
			var table1 = ['<table class="generate-table"><h4>Таблица 1<h4>'];
			table1.push('<tr><td></td><td>X</td><td>Y</td><td>X^2</td><td>X^3</td><td>X^4</td><td>X * Y</td> <td>X^2 * Y</td></tr>');
				for (i = 0; i < n; i++){
					table1.push('<tr><td>'+(i + 1)+'</td><td>'+arrx[i]+'</td><td>'+arry[i]+'</td><td>'+arr_pow2x[i]+'</td><td>'+arr_pow3x[i]+'</td><td>'+arr_pow4x[i]+'</td><td>'+arr_multi_x_y[i]+'</td><td>'+arr_multi_pow2x_y[i]+'</td></tr>');
				}
			table1.push('<tr><td>Сумма</td><td>'+sumx+'</td><td>'+sumy+'</td><td>'+sumpow2x+'</td><td>'+sumpow3x+'</td><td>'+sumpow4x+'</td><td>'+sum_multi_x_y+'</td><td>'+sum_multi_pow2x_y+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=table1.join('\n');
		}

		//Генерация 2 блока для гиперболического тренда
		if(selectValue == 3){		
			var table1 = ['<table class="generate-table"><h4>Таблица 1<h4>'];
			table1.push('<tr><td></td><td>Y</td><td>1 / X</td><td>1 / X^2</td><td>Y / X</td></tr>');
				for (i = 0; i < n; i++){
					table1.push('<tr><td>'+(i + 1)+'</td><td>'+arry[i]+'</td><td>'+arr_divis_x[i]+'</td><td>'+arr_divis_pow2x[i]+'</td><td>'+arr_divis_y_x[i]+'</td></tr>');
				}
			table1.push('<tr><td>Сумма</td><td>'+sumy+'</td><td>'+sum_divis_x+'</td><td>'+sum_divis_pow2x+'</td><td>'+sum_divis_y_x+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=table1.join('\n');
		}

		//Генерация 2 блока для экспоненциального тренда
		if(selectValue == 4){
			var table1 = ['<table class="generate-table"><h4>Таблица 1<h4>'];
			table1.push('<tr><td></td><td>X</td><td>lnY</td><td>X^2</td><td>X * lnY</td></tr>');
				for (i = 0; i < n; i++){
					table1.push('<tr><td>'+(i + 1)+'</td><td>'+arrx[i]+'</td><td>'+arrlny[i]+'</td><td>'+arr_pow2x[i]+'</td><td>'+arr_multi_x_lny[i]+'</td></tr>');
				}
			table1.push('<tr><td>Сумма</td><td>'+sumx+'</td><td>'+sumlny+'</td><td>'+sumpow2x+'</td><td>'+sum_multi_x_lny+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=table1.join('\n');
		}

		//Генерация 2 блока для логарифмического тренда
		if(selectValue == 5){			
			var table1 = ['<table class="generate-table"><h4>Таблица 1<h4>'];
			table1.push('<tr><td></td><td>Y</td><td>lnX</td><td>ln(X^2)</td><td>Y * lnX</td></tr>');
				for (i = 0; i < n; i++){
					table1.push('<tr><td>'+(i + 1)+'</td><td>'+arry[i]+'</td><td>'+arrlnx[i]+'</td><td>'+arr_powlnx[i]+'</td><td>'+arr_multi_lnx_y[i]+'</td></tr>');
				}
			table1.push('<tr><td>Сумма</td><td>'+sumy+'</td><td>'+sumlnx+'</td><td>'+sum_powlnx+'</td><td>'+sum_multi_lnx_y+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=table1.join('\n');
		}

		//Генерация 2 блока для показательного тренда
		if(selectValue == 6){
			var table1 = ['<table class="generate-table"><h4>Таблица 1<h4>'];
			table1.push('<tr><td></td><td>X</td><td>lnY</td><td>X^2</td><td>X * lnY</td></tr>');
				for (i = 0; i < n; i++){
					table1.push('<tr><td>'+(i + 1)+'</td><td>'+arrx[i]+'</td><td>'+arrlny[i]+'</td><td>'+arr_pow2x[i]+'</td><td>'+arr_multi_x_lny[i]+'</td></tr>');
				}
			table1.push('<tr><td>Сумма</td><td>'+sumx+'</td><td>'+sumlny+'</td><td>'+sumpow2x+'</td><td>'+sum_multi_x_lny+'</td></tr></table>');
			document.getElementById('generate2').innerHTML=table1.join('\n');
		}

		//Генерация 4 и 5 блоков для степенного, параболического, гиперболического, экспоненциального, логарифмического и показательного тренда
		if(selectValue == 1 || selectValue == 2 || selectValue == 3 || selectValue == 4 || selectValue == 5 || selectValue == 6){
			var table2 = ['<table class="generate-table"><h4>Таблица 2<h4>'];
			table2.push('<tr><td></td><td>Y</td><td>Ymod</td><td>(Y-Ymod)^2</td><td>(Y - Yсред)^2</td></tr>');
				for (i = 0; i < n; i++){
					table2.push('<tr><td>'+(i + 1)+'</td><td>'+arry[i]+'</td><td>'+arrmody[i]+'</td><td>'+arr_y_minus_mody_pow[i]+'</td><td>'+arr_y_minus_midy_pow[i]+'</td></tr> ');
				}
			table2.push('<tr><td>Сумма</td><td>'+sumy+'</td><td></td><td>'+sum_y_minus_mody_pow+'</td><td>'+sum_y_minus_midy_pow+'</td></tr>');
			table2.push('<tr><td>Среднее</td><td>'+midy+'</td><td></td><td></td><td></td></tr></table>');
			document.getElementById('generate4').innerHTML=table2.join('\n');
			
			var div3 = ['<h3>Сосчитаем индекс корреляции по формуле:<br><br>R = &radic;<span> 1 - (∑(Y - Ymod)^2) / ∑(Y - Yсред)^2))</span><br><br>R = &radic;<span> 1 - ('+sum_y_minus_mody_pow+' / '+sum_y_minus_midy_pow+')</span> = '+correl+'</h3><h3>Для оценки связи между X и Y воспользуемся таблицей 3:</h3>'];
			document.getElementById('generate5').innerHTML=div3.join('\n');
		}		

		//Общая генерация
		var table3 = ['<table class="generate-table"><h4>Таблица 3<h4><tr><td>R = 0</td><td>Связь отсутствует</td></tr><tr><td>0 < R < 0.2</td><td>Очень слабая связь</td></tr><tr><td>0.2 < R < 0.3</td><td>Слабая связь</td></tr><tr><td>0.3 < R < 0.5</td><td>Умеренная связь</td></tr><tr><td>0.5 < R < 0.7</td><td>Средняя связь</td></tr><tr><td>0.7 < R < 0.9</td><td>Сильная связь</td></tr><tr><td>0.9 < R < 1</td><td>Очень сильная связь</td></tr><tr><td>R = 1</td><td>Функциональная связь</td></tr></table>'];
		document.getElementById('generate6').innerHTML=table3.join('\n');

		var div4 = ['<div>'];
		if(correl == 0){
			div4.push('<h3>'+w_ic+' корреляции = '+correl+' - Связь между X и Y отсутствует</h3>');
		}
		if(correl > 0 && correl < 0.2){
			div4.push('<h3>'+w_ic+' корреляции = '+correl+' - Связь между X и Y очень слабая</h3>');
		}
		if(correl >= 0.2 && correl < 0.3){
			div4.push('<h3>'+w_ic+' корреляции = '+correl+' - Связь между X и Y слабая</h3>');
		}
		if(correl >= 0.3 && correl < 0.5){
			div4.push('<h3>'+w_ic+' корреляции = '+correl+' - Связь между X и Y умеренная</h3>');
		}
		if(correl >= 0.5 && correl < 0.7){
			div4.push('<h3>'+w_ic+' корреляции = '+correl+' - Связь между X и Y средняя</h3>');
		}
		if(correl >= 0.7 && correl < 0.9){
			div4.push('<h3>'+w_ic+' корреляции = '+correl+' - Связь между X и Y высокая</h3>');
		}
		if(correl >= 0.9 && correl < 1){
			div4.push('<h3>'+w_ic+' корреляции = '+correl+' - Связь между X и Y очень высокая</h3>');
		}
		if(correl == 1){
			div4.push('<h3>'+w_ic+' корреляции = '+correl+' - Связь между X и Y функциональная</h3>');
		}
		div4.push('</div>');
		document.getElementById('generate7').innerHTML=div4.join('\n');

		var div5 = ['<h3>Сосчитаем '+w_ic+' детерминации:<br><br>Так как '+w_ic+' детерминации это '+w_ic+' корреляции во 2 степени, то:<br><br>R^2 = '+deter+'</h3><h3>'+w_ic+' детерминации = '+deter+' - На '+deter_100+'% вариация Y обусловлена вариацией X; '+deter_other+'% вариация прочих факторов</h3>'];
		document.getElementById('generate8').innerHTML=div5.join('\n');

		var div6 = ['<h3>Сосчитаем критерий Фишера по формуле:<br><br>F = (R^2 / (1 - R^2)) * (n - '+w_f+')<br><br>F = ('+deter+' / (1 - '+deter+')) * ('+n+' - '+w_f+') = '+fisher+'<br><br>Табличное значение Фишера = '+fisher_tabl+'</h3>'];
		document.getElementById('generate9').innerHTML=div6.join('\n');

		var div7 = ['<div>'];
		if(fisher > fisher_tabl){
			div7.push('<h3>Так как '+fisher+' > '+fisher_tabl+', то '+w_ic+' детерминации статистически значим и уравнение регрессии значимо в целом</h3>');
		}
		if(fisher < fisher_tabl){
			div7.push('<h3>Так как '+fisher+' < '+fisher_tabl+', то '+w_ic+' детерминации статистически не значим и уравнение регрессии не значимо в целом</h3>');
		}
		div7.push('</div>');
		document.getElementById('generate10').innerHTML=div7.join('\n');

		var div8 = ['<div>'];
		div8.push('<h3>Сосчитаем ошибку аппроксимации по формуле:<br><br>A% = (1 / n) * ∑((Y - Ymod) / Y) * 100<br><br>A% = '+err_apr+'%</h3>');
		if(err_apr < 7){
			div8.push('<h3>Так как A% = '+err_apr+' < 7%, то модель является качественной</h3>');
		}
		if(err_apr == 7 && err_apr <= 10){
			div8.push('<h3>Так как A% = '+err_apr+' и находится в пределе от 7% до 10%, то модель является приемлемой</h3>');
		}
		if(err_apr > 7){
			div8.push('<h3>Так как A% = '+err_apr+' > 10%, то модель является не качественной и данное уравнение регрессии не желательно использовать</h3>');
		}
		div8.push('</div>');
		document.getElementById('generate11').innerHTML=div8.join('\n');
	}
}
