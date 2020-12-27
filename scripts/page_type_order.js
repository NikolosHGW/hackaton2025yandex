const masksContainer = document.querySelector('.left-content-order__masks');
const itemMaskTemplate = document.querySelector('#item-mask-template').content;
const priceTotal = document.querySelector('.left-content-order__total');
const colorHref = {
  blue: './images/mask.svg',
  slategray: './images/mask-brown.svg',
  purple: './images/mask-blue.svg'
};


function setTotal(num) {
  priceTotal.textContent = `Итог: ${Number(num) * 1200}₽`;
}

function decreaseQuantity(num) {
  let quant = Number(num);
  return quant > 0 ? --quant : 0;
}

function increaseQuantity(num) {
  let quant = Number(num);
  return ++quant;
}

function addOrderedMask(container, maskOrderedItem) {
  container.prepend(maskOrderedItem);
}

function removeMaskContainerItem(num) {
  if (num == 0) {
    masksContainer.innerHTML = '';
    orderButton.removeAttribute('disabled', 'disabled');
    orderButton.classList.remove('left-content__order-button_inactive');
    inputHide.value = '';
  }
}

function createOrderedMaskContainer() {
  const maskContainerItem = itemMaskTemplate.cloneNode(true);
  const imageMask = maskContainerItem.querySelector('.item-mask__mask');
  const infoMask = maskContainerItem.querySelector('.item-mask__info');
  // const totalMask = maskContainerItem.querySelector('.item-mask__total');
  const minusButtonMask = maskContainerItem.querySelector('.item-mask__minus-button');
  const quantityMask = maskContainerItem.querySelector('.item-mask__quantity');
  const plusButtonMask = maskContainerItem.querySelector('.item-mask__plus-button');

  imageMask.src = colorHref[colorOrder];
  infoMask.insertAdjacentText('afterbegin', `Маска с легальным самовыражением. ${colorOrder}`);
  minusButtonMask.addEventListener('click', () => {
    quantityMask.textContent = String(decreaseQuantity(quantityMask.textContent));
    quantityOrder = Number(quantityMask.textContent);
    inputHide.value = '';
    inputHide.value += getOrderInput();
    removeMaskContainerItem(quantityMask.textContent);
    setTotal(quantityMask.textContent);
  });
  plusButtonMask.addEventListener('click', () => {
    quantityMask.textContent = String(increaseQuantity(quantityMask.textContent));
    quantityOrder = Number(quantityMask.textContent);
    inputHide.value = '';
    inputHide.value += getOrderInput();
    setTotal(quantityMask.textContent);
  });
  return maskContainerItem;
}
