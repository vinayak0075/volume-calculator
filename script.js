function calculateVolume() {
    'use strict';
    // Get the values from the input fields
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;

    // Convert input values to floating-point numbers
    length = parseFloat(length);
    width = parseFloat(width);
    height = parseFloat(height);

    // Check if inputs are valid numbers
    if (isNaN(length) || isNaN(width) || isNaN(height) || length < 0 || width < 0 || height < 0) {
        document.getElementById('volume').textContent = 'Invalid Input';
        return;
    }

    // Calculate the volume (volume = length * width * height)
    var volumeAmount = length * width * height;

    // Display the result, formatted to two decimal places
    document.getElementById('volume').textContent = volumeAmount.toFixed(2);
}
