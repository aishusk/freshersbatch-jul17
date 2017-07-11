function sorting()
{
var points = [40, 100, 1, 5, 25, 10];
var ans;
var value1=document.getElementById("val").value;
switch(value1)
{
	
case "asc":

	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a, b){return a-b});
	document.getElementById("main").innerHTML=points;
	break;
case "desc":
	var points = [40, 100, 1, 5, 25, 10];
	points.sort(function(a, b){return b-a});
	document.getElementById("main").innerHTML=points;
	break;
default:
alert("invalid choice");
}
}