// SEARCH BOX - START

const searchIcon = document.querySelector('.header__search-icon img');
const searchBox = document.querySelector('.header__search-box');

searchIcon.addEventListener('click', () => {
	searchBox.classList.toggle('active');
});

const searchInput = document.querySelector('.header__search-box input');
const products = document.querySelectorAll('.header__submenu-item');

searchInput.addEventListener('keyup', () => {
	const searchQuery = searchInput.value.toLowerCase();

	products.forEach(product => {
		const productName = product.textContent.toLowerCase();

		if (productName.includes(searchQuery)) {
			product.style.display = 'block';
		} else {
			product.style.display = 'none';
		}
	});
});

// SEARCH BOX - END
