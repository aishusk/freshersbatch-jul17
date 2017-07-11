/*	var name=document.getElementById("name").value;
	var accNo=document.getElementById("accNo").value;
	var amt=document.getElementById("amt").value;*/
var acc1={
	Accname:"aishu",
	accNo1:1,
	
	balance:100000,
	
	
	withdraw:function (amount)
	{
		this.balance=this.balance-amount;
		console.log(this.balance);
	},
	deposit:function(amount)
	{
		this.balance=this.balance+amount;
		console.log(this.balance);
	}
};
function testWithdraw()
{
	acc1.withdraw(10);
	

}
function testDeposit()
{


	acc1.deposit(23);
	

}
	

