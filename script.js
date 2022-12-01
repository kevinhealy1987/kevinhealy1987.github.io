function arraySize() {
    var arraySize = document.getElementById("array-size").value;

    inputArray(arraySize);
}

function inputArray(arraySize) {
    numbers = Array(arraySize);

    for (i = 0; i < arraySize; i++) {
        numbers[i] = prompt("Enter number to add to array: ");
    }

    meanArray(numbers);
    sumArray(numbers);
}

function meanArray(numbers) {
    let sum = 0;
    let mean = 0;

    for (i = 0; i < numbers.length; i++) {
        sum = sum + parseFloat(numbers[i]); // numbers[i] value not treated as a number?
    }

    mean = sum / numbers.length;

    alert("The mean of the numbers provided is " + mean.toFixed(4));
}

function sumArray(numbers) {
    let sum = 0;

    for (i = 0; i < numbers.length; i++) {
        sum = sum + parseFloat(numbers[i]);
    }

    alert("The sum of the numbers provided is " + sum.toFixed(4));
}