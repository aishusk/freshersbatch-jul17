
function max1()
{
	var arr=[2,3,4,6,5,7,8];
	var max;
	max=arr[0];
for(i=0;i<=arr.length;i++)
{
	
	if(arr[i]>max)
	{
		max=arr[i];
	}
}
var msg="maximum value is";
alert(msg +max);
}
function min1()
{
	var arr=[2,3,4,6,5,7,8];
	var min;
		min=arr[0];
	for(i=0;i<=arr.length;i++)
{

	if(arr[i]<min)
	{
		min=arr[i];
	}
}
var msg="minimum value is";
alert(msg +min);
}
function avg1()
{
var arr=[2,3,4,6,5,7,8];
	var sum=0;
	for(var i=0;i<arr.length;i++)
	{
		sum=sum+arr[i];
	}
	var avg=sum/arr.length;
	var msg="avg value is";
	alert(msg +avg);
}
		