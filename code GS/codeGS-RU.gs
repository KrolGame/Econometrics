function doGet(e){
  var i;
  var selectValue = e.parameter.selectValue;

  //Создаем таблицу и изменяем ей право доступа
  var ss = SpreadsheetApp.create(e.parameter.ekey);
  var ssid = ss.getId();
  DriveApp.getFileById(ssid).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);

  //Разбиваем строку на части
  var earrx = e.parameter.arrx.split(",");
  var earry = e.parameter.arry.split(",");

  //Перезаписываем массив значений иксов
  var arrx = [];
  for(i=0; i<earrx.length; i++){
    arrx.push([parseFloat(earrx[i])]);
  };

  //Перезаписываем массив значений игреков
  var arry = [];
  for(i=0; i<earry.length; i++){
    arry.push([parseFloat(earry[i])]);
  };

  var n = arrx.length;

  //Запись заголовков столбцов исходных данных в таблицу
  SpreadsheetApp.openById(ssid).getSheets()[0].getRange("A1").setValue("X");
  SpreadsheetApp.openById(ssid).getSheets()[0].getRange("B1").setValue("Y");
  
  //Запись значений X и Y в таблицу
  SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,1,n).setValues(arrx);
  SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,2,n).setValues(arry);
  
  //Запись среднего значения Y в таблицу
  SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+3,2).setValue("=AVERAGE(B2:B"+(n+1)+")");

  //Заполнение таблицы для линейной регрессии
  if(selectValue == 0){
    
    //Запись значений иксов в квадрате
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,3).setValue("X^2");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,3).setValue("=(A"+(i+2)+")^2");
    }
    
    //Запись значений Xi * Yi
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,4).setValue("X * Y");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,4).setValue("=A"+(i+2)+"*B"+(i+2)+"");
    }
    
    //Запись системы уравнений и значений a и b
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,5).setValue("Система уравнений");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,5).setValue("Ymod = a + (b * x)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,5).setValue("a * n + b * ∑X = ∑Y");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,5).setValue("a * ∑X + b * ∑X^2 = ∑(X * Y)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(5,5).setValue("Значение b");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(6,5).setValue("=(D"+(n+2)+"-(A"+(n+2)+"*B"+(n+2)+"/"+n+"))/(C"+(n+2)+"-(A"+(n+2)+"*A"+(n+2)+"/"+n+"))");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(7,5).setValue("Значение a");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(8,5).setValue("=(B"+(n+2)+"-(A"+(n+2)+" * E6))/"+n+"");

    //Запись значений Ymod
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,6).setValue("Ymod");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,6).setValue("=E8+(E6*A"+(i+2)+")");
    }
 
    //Запись значений (Yсред - Ymod)^2
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,7).setValue("(Yсред - Ymod)^2");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,7).setValue("=(B"+(n+3)+"-F"+(i+2)+")^2");
    }

    //Запись значений (Y - Yсред)^2
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,8).setValue("(Y - Yсред)^2");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,8).setValue("=(B"+(i+2)+"-B"+(n+3)+")^2");
    }

    //Запись Коэффициента корреляции
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,9).setValue("Коэффициент корреляции");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,9).setValue("=SQRT(ABS(G"+(n+2)+"/H"+(n+2)+"))");

    //Запись Коэффициента детерминации
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,10).setValue("Коэффициент детерминации");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,10).setValue("=I2^2");
    
    //Запись Критерия Фишера
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,11).setValue("Критерий Фишера");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,11).setValue("=(J2/(1-J2))*("+n+"-2)");
    var arr_fisher_tabl = ["161.45", "18.51", "10.13", "7.71", "6.61", "5.99", "5.59", "5.32", "5.12", "4.96", "4.84", "4.75", "4.67", "4.60", "4.54", "4.49", "4.45", "4.41", "4.38", "4.35", "4.32", "4.30", "4.28", "4.26", "4.24", "4.22", "4.21", "4.20", "4.18", "4.17"];
    var fisher_tabl = 0;
    for(i=0; i<n-2; i++){
      fisher_tabl = parseFloat(arr_fisher_tabl[i]);
    }
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,11).setValue("Табличное значение Фишера");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,11).setValue(fisher_tabl);

    //Запись ошибки аппроксимации
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,12).setValue("Ошибка аппроксимации");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,12).setValue("=(1/"+n+")*L"+(n+4)+"*100");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,12).setValue("Значения для формулы");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+4,12).setValue("=ABS((B"+(i+2)+"-F"+(i+2)+")/B"+(i+2)+")");
    }
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+4,12).setValue("=sum(L4:L"+(n+3)+")");

    //Запись значений суммы в столбцах
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,1).setValue("=sum(A2:A"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,2).setValue("=sum(B2:B"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,3).setValue("=sum(C2:C"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,4).setValue("=sum(D2:D"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,7).setValue("=sum(G2:G"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,8).setValue("=sum(H2:H"+(n+1)+")");
  }

  //Заполнение таблицы для степенной регрессии
  if(selectValue == 1){
    
    //Запись значений иксов под натуральным логарифмом
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,3).setValue("lnX");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,3).setValue("=ln(A"+(i+2)+")");
    }
    
    //Запись значений игреков под натуральным логарифмом
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,4).setValue("lnY");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,4).setValue("=ln(B"+(i+2)+")");
    }
    
    //Запись значений иксов под натуральным логарифмом в квадрате
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,5).setValue("lnX^2");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,5).setValue("=(ln(A"+(i+2)+"))^2");
    }
    
    //Запись значений lnXi * lnYi
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,6).setValue("lnX * lnY");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,6).setValue("=C"+(i+2)+"*D"+(i+2)+"");
    }
    
    //Запись системы уравнений и значений a и b
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,7).setValue("Система уравнений");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,7).setValue("Ymod = a * x^b");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,7).setValue("lna * n + b * ∑lnX = ∑lnY");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,7).setValue("lna * ∑lnX + b * ∑lnX^2 = ∑(lnX * lnY)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(5,7).setValue("Значение b");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(6,7).setValue("=(F"+(n+2)+"-(C"+(n+2)+"*D"+(n+2)+"/"+n+"))/(E"+(n+2)+"-(C"+(n+2)+"*C"+(n+2)+"/"+n+"))");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(7,7).setValue("Значение a");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(8,7).setValue("=EXP((D"+(n+2)+"-(C"+(n+2)+" * G6))/"+n+")");

    //Запись значений Ymod
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,8).setValue("Ymod");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,8).setValue("=G8*A"+(i+2)+"^G6");
    }
 
    //Запись значений (Y-Ymod)^2
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,9).setValue("(Y-Ymod)^2");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,9).setValue("=(B"+(i+2)+"-H"+(i+2)+")^2");
    }

    //Запись значений (Y - Yсред)^2
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,10).setValue("(Y - Yсред)^2");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,10).setValue("=(B"+(i+2)+"-B"+(n+3)+")^2");
    }

    //Запись индекса корреляции
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,11).setValue("Индекс корреляции");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,11).setValue("=SQRT(ABS(1-(I"+(n+2)+"/J"+(n+2)+")))");

    //Запись индекса детерминации
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,12).setValue("Индекс детерминации");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,12).setValue("=K2^2");
    
    //Запись критерия Фишера
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,13).setValue("Критерий Фишера");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,13).setValue("=(L2/(1-L2))*("+n+"-2)");
    var arr_fisher_tabl = ["161.45", "18.51", "10.13", "7.71", "6.61", "5.99", "5.59", "5.32", "5.12", "4.96", "4.84", "4.75", "4.67", "4.60", "4.54", "4.49", "4.45", "4.41", "4.38", "4.35", "4.32", "4.30", "4.28", "4.26", "4.24", "4.22", "4.21", "4.20", "4.18", "4.17"];
    var fisher_tabl = 0;
    for(i=0; i<(n-2); i++){
      fisher_tabl = parseFloat(arr_fisher_tabl[i]);
    }
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,13).setValue("Табличное значение Фишера");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,13).setValue(fisher_tabl);

    //Запись ошибки аппроксимации
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,14).setValue("Ошибка аппроксимации");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,14).setValue("=(1/"+n+")*N"+(n+4)+"*100");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,14).setValue("Значения для формулы");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+4,14).setValue("=ABS((B"+(i+2)+"-H"+(i+2)+")/B"+(i+2)+")");
    }
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+4,14).setValue("=sum(N4:N"+(n+3)+")");

    //Запись значений суммы в столбцах
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,1).setValue("=sum(A2:A"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,2).setValue("=sum(B2:B"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,3).setValue("=sum(C2:C"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,4).setValue("=sum(D2:D"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,5).setValue("=sum(E2:E"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,6).setValue("=sum(F2:F"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,9).setValue("=sum(I2:I"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,10).setValue("=sum(J2:J"+(n+1)+")");
  }

  //Заполнение таблицы для параболической регрессии
  if(selectValue == 2){
    
    //Запись значений иксов во 2 степени
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,3).setValue("X^2");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,3).setValue("=(A"+(i+2)+")^2");
    }

    //Запись значений иксов в 3 степени
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,4).setValue("X^3");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,4).setValue("=(A"+(i+2)+")^3");
    }
 
    //Запись значений иксов в 4 степени
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,5).setValue("X^4");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,5).setValue("=(A"+(i+2)+")^4");
    }

    //Запись значений Xi * Yi
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,6).setValue("X * Y");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,6).setValue("=A"+(i+2)+"*B"+(i+2)+"");
    }

    //Запись значений X^2i * Yi
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,7).setValue("X^2 * Y");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,7).setValue("=C"+(i+2)+"*B"+(i+2)+"");
    }

    //Запись системы уравнений и значений a и b
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,8).setValue("Система уравнений");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,8).setValue("y = a + (b * x) + (c * x^2)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,8).setValue("a * n + b * ∑X + c * ∑X^2 = ∑Y");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,8).setValue("a * ∑X + b * ∑X^2 + c * ∑X^3 = ∑(X * Y)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(5,8).setValue("a * ∑X^2 + b * ∑X^3 + c * ∑X^4 = ∑(X^2 * Y))");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(6,8).setValue("Делитель крамера");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(7,8).setValue("=("+n+"*C"+(n+2)+"*E"+(n+2)+")+(A"+(n+2)+"*D"+(n+2)+"*C"+(n+2)+")+(C"+(n+2)+"*A"+(n+2)+"*D"+(n+2)+")-(C"+(n+2)+"*C"+(n+2)+"*C"+(n+2)+")-(D"+(n+2)+"*D"+(n+2)+"*"+n+")-(E"+(n+2)+"*A"+(n+2)+"*A"+(n+2)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(8,8).setValue("Значение a");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(9,8).setValue("=((B"+(n+2)+"*C"+(n+2)+"*E"+(n+2)+")+(A"+(n+2)+"*D"+(n+2)+"*G"+(n+2)+")+(C"+(n+2)+"*F"+(n+2)+"*D"+(n+2)+")-(G"+(n+2)+"*C"+(n+2)+"*C"+(n+2)+")-(D"+(n+2)+"*D"+(n+2)+"*B"+(n+2)+")-(E"+(n+2)+"*F"+(n+2)+"*A"+(n+2)+"))/H7");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(10,8).setValue("Значение b");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(11,8).setValue("=(("+n+"*F"+(n+2)+"*E"+(n+2)+")+(B"+(n+2)+"*D"+(n+2)+"*C"+(n+2)+")+(C"+(n+2)+"*A"+(n+2)+"*G"+(n+2)+")-(C"+(n+2)+"*F"+(n+2)+"*C"+(n+2)+")-(G"+(n+2)+"*D"+(n+2)+"*"+n+")-(E"+(n+2)+"*A"+(n+2)+"*B"+(n+2)+"))/H7");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(12,8).setValue("Значение c");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(13,8).setValue("=(("+n+"*C"+(n+2)+"*G"+(n+2)+")+(A"+(n+2)+"*F"+(n+2)+"*C"+(n+2)+")+(B"+(n+2)+"*A"+(n+2)+"*D"+(n+2)+")-(C"+(n+2)+"*C"+(n+2)+"*B"+(n+2)+")-(D"+(n+2)+"*F"+(n+2)+"*"+n+")-(G"+(n+2)+"*A"+(n+2)+"*A"+(n+2)+"))/H7");

    //Запись значений Ymod
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,9).setValue("Ymod");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,9).setValue("=H9+(H11*A"+(i+2)+")+(H13*C"+(i+2)+")");
    }
 
    //Запись значений (Y-Ymod)^2
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,10).setValue("(Y-Ymod)^2");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,10).setValue("=(B"+(i+2)+"-I"+(i+2)+")^2");
    }

    //Запись значений (Y - Yсред)^2
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,11).setValue("(Y - Yсред)^2");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,11).setValue("=(B"+(i+2)+"-B"+(n+3)+")^2");
    }

    //Запись индекса корреляции
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,12).setValue("Индекс корреляции");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,12).setValue("=SQRT(ABS(1-(J"+(n+2)+"/K"+(n+2)+")))");

    //Запись индекса детерминации
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,13).setValue("Индекс детерминации");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,13).setValue("=L2^2");
    
    //Запись критерия Фишера
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,14).setValue("Критерий Фишера");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,14).setValue("=(M2/(1-M2))*(("+n+"-3)/2)");
    var arr_fisher_tabl = ["199.50", "19", "9.55", "6.94", "5.79", "5.14", "4.74", "4.46", "4.26", "4.10", "3.98", "3.89", "3.81", "3.74", "3.68", "3.63", "3.59", "3.55", "3.52", "3.49", "3.47", "3.44", "3.42", "3.40", "3.38", "3.37", "3.35", "3.34", "3.33", "3.32"];
    var fisher_tabl = 0;
    for(i=0; i<(n-3); i++){
      fisher_tabl = parseFloat(arr_fisher_tabl[i]);
    }
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,14).setValue("Табличное значение Фишера");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,14).setValue(fisher_tabl);

    //Запись ошибки аппроксимации
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,15).setValue("Ошибка аппроксимации");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,15).setValue("=(1/"+n+")*O"+(n+4)+"*100");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,15).setValue("Значения для формулы");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+4,15).setValue("=ABS((B"+(i+2)+"-I"+(i+2)+")/B"+(i+2)+")");
    }
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+4,15).setValue("=sum(O4:O"+(n+3)+")");

    //Запись значений суммы в столбцах
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,1).setValue("=sum(A2:A"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,2).setValue("=sum(B2:B"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,3).setValue("=sum(C2:C"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,4).setValue("=sum(D2:D"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,5).setValue("=sum(E2:E"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,6).setValue("=sum(F2:F"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,7).setValue("=sum(G2:G"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,10).setValue("=sum(J2:J"+(n+1)+")");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,11).setValue("=sum(K2:K"+(n+1)+")");
  }
  
  //Заполнение таблицы для гиперболической регрессии
  if(selectValue == 3){
    
    //Запись значений 1/X
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,3).setValue("1 / X");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,3).setValue("=1/(A"+(i+2)+")");
    }
    
    //Запись значений 1/X^2
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,4).setValue("1 / X^2");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,4).setValue("=1/(A"+(i+2)+")^2");
    }

    //Запись значений Y/X
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,5).setValue("Y / X");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,5).setValue("=B"+(i+2)+"/A"+(i+2)+"");
    }

    //Запись системы уравнений и значений a и b
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,6).setValue("Система уравнений");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,6).setValue("Ymod = a + (b / x)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,6).setValue("a * n + b * ∑(1 / X) = ∑Y");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,6).setValue("a * ∑(1 / X) + b * ∑(1 / X^2) = ∑(Y * X)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(5,6).setValue("Значение b");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(6,6).setValue("=(E"+(n+2)+"-(C"+(n+2)+"*B"+(n+2)+"/"+n+"))/(D"+(n+2)+"-(C"+(n+2)+"*C"+(n+2)+"/"+n+"))");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(7,6).setValue("Значение a");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(8,6).setValue("=(B"+(n+2)+"-(C"+(n+2)+" * F6))/"+n+"");

    //Запись значений Ymod
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,7).setValue("Ymod");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,7).setValue("=F8+(F6/A"+(i+2)+")");
    }
  }

  //Заполнение таблицы для экспоненциальной регрессии
  if(selectValue == 4){
    
    //Запись значений lnY
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,3).setValue("lnY");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,3).setValue("=ln(B"+(i+2)+")");
    }
    
    //Запись значений X^2
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,4).setValue("X^2");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,4).setValue("=A"+(i+2)+"^2");
    }

    //Запись значений X*lnY
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,5).setValue("X * lnY");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,5).setValue("=A"+(i+2)+"*C"+(i+2)+"");
    }

    //Запись системы уравнений и значений a и b
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,6).setValue("Система уравнений");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,6).setValue("Ymod = a * e^bx");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,6).setValue("lna * n + lnb * ∑X = ∑lnY");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,6).setValue("lna * ∑X + lnb * ∑X^2 = ∑(X * lnY)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(5,6).setValue("Значение b");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(6,6).setValue("=(E"+(n+2)+"-(A"+(n+2)+"*C"+(n+2)+"/"+n+"))/(D"+(n+2)+"-(A"+(n+2)+"*A"+(n+2)+"/"+n+"))");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(7,6).setValue("Значение a");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(8,6).setValue("=EXP((C"+(n+2)+"-(A"+(n+2)+" * F6))/"+n+")");

    //Запись значений Ymod
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,7).setValue("Ymod");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,7).setValue("=F8*EXP(F6*A"+(i+2)+")");
    }
  }

  //Заполнение таблицы для логарифмической регрессии
  if(selectValue == 5){
    
    //Запись значений lnX
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,3).setValue("lnX");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,3).setValue("=ln(A"+(i+2)+")");
    }
    
    //Запись значений ln(X^2)
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,4).setValue("ln(X^2)");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,4).setValue("=C"+(i+2)+"^2");
    }

    //Запись значений lnX*Y
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,5).setValue("lnX * Y");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,5).setValue("=B"+(i+2)+"*C"+(i+2)+"");
    }

    //Запись системы уравнений и значений a и b
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,6).setValue("Система уравнений");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,6).setValue("Ymod = a + (b * lnX)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,6).setValue("a * n + b * ∑lnX = ∑Y");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,6).setValue("a * ∑lnX + b * ∑ln(X^2) = ∑(Y * lnX)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(5,6).setValue("Значение b");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(6,6).setValue("=(E"+(n+2)+"-(C"+(n+2)+"*B"+(n+2)+"/"+n+"))/(D"+(n+2)+"-(C"+(n+2)+"*C"+(n+2)+"/"+n+"))");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(7,6).setValue("Значение a");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(8,6).setValue("=(B"+(n+2)+"-(C"+(n+2)+" * F6))/"+n+"");

    //Запись значений Ymod
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,7).setValue("Ymod");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,7).setValue("=F8+(F6*C"+(i+2)+")");
    }
  }
  
  //Заполнение таблицы для показательной регрессии
  if(selectValue == 6){
    
    //Запись значений lnY
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,3).setValue("lnY");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,3).setValue("=ln(B"+(i+2)+")");
    }
    
    //Запись значений X^2
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,4).setValue("X^2");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,4).setValue("=A"+(i+2)+"^2");
    }

    //Запись значений X*lnY
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,5).setValue("X * lnY");
    for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,5).setValue("=A"+(i+2)+"*C"+(i+2)+"");
    }

    //Запись системы уравнений и значений a и b
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,6).setValue("Система уравнений");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,6).setValue("Ymod = a + b^x");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,6).setValue("lna * n + lnb * ∑lnX = ∑lnY");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,6).setValue("lna * ∑lnX + lnb * ∑lnX^2 = ∑(X * lnY)");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(5,6).setValue("Значение b");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(6,6).setValue("=EXP((E"+(n+2)+"-(A"+(n+2)+"*C"+(n+2)+"/"+n+"))/(D"+(n+2)+"-(A"+(n+2)+"*A"+(n+2)+"/"+n+")))");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(7,6).setValue("Значение a");
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(8,6).setValue("=EXP((C"+(n+2)+"-(A"+(n+2)+"*(E6-(A6*C6/4))/(D6-(A6*A6/4))))/"+n+")");

    //Запись значений Ymod
    SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,7).setValue("Ymod");
    for(i=0; i<n; i++){
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,7).setValue("=F8*(F6^A"+(i+2)+")");
    }
  }
    //Общее решение для гиперболической, экспоненциальной, логарифмической и показательной регрессий
    if(selectValue == 3 || selectValue == 4 || selectValue == 5 || selectValue == 6){
      
      //Запись значений (Y-Ymod)^2
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,8).setValue("(Y-Ymod)^2");
      for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,8).setValue("=(B"+(i+2)+"-G"+(i+2)+")^2");
      }
  
      //Запись значений (Y - Yсред)^2
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,9).setValue("(Y - Yсред)^2");
      for(i=0; i<n; i++){
        SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+2,9).setValue("=(B"+(i+2)+"-B"+(n+3)+")^2");
      }
  
      //Запись индекса корреляции
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,10).setValue("Индекс корреляции");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,10).setValue("=SQRT(ABS(1-(H"+(n+2)+"/I"+(n+2)+")))");
  
      //Запись индекса детерминации
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,11).setValue("Индекс детерминации");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,11).setValue("=J2^2");
      
      //Запись критерия Фишера
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,12).setValue("Критерий Фишера");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,12).setValue("=(K2/(1-K2))*("+n+"-2)");
      var arr_fisher_tabl = ["161.45", "18.51", "10.13", "7.71", "6.61", "5.99", "5.59", "5.32", "5.12", "4.96", "4.84", "4.75", "4.67", "4.60", "4.54", "4.49", "4.45", "4.41", "4.38", "4.35", "4.32", "4.30", "4.28", "4.26", "4.24", "4.22", "4.21", "4.20", "4.18", "4.17"];
      var fisher_tabl = 0;
      for(i=0; i<(n-2); i++){
        fisher_tabl = parseFloat(arr_fisher_tabl[i]);
      }
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,12).setValue("Табличное значение Фишера");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(4,12).setValue(fisher_tabl);
  
      //Запись ошибки аппроксимации
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(1,13).setValue("Ошибка аппроксимации");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(2,13).setValue("=(1/"+n+")*M"+(n+4)+"*100");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(3,13).setValue("Значения для формулы");
      for(i=0; i<n; i++){
          SpreadsheetApp.openById(ssid).getSheets()[0].getRange(i+4,13).setValue("=ABS((B"+(i+2)+"-G"+(i+2)+")/B"+(i+2)+")");
      }
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+4,13).setValue("=sum(M4:M"+(n+3)+")");
  
      //Запись значений суммы в столбцах
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,1).setValue("=sum(A2:A"+(n+1)+")");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,2).setValue("=sum(B2:B"+(n+1)+")");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,3).setValue("=sum(C2:C"+(n+1)+")");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,4).setValue("=sum(D2:D"+(n+1)+")");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,5).setValue("=sum(E2:E"+(n+1)+")");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,8).setValue("=sum(H2:H"+(n+1)+")");
      SpreadsheetApp.openById(ssid).getSheets()[0].getRange(n+2,9).setValue("=sum(I2:I"+(n+1)+")");
  }

  //Обшая настройка отображения таблицы
  SpreadsheetApp.openById(ssid).getSheets()[0].getRange("A1:O"+(n+9)+"").setVerticalAlignment("middle");
  SpreadsheetApp.openById(ssid).getSheets()[0].getRange("A1:O"+(n+9)+"").setHorizontalAlignment("center");
  SpreadsheetApp.openById(ssid).getSheets()[0].getRange("A2:O"+(n+9)+"").setNumberFormat("0.###");

  //Настройка отображения таблицы для линейной регрессии
  if(selectValue == 0){
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(1,4,60);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidth(5,200);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidth(6,60);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(7,8,120);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(9,10,200);
  }

  //Настройка отображения таблицы для степенной регрессии
  if(selectValue == 1){
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(1,6,70);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidth(7,250);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidth(8,70);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(9,10,120);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(11,14,200);
  }

  //Настройка отображения таблицы для параболической регрессии
  if(selectValue == 2){
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(1,7,70);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidth(8,270);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidth(9,70);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(10,11,120);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(12,15,200);
  }

  if(selectValue == 3 || selectValue == 4 || selectValue == 5 || selectValue == 6){
  //Настройка отображения таблицы для гиперболической, экспоненциальной, логарифмической и показательной регрессии
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(1,5,70);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidth(6,250);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidth(7,70);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(8,9,120);
    SpreadsheetApp.openById(ssid).getSheets()[0].setColumnWidths(10,13,200);
  }

  //Вывод сообщения с ссылкой на таблицу
  var ssurl = ss.getUrl();
  return ContentService.createTextOutput("Ваша ссылка на таблицу:"+' '+ssurl);
}