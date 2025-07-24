const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculate() {
    let w = parseFloat(weight.value);
    let h = parseFloat(height.value) / 100;

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        output.innerText = "Please enter valid weight and height.";
        return;
    }

    let BMI = w / (h * h);

    if (BMI < 18.5) {
        output.innerText = "Underweight";
    } else if (BMI >= 18.5 && BMI < 25) {
        output.innerText = "Normal weight";
    } else if (BMI >= 25 && BMI < 30) {
        output.innerText = "Overweight";
    } else {
        output.innerText = "Obese";
    }
}

btn.addEventListener("click", calculate);