//This script works for the url that is in the following form: facebook.com/messages
//javascript:
str=window.location.href;
str= str.concat("<p>RecMessages</p><p>~~~~~~~~~Start~~~~~~~~~~~</p>");
links=document.getElementById("webMessengerRecentMessages").getElementsByTagName("p");
for(i in links){str=str.concat("<p>".concat(links[i].innerHTML))};
myWin = window.open("", "MsgWindow", "width=500, height=700");
myWin.document.write(str);
myWin.document.write("<p>~~~~~~~~~End~~~~~~~~~~~</p>");
//this snippet outputs all loaded messages from a facebook conversation to a new msgBox
