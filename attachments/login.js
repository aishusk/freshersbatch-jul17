function login()
{
var name=document.getElementById("usr").value;
var pass=document.getElementById("pwd").value;
if(name=="aishu" && pass=="1234")
{
	window.open("login.html");
}
else{
	alert("invalid credentials");'
}
}