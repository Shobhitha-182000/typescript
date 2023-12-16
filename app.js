var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var button = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
button.addEventListener('click', function () {
    var num1 = parseFloat(number1.value);
    var num2 = parseFloat(number2.value);
    // Check if the conversion is successful before proceeding
    if (!isNaN(num1) && !isNaN(num2)) {
        var result = add(num1, num2);
        console.log(result);
    }
    else {
        console.error("Invalid input. Please enter valid numbers.");
    }
});
