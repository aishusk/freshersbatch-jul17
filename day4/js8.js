var attempt=0;

function verify1()
{
var username=document.getElementById("user").value;
var password=document.getElementById("pwd").value;

if(username=="aishusk" && password=="aishu")
{
	alert("successful");
}
else{
	
	if(attempt < 3)
	{ 
		alert("try again");
		attempt++;
	}
	else {
		alert('3 Invlid attemps!!');
	}	
}
}