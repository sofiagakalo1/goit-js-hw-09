// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону < body > на випадкове значення,
//     використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів.
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let idInterval = null;

function onStartBtnClick() {
  //перевірямо кнопку на активність
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  //визначаємо айді інтервалу, який виконуться
  idInterval = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
}
function onStopBtnClick() {
  //перевірямо кнопку на активність
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  //знімамо інтервал з визначеним айді
  clearInterval(idInterval);
}