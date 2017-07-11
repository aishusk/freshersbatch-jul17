var Test=function(accNo,accName,balance) {
    this.accNo = accNo;
    this.accName=accName;
    
	this.balance=balance;
   this.wihdraw=function(amount)
   {
	  this. balance=this.balance-amount;
};
this.deposit=function(amount)
{
	this.balance=this.balance-amount;
};
}
function withdraw()
{
	var account=new Test(1,"aishu",1000)
	account.wihdraw(100);
	console.log(account.balance);
}
function deposit()
{
	var account=new Test(1,"aishu",10000)
	account.deposit(500);
	console.log(account.balance);
}