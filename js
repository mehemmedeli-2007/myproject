// CART

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART

function addToCart(name, price) {

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    showCheckmark();
}

// CHECKMARK

function showCheckmark() {

    const checkmark = document.getElementById("checkmark");

    checkmark.classList.add("show");

    setTimeout(() => {
        checkmark.classList.remove("show");
    }, 1500);
}

// DISPLAY CART

function displayCart() {

    const cartItems = document.getElementById("cart-items");

    const totalPrice = document.getElementById("total-price");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        const li = document.createElement("li");

        li.classList.add("cart-item");

        li.innerHTML = `
            <span>
                ${item.name} - $${item.price}
            </span>

            <button class="remove-btn"
                onclick="removeItem(${index})">
                ❌
            </button>
        `;

        cartItems.appendChild(li);

        total += item.price;
    });

    totalPrice.textContent = `Total: $${total}`;
}

// BUY

function buyNow() {

    if (cart.length === 0) {
        return;
    }

    localStorage.removeItem("cart");

    cart = [];

    displayCart();

    alert("Purchase successful!");
}

// REMOVE ITEM

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// START

displayCart();
