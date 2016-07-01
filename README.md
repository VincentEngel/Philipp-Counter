# Philipp-Counter
Counts lines added, removed and files changed in a bitbucket pr.

As a bookmark/bookmarklet:
<pre><code>
javascript:var dPhilippPlzPlus=0,dPhilippPlzMinus=0,$linesAdded=$(".lines-added"),dPhilippFiles=$linesAdded.size();$linesAdded.each(function(){var i=$(this).text();$.isNumeric(i)&&(dPhilippPlzPlus+=parseInt(i,10))}),$(".lines-removed").each(function(){var i=$(this).text();$.isNumeric(i)&&(dPhilippPlzMinus-=parseInt(i,10))}),alert(dPhilippPlzPlus+" Zeilen hinzugefügt.\n"+dPhilippPlzMinus+" Zeilen entfernt.\n"+dPhilippFiles+" Dateien geändert.");</code></pre>

![alt tag](https://github.com/VincentEngel/Philipp-Counter/blob/master/Screen%20Shot%202016-07-01%20at%2009.50.26.png?raw=true)
