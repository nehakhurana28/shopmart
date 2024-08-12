let cart = [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - ₹${item.price}`;
        cartElement.appendChild(itemElement);
        total += item.price;
    });

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: ₹${total}`;
    cartElement.appendChild(totalElement);
}
