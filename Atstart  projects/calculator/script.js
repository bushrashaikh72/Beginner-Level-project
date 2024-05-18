let displayValue = '';

function appendToDisplay(value) {
    if (value === '%') {
        // Append the % symbol to the display
        displayValue += value;
        document.getElementById('display').value = displayValue;
    } else {
        // Append other numbers and operators to the display
        displayValue += value;
        document.getElementById('display').value = displayValue;
    }
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function deleteLastChar() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}
