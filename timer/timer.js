// Timer fields
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const millisecondElement = document.querySelector('.millisecond');

// Bottons
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const intervalButton = document.querySelector('.interval');




let results = document.querySelector('.results');

// Variables
let minute = 00,
    second = 00,
    millisecond = 00,
    interval,
    counter = 0,
    disabled = true;

// Listeners
startButton.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval);
})



intervalButton.addEventListener('click', () => {
    let sec;
    counter++;
    const block = document.createElement('div');
    block.classList.add('results__info');
    results.append(block);

    if (second <= 9) {
        sec = '0' + second;
    }
    if (second > 9) {
        sec = second;
    }
    if (millisecond < 9) {
        millisecond = '0' + millisecond;
    }
   
    block.innerText = `Results ${counter}: ${minute}:${sec}:${millisecond}`;
})

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    minute = 00;
    second = 00;
    millisecond = 00;
    minuteElement.textContent = '00';
    secondElement.textContent = '00'; 
    millisecondElement.textContent = '00'; 

    counter = 0;

    disableBtn();
})



function startTimer() {
    millisecond++;
    
    // Miliseconds
    if (millisecond < 9) {
        millisecondElement.innerText = '0' + millisecond;
    }
    if (millisecond > 9) {
        millisecondElement.innerText = millisecond;
    }
    if (millisecond > 99) {
        second++;
        secondElement.innerText = '0' + second;
        millisecond = 0;
        millisecondElement.innerText = '0' + millisecond;
    }

    // Seconds
    if (second > 9) {
        secondElement.innerText = second;
    }
    if (second < 9) {
        secondElement.innerText = '0' + second;
    }
    if (second > 59) {
        minute++;
        minuteElement.innerText = '0' + minute;
        second = 0;
        secondElement.innerText = '0' + second
    }

    intervalButton.disabled = false
}

function disableBtn() {
    if (disabled) {
        intervalButton.disabled = true;
    }
}

disableBtn();

