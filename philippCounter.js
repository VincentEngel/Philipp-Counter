var dPhilippPlzPlus = 0;
var dPhilippPlzMinus = 0;
var $linesAdded = $('.lines-added');
var dPhilippPlzAdded = $("[original-title='Added']").length;
var dPhilippPlzDeleted = $("[original-title='Deleted']").length;
var dPhilippPlzEdited = $("[original-title='Modified'],[original-title^='Conflict']").length;

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
console.log(dPhilippPlzAdded + ' Dateien hinzugefügt.');
console.log(dPhilippPlzEdited + ' Dateien geändert.');
console.log(dPhilippPlzDeleted + ' Dateien entfernt.');

alert(dPhilippPlzPlus + ' Zeilen hinzugefügt.\n' + dPhilippPlzMinus + ' Zeilen entfernt.\n' + dPhilippPlzAdded + ' Dateien hinzugefügt.\n' + dPhilippPlzEdited + ' Dateien geändert.\n' + dPhilippPlzDeleted + ' Dateien entfernt.');
