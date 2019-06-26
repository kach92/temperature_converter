console.log("hello script js");
console.log(parseFloat("gg"))

var howCold = function(temp){
        if(temp < 0){
            document.querySelector('#output').innerText+= "\nOoh it's cold out";
        }else if(temp>40 && temp <100){
            document.querySelector('#output').innerText += "\nOoh it's hot out";
        }else if(temp>=100){
            document.querySelector('#output').innerText += "\nYour literally boiling";
        }else{
            document.querySelector('#output').innerText += "\nIts still ok!";
        }
    }


var inputHappened = function(input1,input2){
    var fToC = ((parseFloat(input1)-32)*(5/9)).toFixed(2);
    var cToF = ((parseFloat(input1)*(9/5))+32).toFixed(2);
    var cToK = (parseFloat(input1) + 273.15).toFixed(2);
    var fToK = (((parseFloat(input1)-32)*(5/9)) + 273.15).toFixed(2);
    var kToF = (((parseFloat(input1)-273.15)*(9/5))+32).toFixed(2);
    var kToC = (parseFloat(input1)-273.15).toFixed(2);

    var kelvin = parseFloat(input1).toFixed(2) + 273.15
    var inputType = (parseFloat(input1))



    if(isNaN(inputType)){
        display("You need to enter a number!")
    }else if(input2.toLowerCase() === "fahrenheit"){
        display("Kelvin: "+fToK+"\xBAK\nCelcius: "+fToC+"\xBAC")
        howCold(fToC);
    }else if(input2.toLowerCase() === "kelvin"){
        display("Fahrenheit: "+kToF+"\xBAF\nCelcius: "+kToC+"\xBAC")
        howCold(kToC);
    }else if(input2.toLowerCase() === "celcius"){
        display("Kelvin: "+cToK+"\xBAK\nFahrenheit: "+cToF+"\xBAF")
        howCold(parseFloat(input1));
    }else{
        display("Please enter a valid unit. (Must be either Celcius, Fahrenheit or Kelvin")
    }




};
