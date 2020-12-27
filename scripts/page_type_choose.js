const blueButton = document.querySelector('.colors__button_color_blue');
const slategrayButton = document.querySelector('.colors__button_color_slategray');
const purpleButton = document.querySelector('.colors__button_color_purple');
const colorButtons = [blueButton, slategrayButton, purpleButton];
const sButton = document.querySelector('.colors__button_size_s');
const mButton = document.querySelector('.colors__button_size_m');
const lButton = document.querySelector('.colors__button_size_l');
const sizeButtons = [sButton, mButton, lButton];
const faceMask = document.querySelector('.face__mask');
const faceVerse = document.querySelector('.face__verse');
const orderButton = document.querySelector('.left-content__order-button');
const inputHide = document.querySelector('.order-form__input_hide');
const colorUrls = {
  blue: 'url(../../../images/mask.svg)',
  slategray: 'url(../../../images/mask-brown.svg)',
  purple: 'url(../../../images/mask-blue.svg)'
};

let quantityBlue = 1;
let quantitySlategray = 1;
let quantityPurple = 1;
let quantityOrder = 1;
let colorOrder = 'blue';
let sizeOrder = 'S';
let verseOrder = faceVerse.textContent;
// let orderInput = `${quantityOrder} x ${colorOrder} x ${verseOrder}\n`;


//Функция для изменения бэкграунд картинки для маски
function changeColorMask(url) {
  faceMask.style.backgroundImage = url;
}

//Функция определяет цвет маски и меняет название цвета для переменной, которая будет добавлена в спрятанный ипут
function identifyColor(evt = null) {
  let color = evt === null ? 'empty' : evt.target.classList[1];
  switch (color) {
    case 'colors__button_color_blue' : {
      colorOrder = 'blue';
      break;
    }
    case 'colors__button_color_slategray' : {
      colorOrder = 'slategray';
      break;
    }
    case 'colors__button_color_purple' : {
      colorOrder = 'purple';
      break;
    }
    default: {
      colorOrder = 'blue';
      break;
    }
  }
}

//Функция определяет размер маски и меняет название размера для переменной, которая будет добавлена в спрятанный ипут
function identifySize(evt = null) {
  let size = evt === null ? 'empty' : evt.target.classList[1];
  switch (size) {
    case 'colors__button_size_s' : {
      sizeOrder = 'S';
      break;
    }
    case 'colors__button_size_m' : {
      sizeOrder = 'M';
      break;
    }
    case 'colors__button_size_l' : {
      sizeOrder = 'L';
      break;
    }
    default: {
      sizeOrder = 'S';
      break;
    }
  }
}

function getOrderInput() {
  return `${quantityOrder} x ${colorOrder} x ${sizeOrder} x ${verseOrder}\n`;
}


orderButton.addEventListener('click', () => {
  inputHide.value += getOrderInput();
  console.log(inputHide.value);
  orderButton.setAttribute('disabled', 'disabled');
  orderButton.classList.add('left-content__order-button_inactive');
  addOrderedMask(masksContainer, createOrderedMaskContainer());
});


colorButtons.forEach(button => {
  button.addEventListener('click', evt => {
    let check = evt.target.classList[1];
    identifyColor(evt);
    switch (check) {
      case 'colors__button_color_blue' : {
        changeColorMask(colorUrls.blue);
        break;
      }
      case 'colors__button_color_slategray' : {
        changeColorMask(colorUrls.slategray);
        break;
      }
      case 'colors__button_color_purple' : {
        changeColorMask(colorUrls.purple);
        break;
      }
      default: {
        changeColorMask(colorUrls.blue);
      }
    }
  })
});

sizeButtons.forEach(button => {
  button.addEventListener('click', evt => {
    identifySize(evt);
  })
});
