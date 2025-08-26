// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const img = urlParams.get('img') || 'img/default.jpg';
const name = urlParams.get('name') || 'Unknown Product';
const price = urlParams.get('price') || '$0';

// Select cart container
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Create product item
const cartItem = document.createElement('div');
cartItem.className = 'cart-item';
cartItem.innerHTML = `
    <img src="${img}" alt="${name}">
    <div class="cart-item-info">
        <h3>${name}</h3>
        <p>Price: ${price}</p>
    </div>
`;

// Append to cart
cartItemsContainer.appendChild(cartItem);

// Update total
cartTotal.textContent = `Total: ${price}`;

// Checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout...');
});
