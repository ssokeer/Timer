// Variables
let minute = 00,
second = 00,
millisecond = 00,
interval,
counter = 0,
disabled = true;

$.timer = function (options) {
    const $timer = _createTimer(options);
}

function _createTimer(options) {
    const timer = document.createElement('div');
    timer.classList.add('container');
    timer.insertAdjacentHTML('afterbegin', `
        <div class="timer">
            <div class="timer__block">
                <div class="time minute" data-minute>00</div>
                <div class="title">Minutes</div>
            </div>

            <div class="timer__block">
                <div class="time second" data-second>00</div>
                <div class="title">Seconds</div>
            </div>

            <div class="timer__block">
                <div class="time millisecond" data-millisecond>00</div>
                <div class="title">Milliseconds</div>
            </div>
        </div>

        <div class="buttons">
            <button class="button start" data-start>Start</button>
            <button class="button pause" data-pause>Pause</button>
            <button class="button stop" data-stop>Stop</button>
            <button class="button interval" data-interval>Interval</button>

        </div>
        <div class="results__block">
            <div class="results__title">Rezults:</div>
            <div class="results" data-results></div>
        </div>
    `)

    let millisecondElement = timer.querySelector('[data-millisecond]');
    let secondElement = timer.querySelector('[data-second]');
    let minuteElement = timer.querySelector('[data-minute]');

    let results = timer.querySelector('[data-results]')

    const startButton = timer.querySelector('[data-start]')
    startButton.addEventListener('click', () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        console.log('start');
    })
 
    const pauseButton = timer.querySelector('[data-pause]')
    pauseButton.addEventListener('click', () => {
        clearInterval(interval);
        console.log('pause');
    })

    const intervalButton = timer.querySelector('[data-interval]')
    intervalButton.addEventListener('click', () => {
        let sec;
        counter++;
        const block = document.createElement('div');
        block.classList.add('results__info');
        results.append(block);
        console.log('interval');
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

    const stopButton = timer.querySelector('[data-stop]')
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


    document.body.appendChild(timer);
    return timer;
}

