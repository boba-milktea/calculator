const display = document.getElementById('display');
const keyboard = document.getElementById('keyboard');

// create the keyboard elements
const keyboardEle = [
  ['7', '8', '9', '+'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', 'x'],
  ['C', '0', '=', '÷'],
];

// looping the keyboard elements, create a div for each row.
keyboardEle.forEach((row) => {
  const rowEle = document.createElement('div');
  keyboard.append(rowEle);
  rowEle.classList.add('keyboard-row');

  // looping the row elements, create a div for each key button.
  row.forEach((key) => {
    const keyBtn = document.createElement('button');
    // for the button 3d effect
    const btnFront = document.createElement('span');
    btnFront.innerText = key;
    keyBtn.append(btnFront);
    rowEle.append(keyBtn);
    keyBtn.classList.add('keyboard-key');
    btnFront.classList.add('keyboard-key-front');

    // add a class to operator keys
    key === '=' ?
      btnFront.classList.add('equal') :
      key === 'C' ?
        btnFront.classList.add('clear') :
        key === '+' || key === '−' || key === 'x' || key === '÷' ?
          btnFront.classList.add('operator') :
          null;

    btnFront.addEventListener('click', () => {
      handleClick(key);
    });
  });
});

// display the resault in dislay div
let result = '';
let resultIsDisplayed = false;

/**
 * @param btnValue
 */
function handleClick(btnValue) {
  // If the display is 0, replace the value
  if (display.innerText === '0') {
    result = btnValue;
  } else if (resultIsDisplayed) {
    result = btnValue;
    // clear the display after the result is delivered
    resultIsDisplayed = !resultIsDisplayed;
  } else {
    // otherwse, concantenate the value
    result += btnValue;
  }

  // if C is clicked, the display goes back to default 0
  if (btnValue === 'C') {
    result = '0';
    display.innerText = result;
    return;
  }

  // if the equal "=" button is clicked, use the eval function to return the calculation result.
  if (btnValue === '=') {
    // replace the symbols to arithmetic operators
    result = result.replace(/x/g, '*').replace(/÷/g, '/').replace(/=/g, '');
    // use try, catch block to catch any errors.
    try {
      result = eval(result).toString();
      result = fixDecimals(result);
    } catch (err) {
      result = 'ERROR';
    }
    display.innerText = result;
    resultIsDisplayed = true;
    return;
  }

  // fix the decimal places when there too many
  /**
   * @param result
   * @param maxDecimals
   */
  function fixDecimals(result, maxDecimals = 10) {
    if (result.includes('.')) {
      const decimals = result.split('.')[1];
      if (decimals.length > maxDecimals) {
        return (result = parseFloat(result).toFixed(maxDecimals));
      }
      return result;
    }
    return result;
  }

  display.innerText = result;
}
