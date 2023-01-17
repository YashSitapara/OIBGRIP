function convertTemp() {
    let val = document.getElementById("input-val");
    let result = document.getElementById("result");
    let input = document.getElementById("input");
    let output = document.getElementById("output");
  
    val.addEventListener("keyup", convertTemp);
    input.addEventListener("change", convertTemp);
    output.addEventListener("change", convertTemp);
  
    let inputValue = input.value;
    let outputValue = output.value;
  

    if (inputValue === "celsius" && outputValue === "fahrenhiet") {
      result.value = Number((val.value * 9) / 5) + 32;
    } else if (inputValue === "celsius" && outputValue === "kelvin") {
      result.value = Number(val.value) + 273.15;
    } else if (inputValue === "celsius" && outputValue === "celsius") {
      result.value = val.value;
    }


    if (inputValue === "fahrenhiet" && outputValue === "celsius") {
      result.value = Number((val.value - 32) * 5) / 9;
    } else if (inputValue === "fahrenhiet" && outputValue === "kelvin") {
      result.value = Number(((val.value - 32) * 5) / 9) + 273.15;
    } else if (inputValue === "fahrenhiet" && outputValue === "fahrenhiet") {
      result.value = val.value;
    }
  

    if (inputValue === "kelvin" && outputValue === "celsius") {
      result.value = Number(val.value) - 273.15;
    } else if (inputValue === "kelvin" && outputValue === "fahrenhiet") {
      result.value = Number(((val.value - 273.15) * 9) / 5) + 32;
    } else if (inputValue === "kelvin" && outputValue === "kelvin") {
      result.value = val.value;
    }
  }
  
  function reset(){
    document.getElementById("inputform").reset();
    document.getElementById("outputform").reset();
  } 