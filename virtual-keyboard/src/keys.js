const characters = [
  ['Backquote', '`', '~', 'ё', 'Ё'],
  ['Digit1', '1', '!', '1', '!'],
  ['Digit2', '2', '@', '2', '"'],
  ['Digit3', '3', '#', '3', '№'],
  ['Digit4', '4', '$', '4', ';'],
  ['Digit5', '5', '%', '5', '%'],
  ['Digit6', '6', '^', '6', ':'],
  ['Digit7', '7', '&', '7', '?'],
  ['Digit8', '8', '*', '8', '*'],
  ['Digit9', '9', '(', '9', '('],
  ['Digit0', '0', ')', '0', ')'],
  ['Minus', '-', '_', '-', '_'],
  ['Equal', '=', '+', '=', '+'],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
  ['KeyQ', 'q', 'Q', 'й', 'Й'],
  ['KeyW', 'w', 'W', 'ц', 'Ц'],
  ['KeyE', 'e', 'E', 'у', 'У'],
  ['KeyR', 'r', 'R', 'к', 'К'],
  ['KeyT', 't', 'T', 'е', 'Е'],
  ['KeyY', 'y', 'Y', 'н', 'Н'],
  ['KeyU', 'u', 'U', 'г', 'Г'],
  ['KeyI', 'i', 'I', 'ш', 'Ш'],
  ['KeyO', 'o', 'O', 'щ', 'Щ'],
  ['KeyP', 'p', 'P', 'з', 'З'],
  ['BracketLeft', '[', '{', 'х', 'Х'],
  ['BracketRight', ']', '}', 'ъ', 'Ъ'],
  ['Backslash', '\\', '|', '/', '\\'],
  ['Delete', 'Del', 'Del', 'Del', 'Del'],
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
  ['KeyA', 'a', 'A', 'ф', 'Ф'],
  ['KeyS', 's', 'S', 'ы', 'Ы'],
  ['KeyD', 'd', 'D', 'в', 'В'],
  ['KeyF', 'f', 'F', 'а', 'А'],
  ['KeyG', 'g', 'G', 'п', 'П'],
  ['KeyH', 'h', 'H', 'р', 'Р'],
  ['KeyJ', 'j', 'J', 'о', 'О'],
  ['KeyK', 'k', 'K', 'л', 'Л'],
  ['KeyL', 'l', 'L', 'д', 'Д'],
  ['Semicolon', ';', ':', 'ж', 'Ж'],
  ['Quote', '"', '\'', 'э', 'Э'],
  ['Enter', 'enter', 'enter', 'enter', 'enter'],
  ['ShiftLeft', 'shift', 'shift', 'shift', 'shift'],
  ['KeyZ', 'z', 'Z', 'я', 'Я'],
  ['KeyX', 'x', 'X', 'ч', 'Ч'],
  ['KeyC', 'c', 'C', 'с', 'С'],
  ['KeyV', 'v', 'V', 'м', 'М'],
  ['KeyB', 'b', 'B', 'и', 'И'],
  ['KeyN', 'n', 'N', 'т', 'Т'],
  ['KeyM', 'm', 'M', 'ь', 'Ь'],
  ['Comma', ',', '<', 'б', 'Б'],
  ['Period', '.', '>', 'ю', 'Ю'],
  ['Slash', '/', '?', '.', ','],
  ['ArrowUp', '▲', '▲', '▲', '▲'],
  ['ShiftRight', 'shift', 'shift', 'shift', 'shift'],
  ['ControlLeft', 'ctrl', 'ctrl', 'ctrl', 'ctrl'],
  ['AltLeft', 'ALT', 'ALT', 'ALT', 'ALT'],
  ['Space', 'Space', 'Space', 'Space', 'Space'],
  ['AltRight', 'ALT', 'ALT', 'ALT', 'ALT'],
  ['ArrowLeft', '◄', '◄', '◄', '◄'],
  ['ArrowDown', '▼', '▼', '▼', '▼'],
  ['ArrowRight', '►', '►', '►', '►'],
  ['ControlRight', 'ctrl', 'ctrl', 'ctrl', 'ctrl']
];
export const obj = characters.map(n => {
  return {
    keyCode: n[0],
    eng: {
      upperCase: n[2],
      lowerCase: n[1]
    },
    ru: {
      upperCase: n[4],
      lowerCase: n[3]
    }
  };
});
