document.addEventListener('DOMContentLoaded', () => {
    const cartTable = document.querySelector('.cart table tbody');
    const totalElement = document.querySelector('.cart p');

    // Function to update the total cost
    function updateTotal() {
        let total = 0;
        cartTable.querySelectorAll('tr').forEach(row => {
            const price = parseFloat(row.cells[1].textContent.replace('$', ''));
            const quantity = parseInt(row.cells[2].querySelector('input').value, 10);
            const rowTotal = price * quantity;
            row.cells[3].textContent = `$${rowTotal.toFixed(2)}`;
            total += rowTotal;
        });
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Function to load cart items from localStorage
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.product}</td>
                <td>$${parseFloat(item.price).toFixed(2)}</td>
                <td><input type="number" value="1" min="1"></td>
                <td>$${parseFloat(item.price).toFixed(2)}</td>
                <td><button>Remove</button></td>
            `;
            cartTable.appendChild(row);
        });
        updateTotal();
    }

    // Load cart items on page load
    loadCart();

    // Event listener for quantity changes
    cartTable.addEventListener('input', (e) => {
        if (e.target.type === 'number') {
            updateTotal();
        }
    });

    // Event listener for remove buttons
    cartTable.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            e.target.closest('tr').remove();
            updateTotal();
        }
    });

    // Initial total calculation
    updateTotal();
});
