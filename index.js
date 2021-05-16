const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]'),
}

let timerChange = null;

function changeRandom() {
    
    const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }; 
    
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

refs.start.addEventListener("click", startBtnClick);
refs.stop.addEventListener("click", stopBtnClick);

function startBtnClick() {
    refs.start.disabled = true;
    refs.stop.disabled = false;
    timerChange = setInterval(changeRandom, 1000)
};

function stopBtnClick() {
    refs.start.disabled = false;
    clearInterval(timerChange)
};