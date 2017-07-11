function age()
{
	var user_age=document.getElementById("age1").value;
	var d=new Date;
var today=d.getFullYear();
document.getElementById("main").innerHTML=today;
var req_age=today-user_age;

alert(req_age);
}