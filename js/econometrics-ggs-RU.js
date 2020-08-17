//Генерация гугл таблицы
function ggs(){
	var inpx = document.getElementsByClassName('x');
	var inpy = document.getElementsByClassName('y');
	var selectValue = document.getElementById('select').value;
	var i;

	//Записываем массив иксов из инпутов с классом x
	var arrx = [];
	for (i=0; i<inpx.length; i++){
		arrx[i] = parseFloat(parseFloat(inpx[i].value).toFixed(4));
	}

	//Записываем массив игреков из инпутов с классом y
	var arry = [];
	for (i= 0; i<inpy.length; i++){
		arry[i] = parseFloat(parseFloat(inpy[i].value).toFixed(4));
	}

	var bool = 0;

	//Проверка инпутов на заполненность
	for (i=0; i<arrx.length; i++){
		if(isNaN(arrx[i]) || isNaN(arry[i])){
			bool = 1;
			alert("Необходимо заполнить все ячейки X и Y");
			break;
		}
	}

	//Проверка для параболической регрессии
	if(selectValue == 2 && arrx.length < 4 && bool == 0){
		bool = 1;
		alert("Необходимо указать количество наблюдений >= 4 (n >= 4)");
	}

	if(bool == 0){
		//Генерация имени для гугл таблицы (необязательно)
		var ekey = "";
		var words = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
		for(i=0; i<50; ++i){
			var position = Math.floor(Math.random() * (words.length - 1));
			ekey += words.substring(position, position + 1);
		}

		//Передача данных для гугл скрипта через doGet(e) и переход на новую вкладку с ссылкой на таблицу
		window.open('https://script.google.com/macros/s/AKfycbzLI_5apwbBDEHGPHJHlc5m9MBhUasA9XgAfE1ZzvFp9rqxh-A/exec?ekey='+ekey+'&selectValue='+selectValue+'&arrx='+arrx+'&arry='+arry+'');
	}
}