//Добавление инпутов по кнопке +
function addtr(){
	var row = document.createElement("tr");
	row.innerHTML = "<td> <input type='text' id='x' class='x'> </td><td> <input type='text' id='y' class='y'> </td>";
	document.getElementById("tbody").appendChild(row);
	var inputs = document.getElementsByTagName("input");
	var inputx = document.getElementById("x");
	var inputy = document.getElementById("y");
	var n = inputs.length / 2;
	inputx.id = "x-"+n;
	inputy.id = "y-"+n;
}

//Удаление инпутов по кнопке x
function removetr(){
	var inputs = document.getElementsByTagName("input").length;
	if(inputs > 6){
		document.getElementById("tbody").removeChild(tbody.lastChild)		
	}
}

function calc(){
	//Получение выбронного тренда через селект
	var selectValue = document.getElementById('select').options.selectedIndex;

	inpx = document.getElementsByClassName('x');
	arrx = [];
	inpy = document.getElementsByClassName('y');
	arry = [];
	fun_arrx();
	fun_arry();

	//Обработка значения из селекта
	if(selectValue == 0){calc_line();}
	if(selectValue == 1){calc_pow();}

	//Записываем массив иксов из инпутов с классов x
	function fun_arrx() {
		for (var i = 0; i < inpx.length; i++){
			arrx[i] = inpx[i].value;
		}
	return arrx;
	}

	//Записываем массив игреков из инпутов с классов y
	function fun_arry() {
		for (var i = 0; i < inpy.length; i++){
			arry[i] = inpy[i].value;
		}
	return arry;
	}

	//Расчет линейного тренда
	function calc_line(){
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
			for(var i = 0; i<arry.length; i++){
				sumy += parseFloat(arry[i]);
			}
		return sumy;
		}

		//Суммируем все значения Xi * Yi
		function fun_sum_multixy(){
			var sum_multixy = 0;
			for(var i = 0; i<arrx.length; i++){
				sum_multixy += (parseFloat(arrx[i]) * parseFloat(arry[i]));
			}
		return sum_multixy;
		}

		//Записываем массив значений Xi * Yi
		function fun_arr_multixy(){
			var arr_multixy = [];
			for(var i = 0; i<arrx.length; i++){
				arr_multixy[i] = (parseFloat(arrx[i]) * parseFloat(arry[i])).toFixed(4);
			}
		return arr_multixy;
		}

		//Сумма всех иксов во 2 степени
		function fun_sum_arr_powx(){
			var powx = 0;
			for(var i = 0; i<arrx.length; i++){
				powx += parseFloat(arrx[i]**2);
			}
		return powx;
		}

		//Записываем массив значений иксов во 2 степени
		function fun_arr_powx(){
			var arr_powx = [];
			var powx = 0;
			for(var i = 0; i<arrx.length; i++){
				arr_powx[i] = parseFloat(arrx[i]**2);
			}
		return arr_powx;
		}

		var inputs = document.getElementsByTagName("input").length;
		var n = inputs / 2;
		var sumx = fun_sum_arrx();
		var sumy = fun_sum_arry();
		var midy = (sumy / n).toFixed(4);
		var sumpowx = fun_sum_arr_powx();
		var sum_multixy = fun_sum_multixy();
		var b = (sum_multixy - (sumx * sumy / n)) / (sumpowx - (sumx * sumx / n));
		var a = (sumy - (sumx * b)) / n;
		var arrmody = [];
			for(var i = 0; i<arrx.length; i++){
				arrmody[i] = (parseFloat(arrx[i]) * b + a).toFixed(4);
			}
		var arr_midy_minus_mody_pow = [];
		var sum_midy_minus_mody_pow = 0;
			for(var i = 0; i<arrmody.length; i++){
				arr_midy_minus_mody_pow[i] = ((midy - parseFloat(arrmody[i]))**2).toFixed(4);
				sum_midy_minus_mody_pow += ((midy - parseFloat(arrmody[i]))**2);
			}
		var arr_y_minus_midy_pow = [];
		var sum_y_minus_midy_pow = 0;
			for(var i = 0; i<arry.length; i++){
				arr_y_minus_midy_pow[i] = ((parseFloat(arry[i]) - midy)**2).toFixed(4);
				sum_y_minus_midy_pow += ((parseFloat(arry[i]) - midy)**2);
			}
		var sum_midy_minus_mody_pow = sum_midy_minus_mody_pow.toFixed(4);
		var sum_y_minus_midy_pow = sum_y_minus_midy_pow.toFixed(4);
		var correl = Math.abs(((sum_midy_minus_mody_pow / sum_y_minus_midy_pow)**(1/2)).toFixed(4));
		var deter = (correl**2).toFixed(4);
		var deter_100 = (deter * 100).toFixed(4);
		var deter_other = (100 - deter_100).toFixed(4);
		var fisher = ((deter / (1 - deter)) * (n - 2)).toFixed(4);
		var arr_fisher_tabl = ["161.45", "18.51", "10.13", "7.71", "6.61", "5.99", "5.59", "5.32", "5.12", "4.96", "4.84", "4.75", "4.67", "4.60", "4.54", "4.49", "4.45", "4.41", "4.38", "4.35", "4.32", "4.30", "4.28", "4.26", "4.24", "4.22", "4.21", "4.20", "4.18", "4.17"];
		var fisher_tabl = 0;
			for(var i = 0; i < n-2; i++){
				fisher_tabl = parseFloat(arr_fisher_tabl[i]);
			}
		var err_apr = 0;
			for(var i = 0; i<arrx.length; i++){
				err_apr += Math.abs((parseFloat(arry[i]) - parseFloat(arrmody[i])) / parseFloat(arry[i]));
			}
		var err_apr = ((1 / n) * err_apr * 100).toFixed(4);

		//Генерация html для линейного тренда
		var generate_x = 0;
		var generate_y = 0;
		var arr_powx = fun_arr_powx();
		var generate_powx = 0;
		var generate_multixy = 0;
		var arr_multixy = fun_arr_multixy();
		var generate_mody = 0;
		var generate_midy_minus_mody_pow = 0;
		var generate_y_minus_midy_pow = 0;

		var div1 = ['<div>'];
		div1.push('<h2>Решение</h2><h3>Линейное уравнение регрессии имеет вид: <br><br> y = b * x + a</h3> <h3>Находим параметры уравнения (a и b) методом наименьших квадратов(МНК)<br><br>Система уравнений МНК:<br><br>a * n + b * ∑X = ∑Y<br>a * ∑X + b * ∑X^2 = ∑(X * Y)</h3> <h3>Для решения системы уравнений построим и сосчитаем значения таблицы 1:</h3>');
		div1.push('</div>');
		document.getElementById('generate1').innerHTML=div1.join('\n')

		var table1 = ['<table class="generate-table"><h4>Таблица 1<h4>'];
		table1.push('<tr> <td> </td> <td>X</td> <td>Y</td> <td>X^2</td> <td>X * Y</td> </tr>');
			for (i = 0; i < n; i++){
				generate_x = parseFloat(arrx[i]);
				generate_y = parseFloat(arry[i]);
				generate_powx = parseFloat(arr_powx[i]);
				generate_multixy = parseFloat(arr_multixy[i]);
				table1.push('<tr> <td>'+(i + 1)+'</td> <td>'+generate_x+'</td> <td>'+generate_y+'</td> <td>'+generate_powx+'</td> <td>'+generate_multixy+'</td> </tr>');
			}
		table1.push('<tr> <td>Сумма</td> <td>'+sumx+'</td> <td>'+sumy+'</td> <td>'+sumpowx+'</td> <td>'+sum_multixy+'</td> </tr>');
		table1.push('</table>');
		document.getElementById('generate2').innerHTML=table1.join('\n')

		var div2 = ['<div>'];
		div2.push('<h3>Теперь система уравнений будет иметь следующий вид: <br><br>a * '+n+' + b * '+sumx+' = '+sumy+'<br>a * '+sumx+' + b * '+sumpowx+' = '+sum_multixy+'</h3> <h3>Сосчитаем значения a и b:<br><br>a = '+a.toFixed(4)+'; b = '+b.toFixed(4)+'</h3> <h3>Уравнение регрессии будет иметь следующий вид:<br><br>Ymod = '+b.toFixed(4)+' * X + '+a.toFixed(4)+'</h3> <h3>Для дальнейшего решения и оценки качества модели построим и сосчитаем значения таблицы 2:</h3>');
		div2.push('</div>');
		document.getElementById('generate3').innerHTML=div2.join('\n')

		var table2 = ['<table class="generate-table"><h4>Таблица 2<h4>'];
		table2.push('<tr> <td></td> <td>Y</td> <td>Ymod</td> <td>(Yсред - Ymod)^2</td> <td>(Y - Yсред)^2</td> </tr>');
			for (i = 0; i < n; i++){
				generate_y = parseFloat(arry[i]);
				generate_mody = parseFloat(arrmody[i]);
				generate_midy_minus_mody_pow = parseFloat(arr_midy_minus_mody_pow[i]);
				generate_y_minus_midy_pow = parseFloat(arr_y_minus_midy_pow[i]);
				table2.push('<tr> <td>'+(i + 1)+'</td> <td>'+generate_y+'</td> <td>'+generate_mody+'</td> <td>'+generate_midy_minus_mody_pow+'</td> <td>'+generate_y_minus_midy_pow+'</td> </tr> ');
			}
		table2.push('<tr> <td>Сумма</td> <td>'+sumy+'</td> <td></td> <td>'+sum_midy_minus_mody_pow+'</td> <td>'+sum_y_minus_midy_pow+'</td></tr>');
		table2.push('<tr> <td>Среднее</td> <td>'+midy+'</td> <td></td> <td></td> <td></td></tr>');
		table2.push('</table>');
		document.getElementById('generate4').innerHTML=table2.join('\n')

		var div3 = ['<div>'];
		div3.push('<h3>Сосчитаем коэффициент корреляции по формуле:<br><br>R = ∑((Yсред - Ymod)^2) / ∑((Y - Yсред)^2)<br><br>R = '+sum_midy_minus_mody_pow+' / '+sum_y_minus_midy_pow+' = '+correl+'</h3> <h3>Для оценки связи между X и Y воспользуемя таблицей 3:</h3>');
		div3.push('</div>');
		document.getElementById('generate5').innerHTML=div3.join('\n')

		var table3 = ['<table class="generate-table"><h4>Таблица 3<h4>'];
		table3.push('<tr><td>R = 0</td> <td>Связь отсутствует</td></tr> <tr><td>0 < R < 0.2</td> <td>Очень слабая связь</td></tr> <tr><td>0.2 < R < 0.3</td> <td>Слабая связь</td></tr> <tr><td>0.3 < R < 0.5</td> <td>Умеренная связь</td></tr> <tr><td>0.5 < R < 0.7</td> <td>Средняя связь</td></tr> <tr><td>0.7 < R < 0.9</td> <td>Сильная связь</td></tr> <tr><td>0.9 < R < 1</td> <td>Очень сильная связь</td></tr> <tr><td>R = 1</td> <td>Функциональная связь</td></tr>');
		table3.push('</table>');
		document.getElementById('generate6').innerHTML=table3.join('\n')

		var div4 = ['<div>'];
		if(correl == 0){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y отсутствует</h3>');
		}
		if(correl > 0 && correl < 0.2){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y очень слабая</h3>');
		}
		if(correl >= 0.2 && correl < 0.3){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y слабая</h3>');
		}
		if(correl >= 0.3 && correl < 0.5){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y умеренная</h3>');
		}
		if(correl >= 0.5 && correl < 0.7){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y средняя</h3>');
		}
		if(correl >= 0.7 && correl < 0.9){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y высокая</h3>');
		}
		if(correl >= 0.9 && correl < 1){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y очень высокая</h3>');
		}
		if(correl == 1){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y функциональная</h3>');
		}
		div4.push('</div>');
		document.getElementById('generate7').innerHTML=div4.join('\n')

		var div5 = ['<div>'];
		div5.push('<h3>Сосчитаем коэффициент детерминации:<br><br>Так как коэффициент детерминации это коэффициент корреляции во 2 степени, то:<br><br> R^2 = '+deter+'</h3> <h3>Коэффициент детерминации = '+deter+' - На '+deter_100+'% вариация Y обусловлена вариацией X; '+deter_other+'% вариация прочих факторов</h3>');
		div5.push('</div>');
		document.getElementById('generate8').innerHTML=div5.join('\n')

		var div6 = ['<div>'];
		div6.push('<h3>Сосчитаем критерий Фишера по формуле:<br><br>F = (R^2 / (1 - R^2)) * (n - 2)<br><br>F = ('+deter+' / (1 - '+deter+')) * ('+n+' - 2) = '+fisher+'<br><br>Табличное значение Фишера = '+fisher_tabl+'</h3>');
		div6.push('</div>');
		document.getElementById('generate9').innerHTML=div6.join('\n')

		var div7 = ['<div>'];
		if(fisher > fisher_tabl){
			div7.push('<h3>Так как '+fisher+' > '+fisher_tabl+', то коэффициент детерминации статистически значим и уравнение регрессии значимо в целом</h3>');
		}
		if(fisher < fisher_tabl){
			div7.push('<h3>Так как '+fisher+' < '+fisher_tabl+', то коэффициент детерминации статистически не значим и уравнение регрессии не значимо в целом</h3>');
		}
		div7.push('</div>');
		document.getElementById('generate10').innerHTML=div7.join('\n')

		var div8 = ['<div>'];
		div8.push('<h3>Сосчитаем ошибку аппроксимации по формуле:<br><br>A% = (1 / n) * ∑((Y - Ymod) / Y) * 100<br><br>A% = '+err_apr+'</h3>');
		if(err_apr < 7){
			div8.push('<h3>Так как A% = '+err_apr+' < 7%, то модель является качественной</h3>');
		}
		if(err_apr == 7){
			div8.push('<h3>Так как A% = '+err_apr+' = 7%, то модель является приемлемой</h3>');
		}
		if(err_apr > 7){
			div8.push('<h3>Так как A% = '+err_apr+' > 7%, то модель является не качественной и данное уравнение регрессии не желательно использовать</h3>');
		}
		div8.push('</div>');
		document.getElementById('generate11').innerHTML=div8.join('\n')
	}

	//Расчет степенного тренда
	function calc_pow(){
		//Записываем массив иксов под логарифмом
		function fun_arrlnx(){
			var arrlnx = [];
			for (var i = 0; i < arrx.length; i++){
				arrlnx[i] = (Math.log(parseFloat(arrx[i]))).toFixed(4);
			}
		return arrlnx;
		}

		//Суммируем все значения из массива иксов под натуральным логарифмом
		function fun_sum_arrlnx(){
			var sumlnx = 0;
			for(var i = 0; i<arrx.length; i++){
				sumlnx += Math.log(parseFloat(arrx[i]));
			}
		return sumlnx;
		}

		//Записываем массив игреков под логарифмом
		function fun_arrlny(){
			var arrlny = [];
			for (var i = 0; i < arry.length; i++){
				arrlny[i] = (Math.log(parseFloat(arry[i]))).toFixed(4);
			}
		return arrlny;
		}

		//Суммируем все значения из массива игреков под натуральным логарифмом
		function fun_sum_arrlny(){
			var sumlny = 0;
			for(var i = 0; i<arry.length; i++){
				sumlny += Math.log(parseFloat(arry[i]));
			}
		return sumlny;
		}

		//Записываем массив значений иксов во 2 степени под натуральным логарифмом
		function fun_arr_powlnx(){
			var arr_powlnx = [];
			var powlnx = 0;
			for(var i = 0; i<arrlnx.length; i++){
				arr_powlnx[i] = (parseFloat(arrlnx[i]**2)).toFixed(4);
			}
		return arr_powlnx;
		}

		//Сумма всех иксов во 2 степени под натуральным логарифмом
		function fun_sum_arr_powlnx(){
			var sumpowlnx = 0;
			for(var i = 0; i<arrlnx.length; i++){
				sumpowlnx += (parseFloat(arrlnx[i]**2));
			}
		return sumpowlnx;
		}

		//Записываем массив значений lnXi * lnYi
		function fun_arr_multi_lnx_lny(){
			var arr_multi_lnx_lny = [];
			for(var i = 0; i<arrlnx.length; i++){
				arr_multi_lnx_lny[i] = (parseFloat(arrlnx[i]) * parseFloat(arrlny[i])).toFixed(4);
			}
		return arr_multi_lnx_lny;
		}

		//Суммируем все значения lnXi * lnYi
		function fun_sum_multi_lnx_lny(){
			var sum_multi_lnx_lny = 0;
			for(var i = 0; i<arrlnx.length; i++){
				sum_multi_lnx_lny += parseFloat(arrlnx[i]) * parseFloat(arrlny[i]);
			}
		return sum_multi_lnx_lny;
		}

		var inputs = document.getElementsByTagName("input").length;
		var n = inputs / 2;
		var arrlnx = fun_arrlnx();
		var sumlnx = fun_sum_arrlnx();
		sumlnx = sumlnx.toFixed(4);
		var arrlny = fun_arrlny();
		var sumlny = fun_sum_arrlny();
		sumlny = sumlny.toFixed(4);
		var sumy = 0;
			for(var i = 0; i<arry.length; i++){
				sumy += parseFloat(arry[i])
			}
		var midy = (sumy / n).toFixed(4);
		var arr_powlnx = fun_arr_powlnx();
		var sumpowlnx = fun_sum_arr_powlnx();
		sumpowlnx = sumpowlnx.toFixed(4);
		var arr_multi_lnx_lny = fun_arr_multi_lnx_lny();
		var sum_multi_lnx_lny = fun_sum_multi_lnx_lny();
		sum_multi_lnx_lny = sum_multi_lnx_lny.toFixed(4);
		var b = (sum_multi_lnx_lny - (sumlnx * sumlny / n)) / (sumpowlnx - (sumlnx * sumlnx / n));
		var a = (sumlny - (sumlnx * b)) / n;
		a = a.toFixed(4);
		b = b.toFixed(4);
		var a_emp = Math.exp(a);
		a_emp = a_emp.toFixed(4);
		var arrmody = [];
			for(var i = 0; i<arrx.length; i++){
				arrmody[i] = (a_emp * parseFloat(arrx[i])**b).toFixed(4);
			}
		var arr_y_minus_mody_pow = [];
		var sum_y_minus_mody_pow = 0;
			for(var i = 0; i<arry.length; i++){
				arr_y_minus_mody_pow[i] = ((parseFloat(arry[i]) - parseFloat(arrmody[i]))**2).toFixed(4);
				sum_y_minus_mody_pow += ((parseFloat(arry[i]) - parseFloat(arrmody[i]))**2);
			}
		sum_y_minus_mody_pow = sum_y_minus_mody_pow.toFixed(4);
		var arr_y_minus_midy_pow = [];
		var sum_y_minus_midy_pow = 0;
			for(var i = 0; i<arry.length; i++){
				arr_y_minus_midy_pow[i] = ((parseFloat(arry[i]) - midy)**2).toFixed(4);
				sum_y_minus_midy_pow += ((parseFloat(arry[i]) - midy)**2);
			}
		sum_y_minus_midy_pow = sum_y_minus_midy_pow.toFixed(4);
		var correl = Math.abs(((1 - (sum_y_minus_mody_pow / sum_y_minus_midy_pow))**(1/2)).toFixed(4));
		var deter = (correl**2).toFixed(4);
		var deter_100 = (deter * 100).toFixed(4);
		var deter_other = (100 - deter_100).toFixed(4);
		var fisher = ((deter / (1 - deter)) * (n - 2)).toFixed(4);
		var arr_fisher_tabl = ["161.45", "18.51", "10.13", "7.71", "6.61", "5.99", "5.59", "5.32", "5.12", "4.96", "4.84", "4.75", "4.67", "4.60", "4.54", "4.49", "4.45", "4.41", "4.38", "4.35", "4.32", "4.30", "4.28", "4.26", "4.24", "4.22", "4.21", "4.20", "4.18", "4.17"];
		var fisher_tabl = 0;
			for(var i = 0; i < n-2; i++){
				fisher_tabl = parseFloat(arr_fisher_tabl[i]);
			}
		var err_apr = 0;
			for(var i = 0; i<arrx.length; i++){
				err_apr += Math.abs((parseFloat(arry[i]) - parseFloat(arrmody[i])) / parseFloat(arry[i]));
			}
		var err_apr = ((1 / n) * err_apr * 100).toFixed(4);

		//Генерация html для степенного тренда
		var generate_lnx = 0;
		var generate_lny = 0;
		var generate_powlnx = 0;
		var generate_multi_lnx_lny = 0;
		var generate_mody = 0;
		var generate_y_minus_mody_pow = 0;
		var generate_y_minus_midy_pow = 0;

		var div1 = ['<div>'];
		div1.push('<h2>Решение</h2><h3>Степенное уравнение регрессии имеет вид: <br><br> y = a * x^b</h3> <h3>Находим параметры уравнения (a и b) методом наименьших квадратов(МНК)<br><br>Система уравнений МНК:<br><br>lna * n + b * ∑lnX = ∑lnY<br>lna * ∑lnX + b * ∑lnX^2 = ∑(lnX * lnY)</h3> <h3>Для решения системы уравнений построим и сосчитаем значения таблицы 1:</h3>');
		div1.push('</div>');
		document.getElementById('generate1').innerHTML=div1.join('\n')

		var table1 = ['<table class="generate-table"><h4>Таблица 1<h4>'];
		table1.push('<tr> <td> </td> <td>lnX</td> <td>lnY</td> <td>lnX^2</td> <td>lnX * lnY</td> </tr>');
			for (i = 0; i < n; i++){
				generate_lnx = parseFloat(arrlnx[i]);
				generate_lny = parseFloat(arrlny[i]);
				generate_powlnx = parseFloat(arr_powlnx[i]);
				generate_multi_lnx_lny = parseFloat(arr_multi_lnx_lny[i]);
				table1.push('<tr> <td>'+(i + 1)+'</td> <td>'+generate_lnx+'</td> <td>'+generate_lny+'</td> <td>'+generate_powlnx+'</td> <td>'+generate_multi_lnx_lny+'</td> </tr>');
			}
		table1.push('<tr> <td>Сумма</td> <td>'+sumlnx+'</td> <td>'+sumlny+'</td> <td>'+sumpowlnx+'</td> <td>'+sum_multi_lnx_lny+'</td> </tr>');
		table1.push('</table>');
		document.getElementById('generate2').innerHTML=table1.join('\n')
		
		var div2 = ['<div>'];
		div2.push('<h3>Теперь система уравнений будет иметь следующий вид: <br><br>a * '+n+' + b * '+sumlnx+' = '+sumlny+'<br>a * '+sumlnx+' + b * '+sumpowlnx+' = '+sum_multi_lnx_lny+'</h3> <h3>Сосчитаем значения a и b:<br><br>a = '+a+'; b = '+b+'</h3> <h3>Эмпирическое уравнение регрессии будет иметь следующий вид:<br><br>Ymod = e^'+a+' * x^'+b+'<br><br>Избавимся от экспоненты и уравнение примет следующий вид:<br><br>Ymod = '+a_emp+' * x^'+b+'</h3> <h3>Для дальнейшего решения и оценки качества модели построим и сосчитаем значения таблицы 2:</h3>');
		div2.push('</div>');
		document.getElementById('generate3').innerHTML=div2.join('\n')
		
		var table2 = ['<table class="generate-table"><h4>Таблица 2<h4>'];
		table2.push('<tr> <td></td> <td>Y</td> <td>Ymod</td> <td>(Y-Ymod)^2</td> <td>(Y - Yсред)^2</td> </tr>');
			for (i = 0; i < n; i++){
				generate_y = parseFloat(arry[i]);
				generate_mody = parseFloat(arrmody[i]);
				generate_y_minus_mody_pow = parseFloat(arr_y_minus_mody_pow[i]);
				generate_y_minus_midy_pow = parseFloat(arr_y_minus_midy_pow[i]);
				table2.push('<tr> <td>'+(i + 1)+'</td> <td>'+generate_y+'</td> <td>'+generate_mody+'</td> <td>'+generate_y_minus_mody_pow+'</td> <td>'+generate_y_minus_midy_pow+'</td> </tr> ');
			}
		table2.push('<tr> <td>Сумма</td> <td>'+sumy+'</td> <td></td> <td>'+sum_y_minus_mody_pow+'</td> <td>'+sum_y_minus_midy_pow+'</td></tr>');
		table2.push('<tr> <td>Среднее</td> <td>'+midy+'</td> <td></td> <td></td> <td></td></tr>');
		table2.push('</table>');
		document.getElementById('generate4').innerHTML=table2.join('\n')
		
		var div3 = ['<div>'];
		div3.push('<h3>Сосчитаем коэффициент корреляции по формуле:<br><br>R = &radic;<span> 1 - (∑(Y - Ymod)^2) / ∑(Y - Yсред)^2))</span><br><br>R = &radic;<span> 1 - ('+sum_y_minus_mody_pow+' / '+sum_y_minus_midy_pow+')</span> = '+correl+'</h3> <h3>Для оценки связи между X и Y воспользуемя таблицей 3:</h3>');
		div3.push('</div>');
		document.getElementById('generate5').innerHTML=div3.join('\n')
		
		var table3 = ['<table class="generate-table"><h4>Таблица 3<h4>'];
		table3.push('<tr><td>R = 0</td> <td>Связь отсутствует</td></tr> <tr><td>0 < R < 0.2</td> <td>Очень слабая связь</td></tr> <tr><td>0.2 < R < 0.3</td> <td>Слабая связь</td></tr> <tr><td>0.3 < R < 0.5</td> <td>Умеренная связь</td></tr> <tr><td>0.5 < R < 0.7</td> <td>Средняя связь</td></tr> <tr><td>0.7 < R < 0.9</td> <td>Сильная связь</td></tr> <tr><td>0.9 < R < 1</td> <td>Очень сильная связь</td></tr> <tr><td>R = 1</td> <td>Функциональная связь</td></tr>');
		table3.push('</table>');
		document.getElementById('generate6').innerHTML=table3.join('\n')

		var div4 = ['<div>'];
		if(correl == 0){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y отсутствует</h3>');
		}
		if(correl > 0 && correl < 0.2){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y очень слабая</h3>');
		}
		if(correl >= 0.2 && correl < 0.3){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y слабая</h3>');
		}
		if(correl >= 0.3 && correl < 0.5){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y умеренная</h3>');
		}
		if(correl >= 0.5 && correl < 0.7){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y средняя</h3>');
		}
		if(correl >= 0.7 && correl < 0.9){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y высокая</h3>');
		}
		if(correl >= 0.9 && correl < 1){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y очень высокая</h3>');
		}
		if(correl == 1){
			div4.push('<h3>Коэффициент корреляции = '+correl+' - Связь между X и Y функциональная</h3>');
		}
		div4.push('</div>');
		document.getElementById('generate7').innerHTML=div4.join('\n')

		var div5 = ['<div>'];
		div5.push('<h3>Сосчитаем коэффициент детерминации:<br><br>Так как коэффициент детерминации это коэффициент корреляции во 2 степени, то:<br><br> R^2 = '+deter+'</h3> <h3>Коэффициент детерминации = '+deter+' - На '+deter_100+'% вариация Y обусловлена вариацией X; '+deter_other+'% вариация прочих факторов</h3>');
		div5.push('</div>');
		document.getElementById('generate8').innerHTML=div5.join('\n')

		var div6 = ['<div>'];
		div6.push('<h3>Сосчитаем критерий Фишера по формуле:<br><br>F = (R^2 / (1 - R^2)) * (n - 2)<br><br>F = ('+deter+' / (1 - '+deter+')) * ('+n+' - 2) = '+fisher+'<br><br>Табличное значение Фишера = '+fisher_tabl+'</h3>');
		div6.push('</div>');
		document.getElementById('generate9').innerHTML=div6.join('\n')

		var div7 = ['<div>'];
		if(fisher > fisher_tabl){
			div7.push('<h3>Так как '+fisher+' > '+fisher_tabl+', то коэффициент детерминации статистически значим и уравнение регрессии значимо в целом</h3>');
		}
		if(fisher < fisher_tabl){
			div7.push('<h3>Так как '+fisher+' < '+fisher_tabl+', то коэффициент детерминации статистически не значим и уравнение регрессии не значимо в целом</h3>');
		}
		div7.push('</div>');
		document.getElementById('generate10').innerHTML=div7.join('\n')

		var div8 = ['<div>'];
		div8.push('<h3>Сосчитаем ошибку аппроксимации по формуле:<br><br>A% = (1 / n) * ∑((Y - Ymod) / Y) * 100<br><br>A% = '+err_apr+'</h3>');
		if(err_apr < 7){
			div8.push('<h3>Так как A% = '+err_apr+' < 7%, то модель является качественной</h3>');
		}
		if(err_apr == 7){
			div8.push('<h3>Так как A% = '+err_apr+' = 7%, то модель является приемлемой</h3>');
		}
		if(err_apr > 7){
			div8.push('<h3>Так как A% = '+err_apr+' > 7%, то модель является не качественной и данное уравнение регрессии не желательно использовать</h3>');
		}
		div8.push('</div>');
		document.getElementById('generate11').innerHTML=div8.join('\n')
	}
}
