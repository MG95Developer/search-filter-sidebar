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

// DISPLAY PRODUCT CATEGORIES

// PRICE RANGE FILTER
