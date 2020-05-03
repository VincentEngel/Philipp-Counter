# Philipp-Counter
Counts lines added, removed and files changed in a bitbucket pr.

As a bookmark/bookmarklet:
<pre><code>
javascript:var dPhilippPlzPlus=0,dPhilippPlzMinus=0,$linesAdded=$(".lines-added"),dPhilippPlzAdded=$("[original-title='Added']").length,dPhilippPlzDeleted=$("[original-title='Deleted']").length,dPhilippPlzEdited=$("[original-title='Modified'],[original-title^='Conflict']").length;$linesAdded.each(function(){var i=$(this).text();$.isNumeric(i)&&(dPhilippPlzPlus+=parseInt(i,10))}),$(".lines-removed").each(function(){var i=$(this).text();$.isNumeric(i)&&(dPhilippPlzMinus-=parseInt(i,10))});var text="";if(dPhilippPlzPlus>0)text+=dPhilippPlzPlus+" Zeilen hinzugefügt.\n";if(dPhilippPlzMinus>0)text+=dPhilippPlzMinus+" Zeilen entfernt.\n";if(dPhilippPlzAdded>0)text+=dPhilippPlzAdded+" Dateien hinzugefügt.\n";if(dPhilippPlzEdited>0)text+=dPhilippPlzEdited+" Dateien geändert.\n";if(dPhilippPlzDeleted>0)text+=dPhilippPlzDeleted+" Dateien entfernt.\n";text=text.slice(0,-2);alert(text);</code></pre>

![alt tag](https://github.com/VincentEngel/Philipp-Counter/blob/master/Screen%20Shot%202016-07-01%20at%2009.50.26.png?raw=true)
