document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.parentElement;
            const name = product.querySelector("h2").innerText;
            const price = parseFloat(product.querySelector(".price").innerText);

            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - ${item.price} درهم 
                <button onclick="removeFromCart(${index})">❌</button>`;
            cartItems.appendChild(li);
            total += item.price;
        });

        cartCount.innerText = cart.length;
        totalPrice.innerText = total.toFixed(2);
    }

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCart();
    };

    document.getElementById("checkout").addEventListener("click", () => {
        alert("سيتم الدفع عبر PayPal قريبًا! 🚀");
    });
});