//Добавление инпутов по кнопке +
function addtr(){
	var row = document.createElement("tr");
	row.innerHTML = "<td> <input type='text' id='x' class='x'> </td><td> <input type='text' id='y' class='y'> </td>";
	document.getElementById("tbody").appendChild(row);
	var inputs = document.getElementsByTagName("input");
	var inputx = document.getElementById("x");
	var inputy = document.getElementById("y");
	var x = inputs.length / 2;
	for(var i = x; inputx.id == 'x'; ){
		inputx.id = "x-"+i;
	}
	for(var i = x; inputy.id == 'y'; ){
		inputy.id = "y-"+i;
	}
}

//Удаление инпутов по кнопке x
function removetr(){
	var inputs = document.getElementsByTagName("input").length;
	if(inputs > 6){
		document.getElementById("tbody").removeChild(tbody.lastChild)		
	}
}

//Обработка выбронного тренда через селект
function calc(){
	var selectValue = document.getElementById('select').options.selectedIndex;
	if(selectValue == 0){
		calc_line();
	}
}

//Расчет линейного тренда
function calc_line(){
	inpx = document.getElementsByClassName('x'),
	masx = [];
	inpy = document.getElementsByClassName('y'),
	masy = [];
	arrayx();
	arrayy();
	mnk_lin();

	function arrayx() {
		for (var i = 0; i < inpx.length; i++) {
			masx[i] = inpx[i].value;
		}
	return masx;
	}

	function arrayy() {
		for (var i = 0; i < inpy.length; i++) {
			masy[i] = inpy[i].value;
		}
	return masy;
	}

	function arraySumx(){
		var arr = masx;
		var sumx = 0;
			for(var i = 0; i<arr.length; i++){
				sumx += parseFloat(arr[i]);
			}
	return sumx;
	}

	function arraySumy(){
		var arr = masy;
		var sumy = 0;
			for(var i = 0; i<arr.length; i++){
				sumy += parseFloat(arr[i]);
			}
	return sumy;
	}

	function summ_multixy(){
		var arrx = masx;
		var arry = masy;
		var sum_multixy = 0;
			for(var i = 0; i<arrx.length; i++){
				sum_multixy += (parseFloat(arrx[i]) * parseFloat(arry[i]));
			}
	return sum_multixy;
	}

	function arr_Multixy(){
	var arrx = masx;
	var arry = masy;
	var arr_multixy = [];
		for(var i = 0; i<arrx.length; i++){
			arr_multixy[i] = (parseFloat(arrx[i]) * parseFloat(arry[i])).toFixed(4);
		}
	return arr_multixy;
	}

	function arr_sum_Powx(){
		var arr = masx;
		var powx = 0;
			for(var i = 0; i<arr.length; i++){
				powx += parseFloat(arr[i]**2);
			}
	return powx;
	}

	function arr_Powx(){
	var arr = masx;
	var arr_powx = [];
	var powx = 0;
		for(var i = 0; i<arr.length; i++){
			arr_powx[i] = parseFloat(arr[i]**2);
		}
	return arr_powx;
	}

	function mnk_lin(){
		var inputs = document.getElementsByTagName("input").length;
		var n = inputs / 2;
		var sumx = arraySumx();
		var sumy = arraySumy();
		var midy = (sumy / n).toFixed(4);
		var sumpowx = arr_sum_Powx();
		var sum_multixy = summ_multixy();
		var b = (sum_multixy - (sumx * sumy / n)) / (sumpowx - (sumx * sumx / n));
		var a = (sumy - (sumx * b)) / n;
		var arrx = masx;
		var arry = masy;
		var arrmody = [];
			for(var i = 0; i<arrx.length; i++){
				arrmody[i] = (parseInt(arrx[i]) * b + a).toFixed(4);
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
				arr_y_minus_midy_pow[i] = ((parseInt(arry[i]) - midy)**2).toFixed(4);
				sum_y_minus_midy_pow += ((parseInt(arry[i]) - midy)**2);
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
		
		/* Проверка
		console.log(sumx);
		console.log(sumy);
		console.log(sumpowx);
		console.log(sum_multixy);
		console.log(b);
		console.log(a);
		console.log(arrmody);
		console.log(midy);
		console.log(sum_midy_minus_mody_pow);
		console.log(sum_y_minus_midy_pow);
		console.log(correl);
		console.log(deter);
		console.log(fisher);
		console.log(fisher_tabl);
		console.log(err_apr); */

		//Генерация html
		var div1 = ['<div>'];
		div1.push('<h2>Решение</h2><h3>Линейное уравнение регрессии имеет вид: <br><br> y = b * x + a</h3> <h3>Находим параметры уравнения (a и b) методом наименьших квадратов(МНК)<br><br>Система уравнений МНК:<br><br>a * n + b * ∑X = ∑Y<br>a * ∑X + b * ∑X^2 = ∑(X * Y)</h3> <h3>Для решения системы уравнений построим и сосчитаем значения таблицы 1:</h3>');
		div1.push('</div>');
		document.getElementById('generate1').innerHTML=div1.join('\n')

		var generate_x = 0;
		var generate_y = 0;
		var arr_powx = arr_Powx();
		var generate_powx = 0;
		var generate_multixy = 0;
		var arr_multixy = arr_Multixy();
		var generate_mody = 0;
		var generate_midy_minus_mody_pow = 0;
		var generate_y_minus_midy_pow = 0;
		var tableArr1 = ['<table class="generate-table"><h4>Таблица 1<h4>'];
		tableArr1.push('<tr> <td> </td> <td>X</td> <td>Y</td> <td>X^2</td> <td>X * Y</td> </tr>');
			for (i = 0; i < n; i++){
				generate_x = parseFloat(arrx[i]);
				generate_y = parseFloat(arry[i]);
				generate_powx = parseFloat(arr_powx[i]);
				generate_multixy = parseFloat(arr_multixy[i]);
				tableArr1.push('<tr> <td>'+(i + 1)+'</td> <td>'+generate_x+'</td> <td>'+generate_y+'</td> <td>'+generate_powx+'</td> <td>'+generate_multixy+'</td> </tr>');
			}
		tableArr1.push('<tr> <td>Сумма</td> <td>'+sumx+'</td> <td>'+sumy+'</td> <td>'+sumpowx+'</td> <td>'+sum_multixy+'</td> </tr>');
		tableArr1.push('</table>');
		document.getElementById('generate2').innerHTML=tableArr1.join('\n')

		var div2 = ['<div>'];
		div2.push('<h3>Теперь система уравнений будет иметь следующий вид: <br><br>a * '+n+' + b * '+sumx+' = '+sumy+'<br>a * '+sumx+' + b * '+sumpowx+' = '+sum_multixy+'</h3> <h3>Сосчитаем значения a и b:<br><br>a = '+a.toFixed(4)+'; b = '+b.toFixed(4)+'</h3> <h3>Уравнение регрессии будет иметь следующий вид:<br><br>Ymod = '+b.toFixed(4)+' * X + '+a.toFixed(4)+'</h3> <h3>Для дальнейшего решения и оценки качества модели построим и сосчитаем значения таблицы 2:</h3>');
		div2.push('</div>');
		document.getElementById('generate3').innerHTML=div2.join('\n')

		var tableArr2 = ['<table class="generate-table"><h4>Таблица 2<h4>'];
		tableArr2.push('<tr> <td></td> <td>Y</td> <td>Ymod</td> <td>(Yсред - Ymod)^2</td> <td>(Y - Yсред)^2</td> </tr>');
			for (i = 0; i < n; i++){
				generate_y = parseFloat(arry[i]);
				generate_mody = parseFloat(arrmody[i]);
				generate_midy_minus_mody_pow = parseFloat(arr_midy_minus_mody_pow[i]);
				generate_y_minus_midy_pow = parseFloat(arr_y_minus_midy_pow[i]);
				tableArr2.push('<tr> <td>'+(i + 1)+'</td> <td>'+generate_y+'</td> <td>'+generate_mody+'</td> <td>'+generate_midy_minus_mody_pow+'</td> <td>'+generate_y_minus_midy_pow+'</td> </tr> ');
			}
		tableArr2.push('<tr> <td>Сумма</td> <td>'+sumy+'</td> <td></td> <td>'+sum_midy_minus_mody_pow+'</td> <td>'+sum_y_minus_midy_pow+'</td></tr>');
		tableArr2.push('<tr> <td>Среднее</td> <td>'+midy+'</td> <td></td> <td></td> <td></td></tr>');
		tableArr2.push('</table>');
		document.getElementById('generate4').innerHTML=tableArr2.join('\n')

		var div3 = ['<div>'];
		div3.push('<h3>Сосчитаем коэффициент корреляции по формуле:<br><br>R = ∑((Yсред - Ymod)^2) / ∑((Y - Yсред)^2)<br><br>R = '+sum_midy_minus_mody_pow+' / '+sum_y_minus_midy_pow+' = '+correl+'<h3> <h3>Для оценки связи между X и Y воспользуемя таблицей 3:</h3>');
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