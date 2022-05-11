import { obj } from './keys.js';
// wrapper
const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
body.append(wrapper);
// header
const header = document.createElement('header');
const heading = '<h1 class="heading">Virtual keyboard</h1>';
header.innerHTML = heading;
wrapper.append(header);
// main
const main = document.createElement('main');
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
wrapper.append(main);
main.append(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
main.append(keyboard);

// footer
const footer = document.createElement('footer');
wrapper.append(footer);
const footerHeading = document.createElement('div');
footerHeading.classList.add('footer-heading');
footer.append(footerHeading);
footerHeading.textContent = 'To switch language press : ctrl+alt';

// local storage
let lan = 'eng';
let reg = 'lowerCase';
// class Keyboard=

class Key {
  constructor(key, register = reg, lang = lan) {
    this.info = key;
    this.tag = document.createElement('div');
    this.register = register;
    this.lang = lang;
    this.tag.innerText = key[this.lang][this.register];
    this.keycode = key.keyCode;
    this.tag.dataset.keyCode = key.keyCode;
  }

  changeLanguage(lang) {
    this.lang = lang;
  }

  changeLayout() {
    this.tag.innerHTML = this.info[this.lang][this.register];
  }
}

// array with objects
let keys = [];

for (let i = 0; i < obj.length; i += 1) {
  let key = new Key(obj[i]);
  key.tag.classList.add('key');
  keyboard.append(key.tag);
  keys.push(key);
  if (key.tag.dataset.keyCode === 'Backspace') {
    key.tag.classList.add('backspace');
  } else if (key.tag.dataset.keyCode === 'Tab') {
    key.tag.classList.add('tab');
  } else if (key.tag.dataset.keyCode === 'Delete') {
    key.tag.classList.add('del');
  } else if (key.tag.dataset.keyCode === 'CapsLock') {
    key.tag.classList.add('caps-lock');
  } else if (key.tag.dataset.keyCode === 'Enter') {
    key.tag.classList.add('enter');
  } else if (key.tag.dataset.keyCode === 'ShiftLeft' || key.tag.dataset.keyCode === 'ShiftRight') {
    key.tag.classList.add('shift');
  } else if (key.tag.dataset.keyCode === 'MetaLeft') {
    key.tag.classList.add('window');
  } else if (key.tag.dataset.keyCode === 'Space') {
    key.tag.classList.add('space');
  } else if (key.tag.dataset.keyCode === 'AltLeft' || key.tag.dataset.keyCode === 'AltRight') {
    key.tag.classList.add('alt');
  } else if (key.tag.dataset.keyCode === 'ControlRight' || key.tag.dataset.keyCode === 'ControlLeft') {
    key.tag.classList.add('ctrl');
  }
}

// check language
let capsLock = document.querySelector('.caps-lock');
let shift = document.querySelectorAll('.shift');

// checker
let checker = {
  isCtrl: false,
  isEng: true,
  isUpper: false
};

// capslock
function capsLockchangeRegister() {
  if (!checker.isUpper) {
    keys.forEach(n => {
      n.register = 'upperCase';
      n.changeLayout();
      reg = 'upperCase';
    });
    capsLock.classList.add('pressed');
    checker.isUpper = true;
  } else {
    keys.forEach(n => {
      n.register = 'lowerCase';
      reg = 'lowerCase';
      n.changeLayout();
    });
    capsLock.classList.remove('pressed');
    checker.isUpper = false;
  }
}
// SHIFT REGISTER CHANGE

function pushShift() {
  if (checker.isUpper) {
    keys.forEach(n => {
      n.register = 'lowerCase';
      n.changeLayout();
    });
  } else {
    keys.forEach(n => {
      n.register = 'upperCase';
      n.changeLayout();
    });
  }
}
function pullShift() {
  if (checker.isUpper) {
    keys.forEach(n => {
      n.register = 'upperCase';
      n.changeLayout();
    });
  } else {
    keys.forEach(n => {
      n.register = 'lowerCase';
      n.changeLayout();
    });
  }
}
shift.forEach(n => {
  n.addEventListener('mousedown', pushShift);
  n.addEventListener('mouseup', pullShift);
});

// change Language
function changeLanguage() {
  if (checker.isEng) {
    keys.forEach(n => {
      n.lang = 'ru';
      lan = 'ru';
      n.changeLayout();
    });
    checker.isEng = false;
  } else {
    keys.forEach(n => {
      n.lang = 'eng';
      lan = 'eng';
      n.changeLayout();
    });
    checker.isEng = true;
  }
}

// add to textarea
function addToTextarea(element) {
  if (element.textContent === 'Backspace') {
    if (textarea.selectionStart) {
      textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
    }
  } else if (element.textContent === 'enter') {
    textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
    return '';
  } else if (element.textContent === 'Del') {
    if (textarea.selectionEnd + 1) {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
    }
  } else if (element.textContent === 'Space') {
    textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
  } else if (element.textContent === 'Tab') {
    textarea.setRangeText('    ', textarea.selectionStart, textarea.selectionEnd, 'end');
  } else if (element.textContent === 'shift') {
    return '';
  } else if (element.textContent === 'CapsLock') {
    capsLockchangeRegister();
  } else if (element.textContent === 'ALT') {
    return '';
  } else if (element.textContent === 'ctrl') {
    return '';
  } else {
    textarea.setRangeText(element.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
  }
  return true;
}
function disableKeys() {
  keys.forEach(n => n.tag.classList.remove('active'));
}

keys.forEach(n => {
  n.tag.addEventListener('click', () => {
    addToTextarea(n.tag);
  });
  n.tag.addEventListener('mousedown', () => {
    disableKeys();
    n.tag.classList.add('active');
    if (n.tag.textContent === 'ctrl') {
      checker.isCtrl = true;
    }
  });
  n.tag.addEventListener('mouseup', () => {
    n.tag.classList.remove('active');
  });
});

// write with keyboard

body.addEventListener('keydown', (e) => {
  e.preventDefault();
  keys.forEach(key => {
    if (key.tag.dataset.keyCode === e.code) {
      key.tag.classList.add('active');
      addToTextarea(key.tag);
      if (key.tag.textContent === 'shift') {
        pushShift();
      }
      if (key.tag.textContent === 'ctrl') {
        checker.isCtrl = true;
      }
      if (checker.isCtrl && key.tag.textContent === 'ALT') {
        changeLanguage();
        checker.isCtrl = false;
      }
    }
  });
});
body.addEventListener('keyup', (e) => {
  e.preventDefault();
  keys.forEach(key => {
    if (key.tag.dataset.keyCode === e.code) {
      key.tag.classList.remove('active');
      if (key.tag.textContent === 'shift') {
        pullShift();
      }
    }
  });
});
// local storage
window.addEventListener('beforeunload', () => {
  localStorage.setItem('language', lan);
});
window.addEventListener('load', () => {
  lan = localStorage.getItem('language');
  if (lan === 'eng') {
    checker.isEng = true;
  } else {
    checker.isEng = false;
  }
  keys.forEach(n => {
    n.lang = lan;
    n.changeLayout();
  });
});
