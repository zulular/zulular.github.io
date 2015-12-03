window.onload = range_check;
function range_check() {
	if (navigator.userAgent.indexOf("MSIE")!=-1) {
		var range = document.getElementById('ValueOfTheObject');
		range.style.display="none";

		var range2 = document.getElementById('FirstPay');
		range2.style.display="none";
		
		var range3 = document.getElementById('BuyOut');
		range3.style.display="none";

		var range4 = document.getElementById('Term');
		range4.style.display="none";
		
		var range5 = document.getElementById('UnpaidPartPay');
		range5.style.display="none";

		var range6= document.getElementById('Insurance');
		range6.style.display="none";		
	}
	if (navigator.userAgent.indexOf("Firefox")!=-1) {
		var range = document.getElementById('ValueOfTheObject');
		range.style.display="none";

		var range2 = document.getElementById('FirstPay');
		range2.style.display="none";
		
		var range3 = document.getElementById('BuyOut');
		range3.style.display="none";

		var range4 = document.getElementById('Term');
		range4.style.display="none";
		
		var range5 = document.getElementById('UnpaidPartPay');
		range5.style.display="none";

		var range6= document.getElementById('Insurance');
		range6.style.display="none";		
		}
		
	if (navigator.userAgent.indexOf("MSIE 10")!=-1) {
		var range = document.getElementById('ValueOfTheObject');
		range.style.display="inline";

		var range2 = document.getElementById('FirstPay');
		range2.style.display="inline";
		
		var range3 = document.getElementById('BuyOut');
		range3.style.display="inline";

		var range4 = document.getElementById('Term');
		range4.style.display="inline";
		
		var range5 = document.getElementById('UnpaidPartPay');
		range5.style.display="inline";

		var range6= document.getElementById('Insurance');
		range6.style.display="inline";		
	}
}

function table(rows) {	
	var rows = document.getElementById('Term').value;
	var G3 = document.getElementById('ValueOfTheObject').value;
	var G5 = document.getElementById('FirstPay').value/100;
	var G6 = (document.getElementById('BuyOut').value/100)*G3;
	var G7 = document.getElementById('Term').value;
	var G8 = document.getElementById('UnpaidPartPay').value/100;
	var G9 = document.getElementById('Insurance').value/100;
	//завдання для блока info
	var table = document.getElementById("table");
	var info = document.getElementById('info');
	var print = document.getElementById("print");
	
	rows_l = table.rows.length;
	for (i = rows_l-1; i>2; --i) {
		table.deleteRow(i);
	}
	
	table.style.visibility="visible";
	document.getElementById("infoValueOfTheObject").value = G3;
	document.getElementById("infoFirstPay").value = (G5*100).toFixed(0);
	document.getElementById("infoBuyOut").value = (G6/G3*100).toFixed(0);
	document.getElementById("infoTerm").value = G7;
	document.getElementById("infoUnpaidPartPay").value = (G8*100).toFixed(1);
	document.getElementById("infoInsurance").value = (G9*100).toFixed(2);	
	info.style.visibility="visible";
	print.style.visibility="visible";
	excell.style.visibility="visible";
	
	col1 =  G3*G5;
	col2 =  col1-(col1/6);
	col3 =  col1/6;
	col4 =  0;
	col5 =  col1+col4;
	add6CellRow(table, 3, 
		"Перший внесок", 
		String(col1.toFixed()),
		String(col2.toFixed()), 
		String(col3.toFixed()),
		String(col4.toFixed()),
		String(col5.toFixed())
		);
	var Sum = col1;
	var col1sum = col1;
	var col2sum = col2;
	var col3sum = col3;
	var col4sum = col4;
	var col5sum = col5;

	//ця змінна показує, скільки рядків є вище цього блоку
	var first_row = 4;
	var last_row = parseInt(rows)+first_row-1;
	// alert(last_row);
	for (i = first_row; i<=last_row; ++i) {	
		col1 = (G3-G3*G5-G6)/G7;
		col2 = col1-(col1/6);
		col3 = col1/6;
		if (((i % 12)==first_row)||(i==first_row)) 
		{ 
			var part1 = ((G3 - Sum)*G8/12);
			var part2 = 0;
			if ((G7-i-12+first_row)>0) {part2 = G3*G9;} 
			else {part2 = ((G7-i+first_row)/12)*G3*G9}
			col4 = part1+part2;
		}
		else {col4 = (G3-Sum)*G8/12;}
		col5 = col1+col4;
		
		Sum+=col1;

		col1sum += col1;
		col2sum += col2;
		col3sum += col3;
		col4sum += col4;
		col5sum += col5;
		
		add6CellRow(table, i, 
			(i-first_row+1)+' місяць', 
			String(col1.toFixed()),
			String(col2.toFixed()), 
			String(col3.toFixed()),
			String(col4.toFixed()),
			String(col5.toFixed())
			);
	}	
	//alert('for is finished');
	col1 =  G6;
	col2 =  (col1-(col1/6)).toFixed();
	col3 =  (col1/6).toFixed();
	//col4 =  0;
	//alert(i);
		if (((i % 12)==first_row)||(i==first_row)) 
		{ 
			var part1 = ((G3 - Sum)*G8/12);
			var part2 = 0;
			if ((G7-i-12+first_row)>0) {part2 = G3*G9;} 
			else {part2 = ((G7-i+first_row)/12)*G3*G9}
			col4 = part1+part2;
		}
		else {col4 = (G3-Sum)*G8/12;}
	col5 =  col1+col4;
	
	add6CellRow(table, parseInt(last_row,10)+1, 
		'Викупна вартість', 
		String(col1.toFixed()),
		String(col2), 
		String(col3),
		String(col4.toFixed()),
		String(col5.toFixed())
		);
	
	var total1 = Number(col1sum)+Number(col1);
	var total2 = Number(col2sum)+Number(col2);
	var total3 = Number(col3sum)+Number(col3);
	var total4 = Number(col4sum)+Number(col4);
	var total5 = Number(total1)+Number(col4sum);
	
	add6CellRow(table, parseInt(last_row,10)+2, 
			'Усього', 
			String(total1.toFixed()),
			String(total2.toFixed()), 
			String(total3.toFixed()),
			String(total4.toFixed()),
			String(total5.toFixed())
			);
	//alert('we are here!');
};

function add6CellRow(table, row, v1,v2,v3,v4,v5,v6) {
	var row = table.insertRow(row);

	var element1 = document.createElement("label");	
	if (navigator.userAgent.indexOf("Firefox")!=-1) {element1.textContent  = v1;} else {element1.innerText = v1;}
	//alert(element1.innerText);
	
	var element2 = document.createElement("label");	
	if (navigator.userAgent.indexOf("Firefox")!=-1) {element2.textContent  = v2;} else {element2.innerText = v2;}

	var element3 = document.createElement("label");	
	if (navigator.userAgent.indexOf("Firefox")!=-1) {element3.textContent  = v3;} else {element3.innerText = v3;}

	var element4 = document.createElement("label");	
	if (navigator.userAgent.indexOf("Firefox")!=-1) {element4.textContent  = v4;} else {element4.innerText = v4;}

	var element5 = document.createElement("label");	
	if (navigator.userAgent.indexOf("Firefox")!=-1) {element5.textContent  = v5;} else {element5.innerText = v5;}

	var element6 = document.createElement("label");	
	if (navigator.userAgent.indexOf("Firefox")!=-1) {element6.textContent  = v6;} else {element6.innerText = v6;}


	var cell1 = row.insertCell(0);
	cell1.appendChild(element1);
		
	var cell2 = row.insertCell(1);
	cell2.appendChild(element2);
		
	var cell3 = row.insertCell(2);
	cell3.appendChild(element3);

	var cell4 = row.insertCell(3);
	cell4.appendChild(element4);

	var cell5 = row.insertCell(4);
	cell5.appendChild(element5);

	var cell6 = row.insertCell(5);
	cell6.appendChild(element6);
};

function check(num,max){
	if ((num[num.length-1])==",") {
		num = num.substr(0,num.length-1);
		num = num+"."
	}
	if (num>max) {return max;} else return num;
}

function printdiv(divId) {
	var divToPrint=document.getElementById('calc');
	newWin= window.open("");
	newWin.document.write(divToPrint.innerHTML);
	newWin.print();
	newWin.close();
}

function infoTable() {
	var table = document.getElementById('info');
}

var tableToExcel = (function() {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
  }
})()