/* import JSON object */
import { data } from './data.js';

// DOM ACCESS
const productsContainer = document.getElementById('products');
const searchInput = document.getElementById('search');
const categoriesContainer = document.getElementById('categories');
const priceRange = document.getElementById('priceRange');
const priceAmount = document.getElementById('priceAmount');

// DISPLAY ALL EXISTING PRODUCTS

const displayProducts = (filteredProducts) => {
	productsContainer.innerHTML = filteredProducts
		.map(
			(product) =>
				`
       <div class="single-product">
          <img
          src=${product.img}
          alt="${product.name}"
          />
          <p class="product-name">${product.name}</p>
          <p class="product-price">${product.price} €</p>
        </div>
    `
		)
		.join('');
};

displayProducts(data);

// SEARCH INPUT
searchInput.addEventListener('keyup', (e) => {
	const value = e.target.value.toLowerCase();

	if (value) {
		displayProducts(
			data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
		);
	} else {
		displayProducts(data);
	}
});

// DISPLAY PRODUCT CATEGORIES
const setCategories = () => {
	const allCats = data.map((item) => item.category);
	const categories = [
		'TODAS',
		...allCats.filter((item, i) => {
			return allCats.indexOf(item) === i;
		}),
	];

	categoriesContainer.innerHTML = categories
		.map(
			(category) =>
				`
      <span class="product-category">${category}</span>
    `
		)
		.join('');

	categoriesContainer.addEventListener('click', (e) => {
		const selectedCategory = e.target.textContent;

		selectedCategory === 'TODAS'
			? displayProducts(data)
			: displayProducts(
					data.filter((item) => item.category === selectedCategory)
			  );
	});
};

setCategories();

// PRICE RANGE FILTER
const setPrices = () => {
	const priceList = data.map((item) => item.price);
	const minPrice = Math.min(...priceList);
	const maxPrice = Math.max(...priceList);

	priceRange.min = minPrice;
	priceRange.max = maxPrice;
	priceRange.value = maxPrice;
	priceAmount.textContent = '€' + maxPrice;

	priceRange.addEventListener('input', (e) => {
		priceAmount.textContent = '€' + e.target.value;
		displayProducts(data.filter((item) => item.price <= e.target.value));
	});
};

setPrices();
