const number1 = document.getElementById('num1') as HTMLInputElement;
const number2 = document.getElementById('num2') as HTMLInputElement;
const button = document.querySelector('button');

function add(num1: number, num2: number): number {
    return num1 + num2;
}

 

button.addEventListener('click', () => {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);

    // Check if the conversion is successful before proceeding
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = add(num1, num2);
        console.log(result);
    } else {
        console.error("Invalid input. Please enter valid numbers.");
    }
});
