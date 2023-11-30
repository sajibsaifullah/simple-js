// Example-1
function changeText() {
  document.getElementById("name-text").innerHTML = "Sajib";
}

// Example-2
document.getElementById("toggle-btn").addEventListener("click", function () {
  let textChange = document.getElementById("text-1").innerText;
  //   console.log(textChange)

  if (textChange == "Saifullah") {
    textChange = "Sajib";
    document.getElementById("text-1").innerText = textChange;
  } else {
    textChange = "Saifullah";
    document.getElementById("text-1").innerText = textChange;
    // console.log(textChange)
  }
});

// Example-3
document.getElementById("calc").addEventListener("click", function () {
  const num1 = parseInt(document.getElementById("num-1").innerText);
  const num2 = parseInt(document.getElementById("num-2").innerText);

  const result = num1 + num2;

  document.getElementById("result-3").innerText = result;
});

// Example-4
document.getElementById("calculate").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number-1").value);
  const number2 = parseFloat(document.getElementById("number-2").value);
  // console.log(number1, number2)

  const result = number1 * number2;
  

  if (isNaN(number1) || isNaN(number2)) {
    document.getElementById("result-4").innerText = 'syntax error';
    return alert("Please in a valid number");
  }
  
  document.getElementById("result-4").innerText = result;
});
