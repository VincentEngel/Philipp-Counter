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

var text = "";

if (dPhilippPlzPlus > 0) text += dPhilippPlzPlus + ' Zeilen hinzugefügt.\n';
if (dPhilippPlzMinus > 0) text += dPhilippPlzMinus + ' Zeilen entfernt.\n';
if (dPhilippPlzAdded > 0) text += dPhilippPlzAdded + ' Dateien hinzugefügt.\n';
if (dPhilippPlzEdited > 0) text += dPhilippPlzEdited + ' Dateien geändert.\n';
if (dPhilippPlzDeleted > 0) text += dPhilippPlzDeleted + ' Dateien entfernt.\n';

text = text.slice(0, -2);

alert(text);
