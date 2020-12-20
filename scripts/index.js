let urlsss = 'https://raw.githubusercontent.com/IlyaGusev/PoetryCorpus/master/datasets/django/all_django.json';
let quantityMask = 0;

const orderButton = document.querySelector('.header__order-button');
const basketButton = document.querySelector('.content__basket-button');
const refreshVerseButton = document.querySelector('.content__refresh-button');
const maskPoemContent = document.querySelector('.face__verse');

const form = document.forms['generate-form'];
const info3 = document.querySelector('stih-hidden');
const info_print_text = document.querySelector('.ribbon-text');

form.addEventListener('submit', e => {
  e.preventDefault();
  //info3.innerHTML = 'Отправляем…';
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

  form.setAttribute("style", "display: block");

  var itemStih = newStih[Math.floor(Math.random() * newStih.length)];

    console.log(itemStih.fields);
    const splits_of_stih = itemStih.fields['text'].split('\n', 4);
    console.log(splits_of_stih);

    //form.elements.stih.value = splits_of_stih;

    splits_of_stih.forEach(element => {
      console.log(element);
      maskPoemContent.insertAdjacentHTML('beforeend', element);
      maskPoemContent.insertAdjacentHTML('beforeend', '<br>');
    });


  })
  .catch(err => { throw err });




})


orderButton.addEventListener('click', () => {
  alert("Маска добавлена в корзину");
  quantityMask++;
});

basketButton.addEventListener('click', () => {alert(`Масок в корзине: ${quantityMask} шт`)})
