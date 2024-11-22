// script.js
document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  
    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('Please enter valid values for weight and height.');
      return;
    }
  
    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);
  
    // Determine BMI category
    let category = '';
    let categoryColor = '';
    if (bmi < 18.5) {
      category = 'Underweight';
      categoryColor = '#ffc107'; // Yellow
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Normal weight';
      categoryColor = '#28a745'; // Green
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
      categoryColor = '#fd7e14'; // Orange
    } else {
      category = 'Obesity';
      categoryColor = '#dc3545'; // Red
    }
  
    // Display result
    const resultDiv = document.getElementById('result');
    document.getElementById('bmiValue').innerText = bmi;
    const bmiCategoryElement = document.getElementById('bmiCategory');
    bmiCategoryElement.innerText = category;
    bmiCategoryElement.style.color = categoryColor;
  
    resultDiv.classList.remove('hidden');
  });
  