document.addEventListener("DOMContentLoaded", () => {
    // ===== Sidebar Toggle for Mobile View =====
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle-sidebar");

    if (toggleButton && sidebar) {
        toggleButton.addEventListener("click", () => {
            sidebar.classList.toggle("show");
        });
    }

    // ===== Cart System =====
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) return;

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)}
                <button class="remove-item">❌</button>`;
            cartItems.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-to-cart")) {
            const name = event.target.getAttribute("data-name");
            const price = parseFloat(event.target.getAttribute("data-price"));

            if (!name || isNaN(price) || price < 0) return;

            cart.push({ name, price });
            updateCart();
        }
    });

    cartItems.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-item")) {
            const itemElement = event.target.parentElement;
            const index = [...cartItems.children].indexOf(itemElement);
            cart.splice(index, 1);
            updateCart();
        }
    });

    updateCart();

    // ===== Marquee Controls =====
    const marquee = document.querySelector(".marquee-container marquee");
    if (marquee) {
        marquee.addEventListener("mouseover", () => marquee.stop());
        marquee.addEventListener("mouseout", () => marquee.start());
    }
});
