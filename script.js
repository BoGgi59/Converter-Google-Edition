let type = document.querySelector('#type');
let input = document.querySelector('#input');
let result = document.querySelector('#result');
let tempInput= document.querySelector('#tempInput');
let tempOutput = document.querySelector('#tempOutput');



 type.addEventListener('change', tempInputOn);
input.addEventListener('keyup', myResult);
tempInput.addEventListener('change', myResult);
tempOutput.addEventListener('change', myResult);

function myResult () {
  if (type.value === "temperature" && tempInput.value === "celsius" && tempOutput.value ==="celsius") {
    result.value = Number(input.value)*1;
  } else if(type.value === "temperature" && tempInput.value === "celsius" && tempOutput.value ==="kelvin") {
    result.value = Number(input.value) + 273.15;
  //   let celsToKel = document.createElement("p");
  //   celsToKel.innerHTML = "°C + 273.15";
  //  formula.appendChild(celsToKel);
   } else if (type.value === "temperature" && tempInput.value === "celsius" && tempOutput.value ==="fahrenheit") {
     result.value = ((Number(input.value) * 9/5) + 32);
   } 


if (type.value === "temperature" && tempInput.value ==="kelvin" && tempOutput.value ==="celsius") {
  result.value = Number(input.value) - 273.15;
} else if (type.value === "temperature" && tempInput.value === "kelvin" && tempOutput.value ==="kevin") {
  result.value = Number(input.value)*1;
} else if (type.value === "temperature" && tempInput.value === "kelvin" && tempOutput.value ==="fahrenheit") {
  result.value = ((Number(input.value)-273.15) * 9/5) + 32;
}


if (type.value === "temperature" && tempInput.value === "fahrenheit" && tempOutput.value ==="celsius"){
result.value = (Number(input.value)-32)*5/9;
} else if(type.value === "temperature" && tempInput.value === "fahrenheit" && tempOutput.value ==="kelvin") {
result.value = ((Number(input.value)-32)*5/9)+273.15;
}else if (type.value === "temperature" && tempInput.value === "fahrenheit" && tempOutput.value ==="fahrenheit") {
  result.value = Number(input.value);
}
}
function tempInputOn () {

let optCelcius = document.createElement('option');
optCelcius.value = 'celsius';
optCelcius.innerHTML = "Celsius";
tempInput.appendChild(optCelcius).hidden = true;
if (type.value === "temperature") {
  tempInput.appendChild(optCelcius).hidden = false;
}
else 
tempInput.appendChild(optCelcius).hidden = true;
}