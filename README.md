# Philipp-Counter
Counts lines added, removed and files changed in a bitbucket pr.

As a bookmark/bookmarklet:
<pre><code>
javascript:var dPhilippPlzPlus=0,dPhilippPlzMinus=0,$linesAdded=$(".lines-added"),dPhilippFiles=$linesAdded.size();$linesAdded.each(function(){var i=$(this).text();$.isNumeric(i)&&(dPhilippPlzPlus+=parseInt(i,10))}),$(".lines-removed").each(function(){var i=$(this).text();$.isNumeric(i)&&(dPhilippPlzMinus-=parseInt(i,10))}),alert(dPhilippPlzPlus+" Zeilen hinzugefügt.\n"+dPhilippPlzMinus+" Zeilen entfernt.\n"+dPhilippFiles+" Dateien geändert.");</code></pre>
