document.getElementById('search-btn').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.trim();
  if (query) {
    alert(`Пошук: ${query}`);
  } else {
    alert('Введіть запит для пошуку.');
  }
});

const productList = document.getElementById('product-list');
document.getElementById('product-prev').addEventListener('click', () => {
  productList.scrollBy({ left: -100, behavior: 'smooth' });
});
document.getElementById('product-next').addEventListener('click', () => {
  productList.scrollBy({ left: 100, behavior: 'smooth' });
});

// Promo next (for potential future slides)
document.getElementById('promo-next').addEventListener('click', () => {
  alert('Наступна акція');
});