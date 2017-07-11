function account(accNo,accName,amt)

{
var accNo1=accNo;
var accName1=accName;

var balance=amt;
withdraw=function(amt)
{
	balance=balance-amt;
	document.write(balance);
},
deposit=function(amt)
{
	balance=balance+amt;
	document.write(balance);
};
return{
	withdraw:function(amt)
	{
		return(withdraw(amt));
	},
	deposit:function(amt)
	{
		return(deposit(amt));
	},
	balance:function()
	{
		return (balance);
	},
	accName1:function()
	{
		return(accName1);
	}
}
}
function withdraw()
{
	
var test=new account(1,"aishu",1000);
test.withdraw(10);
//test.deposit(50);
}
function deposit()
{
	
var test=new account(1,"aishu",1000);
test.deposit(10);
//test.deposit(50);
}