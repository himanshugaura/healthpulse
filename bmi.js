let bmiCalc = () => {

    //   fetching html elements  
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let hMeasure = document.getElementById("height-measure").value;
    let wMeasure = document.getElementById("weight-measure").value;
    let result = document.getElementById("result");

    // conversion of weight and height

    if(hMeasure == "cm"){
        height = height * 0.01;
    }

    if(wMeasure == "pounds"){
        weight = weight * 0.454;
    }
    console.log(weight);

    // BMI calculate
    let bmi = (weight/(height*height)).toFixed(2);
    result.innerHTML= bmi;

    // if no input or invalid input

    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    result.innerHTML = 'Please enter valid values';
    }
}