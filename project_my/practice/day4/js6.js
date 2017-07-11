  function prime1()
  {
                var i = 0;
                var j = 0;
				var result=[];
                var num1=document.getElementById("num1").value;
				var num2=document.getElementById("num2").value;
 
               
                for (i = num1; i <= num2; i++) {
                 
 
                    for (j = num1; j <= i; j++) {
                        
                        if (i % j == 0) {
                           
                            break;
							
                        }
                    }
	if(i==j)
	{
		result.push(i);
	}
                   
				}
                        document.getElementById("main").innerHTML=result;
                    }
                
            