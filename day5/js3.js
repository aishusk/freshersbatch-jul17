var account=
{
name:"Unknown",
accNo:0,
balance:0,

withdraw: function(amount)
{
this.balance=this.balance-amount;
document.write(this.balance);
},
deposit:function(amount)
{
this.balance=this.balance+amount;
document.write(this.balance);
}
};
function withdraw()
{
var bank=Object.create(account);
bank.name="aishu";
bank.accNo=2;
bank.balance=1000;

bank.withdraw(200);
var val=bank.balance;
console.log();

}
function deposit()
{

var bank=Object.create(account);
bank.name="aishu";
bank.accNo=2;
bank.balance=1000;

bank.deposit(200);
var val=bank.balance;
console.log();
}	
	