function calculateMaintenanceCalories() {
    // Fetching html elements
    let age = parseFloat(document.getElementById('age').value);
    let gender = document.getElementById('gender').value;
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let activityLevel = document.getElementById('activityLevel').value;
    let hMeasure = document.getElementById("height-measure").value;
    let wMeasure = document.getElementById("weight-measure").value;
    let result = document.getElementById('result');

    // conversion of weight and height
    
    if(hMeasure === "m"){
        height = height*100;
    }

    if(wMeasure === "pounds"){
        weight = weight * 0.454;
    }
    
    let maintenanceCalories;


    // BMR calculate

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } 
    else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }


    // Calculate maintenance calories 
    switch (activityLevel) {
        case 'sedentary':
            maintenanceCalories = bmr*1.2;
            break;
        case 'light':
            maintenanceCalories = bmr*1.375;
            break;
        case 'moderate':
            maintenanceCalories = bmr*1.55;
            break;
        case 'active':
            maintenanceCalories = bmr*1.725;
            break;
        default:
            break;
    }

    result.innerHTML = `Your estimated maintenance calories: ${maintenanceCalories.toFixed(2)} kcal`;

    // if no input or invalid input

    if (isNaN(weight) || isNaN(height) || isNaN(age) || height <= 0 || weight <= 0) {
        result.innerHTML = 'Please enter valid values.';
    }
}