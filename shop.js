// shop.js

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    const productSection = document.querySelector('.product-section');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const products = productSection.querySelectorAll('.product');
        
        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    // Optional: Clear the search input and show all products if it's empty
    searchInput.addEventListener('input', () => {
        if (searchInput.value === '') {
            const products = productSection.querySelectorAll('.product');
            products.forEach(product => {
                product.style.display = 'block';
            });
        }
    });
});
