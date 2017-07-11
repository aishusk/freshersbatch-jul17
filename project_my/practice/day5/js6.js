var KeyManager=(function(){
	var employee=[];
	return{
		addEmploy:function(Employee){employee.push(employee);},
		getEmploy:function(){return employee;},
		sortEmp:function()
		{return
		employee.sort(function(a,b){ return a.empId-b.empId});
	}
	}
})();
function Employee(empId,empName,empSal,empDept)
{
	this.empId=empId;
	this.empName=empName;
	this.empSal=empSal;
	this.empDept=empDept;
	
}
function create()
{
var emp1=new Employee(2,"aishu",1200,2);
KeyManager.addEmploy(emp1);
var emp2=new Employee(1,"aishu",1200,5);
KeyManager.addEmploy(emp2);
var emp3=new Employee(5,"aishu",1200,2);
KeyManager.addEmploy(emp3);
KeyManager.sortEmp();
console.log(KeyManager.getEmploy());
}