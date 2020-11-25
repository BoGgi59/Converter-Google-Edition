let type = document.querySelector('#type');
let input = document.querySelector('#input');
let result = document.querySelector('#result');
let tempInput= document.querySelector('#tempInput');
let tempOutput = document.querySelector('#tempOutput');
let formula = document.querySelector('#formula');
let lengthInput = document.querySelector('#lengthInput');
let lengthOutput = document.querySelector('#lengthOutput');
let weightInput = document.querySelector('#weightInput');
let weightOutput = document.querySelector('#weightOutput');




//Add event listeners 
document.addEventListener("DOMContentLoaded", typeOfConvert, true); //page downloaded event listener
type.addEventListener('change', typeOfConvert); //select input change event listener
input.addEventListener('keyup', myResult); //input box keyup event listener
tempInput.addEventListener('change', myResult);
tempOutput.addEventListener('change', myResult);
input.addEventListener('keyup', resultWeight);


function myResult () {
  //Formulas C -> K & F
  if (type.value === "temperature" && tempInput.value === "celsius" && tempOutput.value ==="celsius") {
    result.value = Number(input.value)*1;
    formula.innerHTML = `${Number(input.value)} °C = ${Number(result.value)} °C `;

    if (input.value === "") {
      result.value = "";
      formula.innerHTML = `°C = °C `;
    }
     } else if(type.value === "temperature" && tempInput.value === "celsius" && tempOutput.value ==="kelvin") {
      result.value = Number(input.value) + 273.15;
      formula.innerHTML = ` ${Number(input.value)} °C + 273.15 = ${Number(result.value)} °K`;

      if (input.value === "") {
        result.value = "";
        formula.innerHTML = `°C + 273.15 = °K `;
    }
   } else if (type.value === "temperature" && tempInput.value === "celsius" && tempOutput.value ==="fahrenheit") {
      result.value = ((Number(input.value) * 9/5) + 32);
      formula.innerHTML = `(${Number(input.value)} °C * 9/5) + 32 = ${Number(result.value)} °F `;

      if (input.value === "") {
        result.value = "";
        formula.innerHTML = `(°C * 9/5) + 32 = °F `;
    }
   } 
   

  //Formulas K -> C & F 
  if (type.value === "temperature" && tempInput.value ==="kelvin" && tempOutput.value ==="celsius") {
    result.value = Number(input.value) - 273.15;
    formula.innerHTML = ` ${Number(input.value)} °K - 273.15 = ${Number(result.value)} °C`;

    if (input.value === "") {
      result.value = "";
      formula.innerHTML = `°K - 273.15 = °C `;
    }
  } else if (type.value === "temperature" && tempInput.value === "kelvin" && tempOutput.value ==="kelvin") {
      result.value = Number(input.value)*1;
      formula.innerHTML = ` ${Number(input.value)} °K  = ${Number(result.value)} °K`;

      if (input.value === "") {
        result.value = "";
        formula.innerHTML = `°K = °K `;
    }
  } else if (type.value === "temperature" && tempInput.value === "kelvin" && tempOutput.value ==="fahrenheit") {
      result.value = ((Number(input.value)-273.15) * 9/5) + 32;
      formula.innerHTML = ` (${Number(input.value)} °K - 273.15) * 9/5 + 32 = ${Number(result.value)} °F`;

      if (input.value === "") {
        result.value = "";
        formula.innerHTML = `(°K - 273.15) * 9/5 + 32 = °F `;
    }
  }


  //Formulas for F-> K & C
  if (type.value === "temperature" && tempInput.value === "fahrenheit" && tempOutput.value ==="celsius"){
      result.value = (Number(input.value)-32)*5/9;
      formula.innerHTML = ` (${Number(input.value)} °F - 32) * 5/9 = ${Number(result.value)} °C`;

      if (input.value === "") {
        result.value = "";
        formula.innerHTML = `(°F - 32) * 5/9 = °C `;
  }

  } else if(type.value === "temperature" && tempInput.value === "fahrenheit" && tempOutput.value ==="kelvin") {
      result.value = ((Number(input.value)-32)*5/9)+273.15;
      formula.innerHTML = ` (${Number(input.value)} °F - 32) * 5/9  + 273.15 = ${Number(result.value)} °C`;

      if (input.value === "") {
        result.value = "";
        formula.innerHTML = `((°F - 32) * 5/9) + 273.15 = °K `;
    }

  }else if (type.value === "temperature" && tempInput.value === "fahrenheit" && tempOutput.value ==="fahrenheit") {
    result.value = Number(input.value);
    formula.innerHTML = `${Number(input.value)} °F = ${Number(result.value)} °F `;

    if (input.value === "") {
      result.value = "";
      formula.innerHTML = `°F  = °F `;
    }
  }
}

weightInput.addEventListener('change', resultWeight);
weightOutput.addEventListener('change', resultWeight);

function resultWeight () {
  
if (type.value === "weight" && weightInput.value === "mikrogram" && weightOutput.value === "mikrogram") {
  result.value =Number(input.value)*1;
  formula.innerHTML = `Mutiply value by 1`;

if (input.value === "") {
      result.value = "";
      formula.innerHTML = `µg = µg `;
    }
  }else if (type.value === "weight" && weightInput.value === "mikrogram" && weightOutput.value === "miligram"){
    
 result.value = Number(input.value) / 1000; //miligram;
  }else if (type.value === "weight" && weightInput.value === "mikrogram" && weightOutput.value === "gram"){
    result.value = Number(input.value) / 1000000; 
  }


}



function typeOfConvert () {    
  if (type.value === "temperature") {   
    lengthInput.hidden = true;
    lengthOutput.hidden = true;
    tempInput.hidden = false;
    tempOutput.hidden = false;
    weightInput.hidden = true;
    weightOutput.hidden = true;
  }

  if (type.value === "length") {
    tempInput.hidden = true;
    tempOutput.hidden= true;
    lengthInput.hidden = false;
    lengthOutput.hidden = false;
    weightInput.hidden = true;
    weightOutput.hidden = true;
  }

  if (type.value === "weight"){
    tempInput.hidden = true;
    tempOutput.hidden= true;
    lengthInput.hidden = true;
    lengthOutput.hidden = true;
    weightInput.hidden = false;
    weightOutput.hidden = false;
  }
  input.value = '';
  result.value = '';
}