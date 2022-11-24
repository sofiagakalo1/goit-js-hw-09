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

function onStartBtnClick() {
  //перевірямо кнопку на активність
  disabledBtn();
  //визначаємо айді інтервалу, який виконуться
  idInterval = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
}
function onStopBtnClick() {
  //перевірямо кнопку на активність
  disabledBtn();
  //знімамо інтервал з визначеним айді
  clearInterval(idInterval);
}
function disabledBtn() {
  if (refs.startBtn.disabled) {
    //якщо твердження тру, то треба його змінити на фолс(якщо кнопка старт вже disabled то треба її зробити активною, а кнопку стоп - неактивною)
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  } else {
    //якщо кнопка старт активна, то її треба зробити неактивною, а кнопку стоп - активною
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }
}
