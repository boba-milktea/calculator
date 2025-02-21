const display = document.getElementById('display');
const keyboard = document.getElementById('keyboard');

const keyboardEle = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', 'x'],
    ['c', '0', '=', '÷']
];

keyboardEle.forEach((row) => {
    const rowEle = document.createElement('div');
    keyboard.append(rowEle);
    rowEle.classList.add('keyboard-row');

    row.forEach((key) => {
        const keyBtn = document.createElement('button');
        const btnFront = document.createElement('span');
        btnFront.innerText = key;
        keyBtn.append(btnFront);
        rowEle.append(keyBtn);
        keyBtn.classList.add('keyboard-key');
        btnFront.classList.add('keyboard-key-front');
    });
});
