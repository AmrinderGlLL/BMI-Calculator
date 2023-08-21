document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const bmiResult = document.getElementById('bmiResult');

    calculateButton.addEventListener('click', function() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || height <= 0) {
            bmiResult.textContent = 'Invalid input';
            return;
        }

        const bmi = weight / (height * height);
        bmiResult.textContent = bmi.toFixed(2);
    });
});
