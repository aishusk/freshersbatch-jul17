function account(accNo,accName,accBal)
{
	this.accNo=accNo;
	this.accName=accName;
	this.accBal=accBal;
}
account.prototype.withdraw=function(amt)
{
	this.amt=amt;
	this.accBal=this.accBal-amt;
	
	alert(this.accBal);
	return accBal;
	
};
account.prototype.deposit=function(amt)
{
	this.amt=amt;
	this.accBal=this.accBal+amt;
	alert(this.accBal);
	return accBal;

	};
	account.prototype.accNo=function()
	{
		return accNo;
	};
	account.prototype.accName=function()
	{
		return accName;
	};
	account.prototype.accBal=function()
	{
		return accBal;
	};
	function withdraw()
	{
		var bank=new account(1,"aishu",100);
		bank.withdraw(10);
	}
		function deposit()
	{
		var bank=new account(1,"aishu",100);
		bank.deposit(10);
	}

