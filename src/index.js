import './css/styles';

const refs = {
  input: document.querySelector('.input'),
  componentA: document.querySelector('.text__result-a'),
  componentB: document.querySelector('.text__result-b'),
  button: document.querySelector('.btn-result'),
};

refs.button.addEventListener('click', onButtonResultClick);

refs.input.addEventListener('input', onEnterValue);

refs.button.disabled = true;

let inputValue = '';

function onEnterValue(e) {
  inputValue = e.target.value.trim();
  if (!inputValue) {
    refs.button.disabled = true;
    refs.componentA.innerHTML = '';
    refs.componentB.innerHTML = '';
    return;
  }
  refs.button.disabled = false;
}

function onButtonResultClick() {
  if (!parseInt(inputValue)) {
    return console.log('Введите число');
  }

  const componentValueA = inputValue / 1.6;
  const componentValueB = inputValue - componentValueA;
  const markupA = `${componentValueA} грамм`;
  const markupB = `${componentValueB} грамм`;
  refs.componentA.insertAdjacentHTML('beforeend', markupA);
  refs.componentB.insertAdjacentHTML('beforeend', markupB);
  refs.button.disabled = true;
}
