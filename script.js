
let num1Error = document.getElementById("num1Error");
let num2Error = document.getElementById("num2Error");
let operatorError = document.getElementById("opetatorError");
let btn = document.getElementById("caculateBtn");
let result = document.getElementById("result");
let finalResult;
let num1Status, num2Status, opStatus = false;

num1Error.style.display = "none";
num2Error.style.display = "none";
operatorError.style.display = "none";

btn.addEventListener("click", () => {
    let num1 = document.getElementById("fnum");
    let num2 = document.getElementById("snum");
    let operator  = document.getElementById("operators");
    
   
 

  
      

 
 checkValidation(num1,num2,operator);


 if(num1Status == false && num1Status == false && opStatus == false){
    num1 = parseInt(num1.value);
     num2 = parseInt(num2.value);


            switch (operator.value) {
            
                case "add":
                    finalResult = num1 + num2;
                    console.log(finalResult)

                    break;
                case "minus":
                    finalResult = num1 - num2;
                    console.log(finalResult)

                    break;
                case "multiply":
                    finalResult = num1 * num2;
                    console.log(finalResult)

                    break;
                case "divide":
                    finalResult = num1 / num2;
                    console.log(finalResult)

                    break;

                default: console.log(alert("eRROR"));
                    break;
            }
            
          result.innerHTML = finalResult;
 }
 
    }) 

    function checkValidation(num1,num2,operator){
        if (num1.value == undefined || num1.value == null || num1.value == "") {
            num1Error.style.display = "block";
            num1Status = true;
        }else{
            num1Error.style.display = "none";
            num1Status = false;
        }

        if ( num2.value ==null || num2.value == "" || num2.value == undefined) {
            num2Error.style.display = "block";
            num2Status = true;
        }else{
            num2Error.style.display = "none";
            num2Status = false;
        }
      
       if (operator.value == "empty") {
        operatorError.style.display = "block";
        opStatus = true;
       }else{
        operatorError.style.display = "none";
        opStatus = false;
       }
    }