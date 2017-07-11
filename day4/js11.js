var ca=0;
var ce=0;
var ci=0;
var co=0;
var cu=0;
function vcheck()
{
var str1=document.getElementById("str").value;
var str2=str1.split("");
for(var i in str2)
{
	if(str2[i]=='a')
	{	ca++;
	}
	if(str2[i]=='e')
	{
		ce++;
	}
	if(str2[i]=='i')
	{
		ci++;
	}
	if(str2[i]=='o')
	{
		co++;
	}
	if(str[i]=='u')
	{
		cu++;
	}
}
var msg=
alert("a="+ca+"e="+ce+"i="+ci+"o="+co+"u="+cu);
}
