function convert() {
    var input = document.getElementById("input").value;
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");
  
    if (unit === "celsius") {
      var fahrenheit = (input * 9/5) + 32;
      result.innerText = input + "°C = " + fahrenheit + "°F";
    } else if (unit === "fahrenheit") {
      var celsius = (input - 32) * 5/9;
      result.innerText = input + "°F = " + celsius + "°C";
    }
  }
  