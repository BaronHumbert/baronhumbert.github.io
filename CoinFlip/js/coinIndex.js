let itemOne = document.getElementById('coin-heads');
let itemTwo = document.getElementById('coin-tails');
let button = document.getElementById('button');
let broken = document.getElementById('broken');
let resetButton = document.getElementById('resetButton');

itemOne.style.display = 'none';
itemTwo.style.display = 'none';
broken.style.display = 'none';
resetButton.style.display = 'none';

button.style.display = 'block';

let showItem = function() {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
        return itemOne.style.display = 'block';
    } else if (randomNumber === 1) {
        return itemTwo.style.display = 'block';
    } else {
        return broken.style.display = 'block';
    }
}

button.addEventListener('mousedown', showItem);
button.addEventListener('mousedown', hideButton)

resetButton.addEventListener('mousedown', hideResetButton)

function hideButton() {
    button.style.display = 'none';
    resetButton.style.display = 'block';
}

function hideResetButton() {
    button.style.display = 'block';
    resetButton.style.display = 'none';
    itemOne.style.display = 'none';
    itemTwo.style.display = 'none';
    broken.style.display = 'none';

}



