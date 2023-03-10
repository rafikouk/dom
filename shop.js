// Get all the plus and minus buttons
const plusBtns = document.querySelectorAll('.plus-btn');
const minusBtns = document.querySelectorAll('.minus-btn');

// Add event listeners to the plus and minus buttons
plusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const qtyInput = btn.parentNode.querySelector('.qty-input');
    const itemTotal = btn.parentNode.parentNode.querySelector('.item-total');
    const price = parseFloat(btn.parentNode.parentNode.querySelector('td:nth-child(2)').innerText.replace('$', ''));
    let qty = parseInt(qtyInput.value);
    qty++;
    qtyInput.value = qty;
    itemTotal.innerText = '$' + (qty * price).toFixed(2);
    updateTotal();
  });
});

minusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const qtyInput = btn.parentNode.querySelector('.qty-input');
    const itemTotal = btn.parentNode.parentNode.querySelector('.item-total');
    const price = parseFloat(btn.parentNode.parentNode.querySelector('td:nth-child(2)').innerText.replace('$', ''));
    let qty = parseInt(qtyInput.value);
    if (qty > 1) {
      qty--;
      qtyInput.value = qty;
      itemTotal.innerText = '$' + (qty * price).toFixed(2);
      updateTotal();
    }
  });
});

// Get all the delete buttons
const deleteBtns = document.querySelectorAll('.delete-btn');

// Add event listeners to the delete buttons
deleteBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateTotal();
  });
});

// Get all the like buttons
const likeBtns = document.querySelectorAll('.like-btn');



// Add event listeners to the like buttons
likeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('liked');
  });
});

// Function to update the total price
function updateTotal() {
  const itemTotals = document.querySelectorAll('.item-total');
  let totalPrice = 0;
  itemTotals.forEach(total => {
    totalPrice += parseFloat(total.innerText.replace('$', ''));
  });
  document.querySelector('.total-price').innerText = '$' + totalPrice.toFixed(2);
}
