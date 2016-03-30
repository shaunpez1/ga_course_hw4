var mylis = document.querySelectorAll("#selected-plays > li > ul > li");

for(var i = 0; i < mylis.length; i++){
	mylis[i].classList.add("special");

}


var mytd = document.querySelectorAll("table td:nth-child(3n+3)");

for(var i = 0; i < mytd.length; i++){
	mytd[i].classList.add("year");

}

var myrow = document.querySelectorAll("table tr:nth-child(even)");

for(var i = 0; i < myrow.length; i++){
	myrow[i].setAttribute("style", "background-color:#ccc;");

}

var myanchor = document.querySelector('#selected-plays a[href$=".pdf"]');

myanchor.style.color = "blue";
myanchor.style.fontSize = "15px";

var myhref = document.querySelector("#selected-plays a[href=\"/asyoulikeit/\"]");

myhref.style.color = "orange";
