let button = document.getElementById('button');
let broken = document.getElementById('broken');

broken.style.display = 'none';
button.style.display = 'block';

let showItem = function() {
    let redNumber = Math.floor(Math.random() * 255);
    let greenNumber = Math.floor(Math.random() * 255);
    let blueNumber = Math.floor(Math.random() * 255);
    let colorCode = [redNumber, greenNumber, blueNumber];
    let colorCodeString = colorCode.join(', ')
    let colorCodeBack = `rgb(${colorCodeString})`;
    
    document.getElementById('colorcode').innerHTML = colorCodeString;
    document.body.style.backgroundColor = colorCodeBack;
}

button.addEventListener('mousedown', showItem);
