function showSection(sectionId) {
    document.querySelectorAll('.product-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('all-products');
});

// Sidebar Toggle Function
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("show");
}

// Filter Products by Category
function showCategory(category) {
    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.style.display = (category === 'all' || product.dataset.category === category) ? "block" : "none";
    });
}

// Search Function
function searchProducts() {
    let searchInput = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        let title = product.querySelector("h3").textContent.toLowerCase();
        product.style.display = title.includes(searchInput) ? "block" : "none";
    });
}

// Filter Products
function filterProducts() {
    let selectedCategory = document.getElementById("filter").value;
    showCategory(selectedCategory);
}

document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));

            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Load saved cart
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
            <button class="remove-item" data-index="${index}">❌</button>`;
            cartItems.appendChild(li);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
        localStorage.setItem("cart", JSON.stringify(cart)); // Save cart
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));

            cart.push({ name, price });
            updateCart();
        });
    });

    cartItems.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-item")) {
            const index = event.target.getAttribute("data-index");
            cart.splice(index, 1);
            updateCart();
        }
    });

    updateCart(); // Load saved cart
});
