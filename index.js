const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  elBtnStart: document.querySelector('[data-action="start"]'),
  elBtnStop: document.querySelector('[data-action="stop"]'),
};

let colorSwitch = null;

const onClickStart = refs.elBtnStart.addEventListener('click', onStart);
const onClickStop = refs.elBtnStop.addEventListener('click', onStop);

function onStart() {
  refs.elBtnStart.setAttribute('disabled', true);
  colorSwitch = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function onStop() {
  refs.elBtnStart.removeAttribute('disabled');
  clearInterval(colorSwitch);
}

// console.log(refs.elBtnStart);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
