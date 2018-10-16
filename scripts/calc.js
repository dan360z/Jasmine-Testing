Calculator = function() {
    this.value = 0;
};
//Addition Function
Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
};
//Multiplication Function
Calculator.prototype.multiply = function(numOne, numTwo) {
    if (typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne * numTwo;
    } else {
        alert("Error!");
    }
};
////Subtraction Function
Calculator.prototype.subtract = function(numOne, numTwo) {
    if (typeof(numOne) == "number" && typeof(numTwo) == "number") {
        return numOne - numTwo;
    } else {
        alert("Error!");
    }
};