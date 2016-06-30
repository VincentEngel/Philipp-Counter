var dPhilippPlzPlus = 0;
var dPhilippPlzMinus = 0;
var $linesAdded = $('.lines-added');
var dPhilippFiles = $linesAdded.size();

$linesAdded.each(function(){
	var d = $(this).text();
	if ($.isNumeric(d)) {
		dPhilippPlzPlus += parseInt(d, 10);
	}
});

$('.lines-removed').each(function(){
	var d = $(this).text();
	if ($.isNumeric(d)) {
		dPhilippPlzMinus -= parseInt(d, 10);
	}
});

console.log(dPhilippPlzPlus + ' Zeilen hinzugefügt.');
console.log(dPhilippPlzMinus + ' Zeilen entfernt.');
console.log(dPhilippFiles + ' Dateien geändert.');
