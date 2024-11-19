let num1 = 10;
let num2= 5;
let operator = "/";


function addNums(){
    return num1 + num2;

}

function subtractNums(){
    return num1 - num2;

}

function multipleNums(){
    return num1 * num2;

}

function divideNums(){
    return num1 / num2;

}

function operate(){

    switch(operator){
        case "+" :
            console.log(addNums());
            break;
        
        case "-":
            console.log(subtractNums());
            break;

        case "*":
            console.log(multipleNums());
            break;

        case "/":
            console.log(divideNums());
            break;
    }
}


