function multiply1()
{
var num1=document.getElementById("num1").value;
var n;
	var result=[];
do{
	
	for(n=1;n<11;n++)
{
	res=num1*n;
	result.push(res);
	
}

var msg="do u want to continue";
 confirm(result+ msg);
}
while(yes);
}
