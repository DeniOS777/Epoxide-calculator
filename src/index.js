import './css/styles';

const refs = {
  input: document.querySelector('.input'),
  componentA: document.querySelector('.text__result-a'),
  componentB: document.querySelector('.text__result-b'),
  button: document.querySelector('.btn'),
};

refs.button.addEventListener('click', onButtonResultClick);
refs.input.addEventListener('input', onEnterValue);

let inputValue = '';

function onEnterValue(e) {
  inputValue = e.target.value.trim();
  if (!inputValue) {
    clearRenderResults();
    activatedAndVisibleButton();
    return;
  }
  activatedAndVisibleButton();
}

function onButtonResultClick() {
  clearRenderResults();

  if (!parseInt(inputValue)) {
    return console.log('Введите число');
  }

  const componentValueA = inputValue / 1.6;
  renderComponentA(componentValueA);

  const componentValueB = inputValue - componentValueA;
  renderComponentB(componentValueB);
  disabledAndHiddenButton();
}

function clearRenderResults() {
  refs.componentA.innerHTML = '';
  refs.componentB.innerHTML = '';
}

function disabledAndHiddenButton() {
  refs.button.disabled = true;
  refs.button.classList.add('is-hidden');
}

function activatedAndVisibleButton() {
  refs.button.disabled = false;
  refs.button.classList.remove('is-hidden');
}

function renderComponentA(componentValueA) {
  const markupA = `${componentValueA} <span class="text--black">грамм</span>`;
  refs.componentA.insertAdjacentHTML('beforeend', markupA);
}

function renderComponentB(componentValueB) {
  const markupB = `${componentValueB} <span class="text--black">грамм</span>`;
  refs.componentB.insertAdjacentHTML('beforeend', markupB);
}
