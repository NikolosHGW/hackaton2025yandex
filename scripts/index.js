let urlsss = 'https://raw.githubusercontent.com/IlyaGusev/PoetryCorpus/master/datasets/django/all_django.json';

const pageChoose = document.querySelector('.page_type_choose');
const pageOrder = document.querySelector('.page_type_order');
const basketButton = document.querySelector('.right-content__basket-button');
const returnButton = document.querySelector('.left-content-order__return-button');
const deliveryButton = document.querySelector('#delivery');
const pickupButton = document.querySelector('#pickup');
const refreshVerseButton = document.querySelector('.right-content__refresh-button');
const maskPoemContent = document.querySelector('.face__verse');
const priceTotal = document.querySelector('.left-content-order__total');
const orderForm = document.querySelector('.order-form');
const pickupInfo = document.querySelector('.pickup-info');

const form = document.forms['generate-form'];
const info3 = document.querySelector('stih-hidden');
const info_print_text = document.querySelector('.ribbon-text');

function disableCurrentPage(page) {
  page.classList.add('page_disable');
}

function enablePage(page) {
  page.classList.remove('page_disable');
}

form.addEventListener('submit', e => {
  e.preventDefault();

  maskPoemContent.innerHTML = 'Генерируем стих…';

  fetch(urlsss)
  .then(res => res.json())
  .then((out) => {
      //info3.innerHTML = '';
      maskPoemContent.innerHTML = '';
    //console.log('Checkout this JSON! ', out);
    const stih = out;
    newStih = stih.slice(0,16000);
    console.log(newStih);
  })
  .then(() => {

  // form.setAttribute("style", "display: block");

  var itemStih = newStih[Math.floor(Math.random() * newStih.length)];

    console.log(itemStih.fields);
    const splits_of_stih = itemStih.fields['text'].split('\n', 4);
    console.log(splits_of_stih);

    //form.elements.stih.value = splits_of_stih;

    splits_of_stih.forEach(element => {
      console.log(element);
      maskPoemContent.insertAdjacentHTML('beforeend', element);
      maskPoemContent.insertAdjacentHTML('beforeend', '<br>');
      verseOrder = maskPoemContent.textContent;
    });


  })
  .catch(err => { throw err });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbySL9NeUX6d079WxEVPk35Wh9daSwUDJftTVO6Ki1y7w9fxsAs1/exec';
const formOrder = document.forms['delivery-form'];
const info = document.querySelector('.left-content-order__total');

formOrder.addEventListener('submit', e => {
  e.preventDefault();
  info.innerHTML = 'Отправляем…';
  fetch(scriptURL, { method: 'POST', body: new FormData(formOrder)})
  .then(() => {info.innerHTML = 'Спасибо за заказ!';}).catch(error => console.error('Error!', error.message))
});

// orderButton.addEventListener('click', () => {
//   alert("Маска добавлена в корзину");
//   quantityMask++;
// });

basketButton.addEventListener('click', () => {
  enablePage(pageOrder);
  disableCurrentPage(pageChoose);
});

deliveryButton.addEventListener('click', () => {
  orderForm.classList.remove('right-content-order__hide-block');
  pickupInfo.classList.add('right-content-order__hide-block');
});

pickupButton.addEventListener('click', () => {
  pickupInfo.classList.remove('right-content-order__hide-block');
});
